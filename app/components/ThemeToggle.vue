<script setup lang="ts">
const { language } = useLanguage()
const { resolvedMode, toggleTheme } = useTheme()

const aria = computed(() =>
  language.value === 'ru'
    ? {
        label: 'Тема оформления',
        light: 'Светлая тема',
        dark: 'Тёмная тема',
      }
    : {
        label: 'Theme',
        light: 'Light theme',
        dark: 'Dark theme',
      },
)

const isDark = computed(() => resolvedMode.value === 'dark')
</script>

<template>
  <button
    type="button"
    class="grid size-10 place-items-center rounded-full border border-border bg-muted/50 text-foreground shadow-inner shadow-black/5 transition hover:bg-muted dark:shadow-black/25"
    role="switch"
    :aria-checked="isDark"
    :aria-label="isDark ? aria.dark : aria.light"
    :title="isDark ? aria.dark : aria.light"
    @click="toggleTheme"
  >
    <Icon
      :name="isDark ? 'lucide:sun' : 'lucide:moon'"
      class="size-[1.15rem]"
      aria-hidden="true"
    />
    <span class="absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0">{{ aria.label }}</span>
  </button>
</template>
