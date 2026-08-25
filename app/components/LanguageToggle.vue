<script setup lang="ts">
import type { Language } from '~/composables/useLanguage'

const { language, setLanguage } = useLanguage()

const options: { value: Language; label: string }[] = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
]

const titles: Record<Language, string> = {
  ru: 'Переключить язык на русский / Switch language to Russian',
  en: 'Переключить язык на английский / Switch language to English',
}
</script>

<template>
  <div
    class="flex w-fit shrink-0 self-center overflow-hidden rounded-[20px] border-3 border-ink"
    role="group"
    aria-label="Language / Язык"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :aria-pressed="language === option.value"
      :title="titles[option.value]"
      class="min-h-11 cursor-pointer px-3 font-mono text-sm font-semibold leading-none transition-colors duration-[var(--dur-hover)] ease-[var(--ease-comic)]"
      :class="
        language === option.value
          ? 'bg-chip-bg text-chip-fg'
          : 'bg-transparent text-dim hover:text-ink'
      "
      @click="setLanguage(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
