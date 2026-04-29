<script setup lang="ts">
interface Principle {
  title: string
  description: string
  icon: string
}

interface DeliveryStep {
  label: string
  value: string
}

interface HeroCardText {
  eyebrow: string
  title: string
  rhythm: string
  badge: string
  principles: Principle[]
  deliverySteps: DeliveryStep[]
}

const { language } = useLanguage()

const texts: Record<'ru' | 'en', HeroCardText> = {
  ru: {
    eyebrow: 'Engineering principles',
    title: 'Как я собираю frontend',
    rhythm: 'Delivery rhythm',
    badge: 'product-minded',
    principles: [
      {
        title: 'Понятная архитектура',
        description: 'структура, модули и правила, которые не мешают продукту расти',
        icon: 'lucide:layers-3',
      },
      {
        title: 'Контракты с backend',
        description: 'типизированные данные, явные состояния загрузки и ошибок',
        icon: 'lucide:workflow',
      },
      {
        title: 'UX сложных сценариев',
        description: 'формы, кабинеты, checkout, карты и длинные пользовательские flows',
        icon: 'lucide:route',
      },
      {
        title: 'Качество до релиза',
        description: 'тесты, edge cases, Core Web Vitals и стабильная поставка',
        icon: 'lucide:shield-check',
      },
    ],
    deliverySteps: [
      { label: '01', value: 'Разобрать бизнес-сценарий' },
      { label: '02', value: 'Собрать интерфейс и состояния' },
      { label: '03', value: 'Проверить critical path' },
      { label: '04', value: 'Довести до релиза' },
    ],
  },
  en: {
    eyebrow: 'Engineering principles',
    title: 'How I build frontend',
    rhythm: 'Delivery rhythm',
    badge: 'product-minded',
    principles: [
      {
        title: 'Clear architecture',
        description: 'structure, modules and rules that help the product grow',
        icon: 'lucide:layers-3',
      },
      {
        title: 'Backend contracts',
        description: 'typed data, explicit loading states and predictable errors',
        icon: 'lucide:workflow',
      },
      {
        title: 'Complex flow UX',
        description: 'forms, accounts, checkout, maps and long user journeys',
        icon: 'lucide:route',
      },
      {
        title: 'Quality before release',
        description: 'tests, edge cases, Core Web Vitals and stable delivery',
        icon: 'lucide:shield-check',
      },
    ],
    deliverySteps: [
      { label: '01', value: 'Understand the business scenario' },
      { label: '02', value: 'Build interface states' },
      { label: '03', value: 'Check the critical path' },
      { label: '04', value: 'Ship a stable release' },
    ],
  },
}

const t = computed(() => texts[language.value])
</script>

<template>
  <aside class="hero-float glass-card relative w-full overflow-hidden rounded-[clamp(1.75rem,2.5vw,3.5rem)] p-[clamp(0.9rem,1vw,1.4rem)]">
    <InspiraBorderBeam :duration="9" :border-width="1.2" />

    <div class="relative overflow-hidden rounded-4xl border border-white/10 bg-[#070a12]/85 p-[clamp(1.25rem,1.6vw,2.4rem)]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(31,68,127,0.24),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(31,68,127,0.18),transparent_30%)]" />

      <div class="relative">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-[clamp(0.8rem,0.8vw,1rem)] text-muted-foreground">{{ t.eyebrow }}</p>
            <p class="text-[clamp(1.05rem,1.15vw,1.55rem)] font-semibold">{{ t.title }}</p>
          </div>
          <div class="grid size-[clamp(3rem,3vw,4rem)] place-items-center rounded-2xl border border-white/10 bg-white/5 text-foreground">
            <Icon name="lucide:sparkles" class="size-[clamp(1.5rem,1.6vw,2rem)]" />
          </div>
        </div>

        <div class="mt-[clamp(1.25rem,1.6vw,2.2rem)] grid grid-cols-2 gap-3">
          <div
            v-for="principle in t.principles"
            :key="principle.title"
            class="group rounded-3xl border border-white/10 bg-white/5 p-[clamp(0.9rem,1.05vw,1.45rem)] transition duration-500 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/8"
          >
            <div class="flex items-start justify-between gap-3">
              <p class="max-w-40 text-[clamp(0.95rem,1vw,1.25rem)] font-semibold leading-tight">{{ principle.title }}</p>
              <Icon :name="principle.icon" class="size-[clamp(1rem,1vw,1.35rem)] shrink-0 text-muted-foreground transition group-hover:text-foreground" />
            </div>
            <p class="mt-3 text-[clamp(0.72rem,0.72vw,0.92rem)] leading-[1.55] text-muted-foreground">{{ principle.description }}</p>
          </div>
        </div>

        <div class="mt-4 rounded-3xl border border-white/10 bg-black/25 p-[clamp(1rem,1.2vw,1.7rem)]">
          <div class="mb-4 flex items-center justify-between gap-3">
            <p class="text-[clamp(0.82rem,0.82vw,1rem)] font-semibold">{{ t.rhythm }}</p>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[clamp(0.68rem,0.68vw,0.85rem)] text-muted-foreground">
              {{ t.badge }}
            </span>
          </div>

          <div class="grid gap-2">
            <div
              v-for="step in t.deliverySteps"
              :key="step.label"
              class="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-3 py-2.5"
            >
              <span class="grid size-8 shrink-0 place-items-center rounded-full bg-primary/15 text-[0.72rem] font-semibold text-foreground">
                {{ step.label }}
              </span>
              <span class="text-[clamp(0.78rem,0.8vw,1rem)] text-muted-foreground">{{ step.value }}</span>
              <div class="ml-auto h-px min-w-8 flex-1 bg-linear-to-r from-primary/50 to-transparent" />
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[clamp(0.74rem,0.76vw,0.95rem)] text-muted-foreground">Core Web Vitals</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[clamp(0.74rem,0.76vw,0.95rem)] text-muted-foreground">Cross-domain</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[clamp(0.74rem,0.76vw,0.95rem)] text-muted-foreground">API contracts</span>
        </div>
      </div>
    </div>
  </aside>
</template>
