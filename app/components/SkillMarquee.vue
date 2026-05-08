<script setup lang="ts">
const { language } = useLanguage()

const skillsByLanguage: Record<'ru' | 'en', string[]> = {
  ru: [
    'Vue 3',
    'Nuxt',
    'TypeScript',
    'Pinia',
    'Zustand',
    'Inspira UI',
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
    'Zustand',
    'Inspira UI',
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
            class="border border-border bg-muted/45 px-4 py-2 text-base text-muted-foreground shadow-md shadow-foreground/8 backdrop-blur dark:shadow-black/30"
          >
            {{ skill }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>
