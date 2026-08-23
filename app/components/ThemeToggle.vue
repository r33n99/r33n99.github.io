<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const { language } = useLanguage()
const { resolvedMode, toggleTheme } = useTheme()

/**
 * На сервере localStorage и matchMedia нет, поэтому resolvedMode там всегда 'light',
 * а на клиенте useStorage читает значение уже в setup — расхождение ломало гидрацию.
 * Видимая часть кнопки от темы не зависит (глиф и подпись одни и те же), так что
 * aria-состояние и тайтл подставляем после монтирования: разметка сервера и первого
 * клиентского рендера совпадает, дальше Vue обновляет атрибуты уже вне гидрации.
 */
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

const isDark = computed(() => isMounted.value && resolvedMode.value === 'dark')

const copy = computed(() =>
  language.value === 'ru'
    ? { label: 'Тема', light: 'Включить светлую тему', dark: 'Включить тёмную тему' }
    : { label: 'Theme', light: 'Switch to light theme', dark: 'Switch to dark theme' },
)

const title = computed(() =>
  isMounted.value ? (isDark.value ? copy.value.light : copy.value.dark) : copy.value.label,
)
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isDark"
    :aria-label="title"
    :title="title"
    class="flex min-h-11 cursor-pointer items-center gap-2 border-2 border-border bg-transparent text-[13px] font-medium leading-none text-muted-foreground transition-colors duration-150 ease-out hover:border-primary hover:text-foreground"
    :class="compact ? 'size-11 justify-center px-0' : 'px-3 py-2.5'"
    @click="toggleTheme"
  >
    <span aria-hidden="true" class="text-base leading-none">◐</span>
    <span v-if="!compact">{{ copy.label }}</span>
  </button>
</template>
