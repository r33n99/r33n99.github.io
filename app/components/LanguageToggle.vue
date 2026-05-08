<script setup lang="ts">
const { language, setLanguage } = useLanguage()

const nextLanguage = computed(() => (language.value === 'ru' ? 'en' : 'ru'))
const labels = computed(() =>
  language.value === 'ru'
    ? {
        title: 'Переключить язык на English',
      }
    : {
        title: 'Switch language to Russian',
      },
)

function toggleLanguage(): void {
  setLanguage(nextLanguage.value)
}
</script>

<template>
  <button
    type="button"
    class="min-w-16 rounded-full border border-border bg-muted/45 px-3 py-2 text-xs font-semibold text-foreground shadow-inner shadow-foreground/10 transition hover:bg-muted/70 dark:shadow-black/25"
    :title="labels.title"
    :aria-label="labels.title"
    @click="toggleLanguage"
  >
    {{ language.toUpperCase() }}
  </button>
</template>
