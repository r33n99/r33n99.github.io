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
  <div class="flex border-2 border-border" role="group" aria-label="Language / Язык">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :aria-pressed="language === option.value"
      :title="titles[option.value]"
      class="min-h-11 cursor-pointer px-3 text-[13px] font-semibold leading-none transition-colors duration-150 ease-out"
      :class="
        language === option.value
          ? 'bg-primary text-primary-foreground'
          : 'bg-transparent text-muted-foreground hover:text-foreground'
      "
      @click="setLanguage(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
