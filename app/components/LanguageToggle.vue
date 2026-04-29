<script setup lang="ts">
const { language, setLanguage } = useLanguage()
</script>

<template>
  <div
    class="relative grid grid-cols-2 rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold text-muted-foreground shadow-inner shadow-black/20"
    role="group"
    aria-label="Language switcher"
  >
    <span
      class="absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-foreground shadow-lg shadow-black/20 transition-transform duration-300 ease-out"
      :class="language === 'en' ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-0'"
    />
    <button
      type="button"
      class="relative z-10 rounded-full px-3 py-1.5 transition-colors duration-300"
      :class="language === 'ru' ? 'text-background' : 'text-muted-foreground hover:text-foreground'"
      aria-label="Переключить язык на русский"
      @click="setLanguage('ru')"
    >
      RU
    </button>
    <button
      type="button"
      class="relative z-10 rounded-full px-3 py-1.5 transition-colors duration-300"
      :class="language === 'en' ? 'text-background' : 'text-muted-foreground hover:text-foreground'"
      aria-label="Switch language to English"
      @click="setLanguage('en')"
    >
      EN
    </button>
  </div>
</template>
