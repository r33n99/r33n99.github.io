<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const { language } = useLanguage()
const { resolvedMode, toggleTheme } = useTheme()

/**
 * На сервере нет localStorage и matchMedia, поэтому resolvedMode там всегда
 * светлый, а на клиенте читается уже в setup. Видимая часть кнопки от темы
 * не зависит, так что aria-состояние и тайтл подставляем после монтирования —
 * разметка сервера и первого клиентского рендера совпадает.
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
    class="flex min-h-11 cursor-pointer items-center gap-2 border-3 border-ink bg-transparent font-body text-[17px] leading-none text-ink transition-[transform,background-color] duration-300 ease-[var(--ease-comic)] hover:rotate-[-3deg] hover:bg-[color-mix(in_srgb,var(--marker-yellow)_35%,transparent)]"
    :class="compact ? 'size-11 justify-center rounded-full' : 'rounded-[20px] px-3.5 py-2'"
    @click="toggleTheme"
  >
    <span aria-hidden="true">◐</span>
    <span v-if="!compact">{{ copy.label }}</span>
  </button>
</template>
