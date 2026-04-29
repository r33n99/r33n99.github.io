<script setup lang="ts">
const { language } = useLanguage()

const skillsByLanguage: Record<'ru' | 'en', string[]> = {
  ru: [
    'Vue 3',
    'Nuxt',
    'TypeScript',
    'Pinia',
    'Playwright',
    'Vitest',
    'Stripe',
    'Zoho CRM',
    'Mapbox',
    'Core Web Vitals',
    'React',
    'Telegram Bots',
    'Mentoring',
    'Business Logic',
    'Docker',
    'CI/CD',
  ],
  en: [
    'Vue 3',
    'Nuxt',
    'TypeScript',
    'Pinia',
    'Playwright',
    'Vitest',
    'Stripe',
    'Zoho CRM',
    'Mapbox',
    'Core Web Vitals',
    'React',
    'Telegram Bots',
    'Mentoring',
    'Business Logic',
    'Docker',
    'CI/CD',
  ],
}

const marqueeSkills = computed(() => {
  const skills = skillsByLanguage[language.value]

  return [...skills, ...skills]
})
</script>

<template>
  <div class="marquee-mask relative w-full max-w-full overflow-hidden py-3">
    <div class="animate-marquee flex w-max">
      <template v-for="loopIndex in 2" :key="loopIndex">
        <div class="flex shrink-0 gap-3 pr-3">
          <span
            v-for="skill in marqueeSkills"
            :key="`${loopIndex}-${skill}`"
            class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[clamp(0.72rem,0.75vw,1rem)] text-muted-foreground shadow-lg shadow-black/20 backdrop-blur"
          >
            {{ skill }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>
