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
  <aside class="hero-float glass-card relative w-full max-h-[860px] overflow-x-hidden overflow-y-auto p-4">
    <div class="relative overflow-hidden border border-border bg-card/90 p-5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_34%),radial-gradient(circle_at_85%_20%,color-mix(in_oklch,var(--accent)_12%,transparent),transparent_30%)]" />

      <div class="relative">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-muted-foreground">{{ t.eyebrow }}</p>
            <p class="text-xl font-semibold">{{ t.title }}</p>
          </div>
          <div class="grid size-11 place-items-center border border-border bg-muted/60 text-foreground">
            <Icon name="lucide:sparkles" class="size-5" />
          </div>
        </div>

        <div class="mt-4 grid grid-cols-2 gap-2">
          <div
            v-for="principle in t.principles"
            :key="principle.title"
            class="group border border-border bg-muted/45 p-3 transition duration-500 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-muted/70"
          >
            <div class="flex items-start justify-between gap-3">
              <p class="max-w-36 text-[15px] font-semibold leading-tight">{{ principle.title }}</p>
              <Icon :name="principle.icon" class="size-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
            </div>
            <p class="mt-2 text-xs leading-[1.45] text-muted-foreground">{{ principle.description }}</p>
          </div>
        </div>

        <div class="mt-3 border border-border bg-muted/55 p-3">
          <div class="mb-2 flex items-center justify-between gap-2">
            <p class="text-sm font-semibold">{{ t.rhythm }}</p>
            <span class="border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] text-muted-foreground">
              {{ t.badge }}
            </span>
          </div>

          <div class="grid gap-1.5">
            <div
              v-for="step in t.deliverySteps"
              :key="step.label"
              class="flex items-center gap-2 border border-border/80 bg-muted/35 px-2.5 py-2"
            >
              <span class="grid size-6 shrink-0 place-items-center bg-primary/15 text-[0.62rem] font-semibold text-foreground">
                {{ step.label }}
              </span>
              <span class="text-xs text-muted-foreground">{{ step.value }}</span>
              <div class="ml-auto h-px min-w-6 flex-1 bg-linear-to-r from-primary/50 to-transparent" />
            </div>
          </div>
        </div>

        <div class="mt-3 hidden flex-wrap gap-2 2xl:flex">
          <span class="border border-border bg-muted/45 px-2.5 py-1 text-xs text-muted-foreground">Core Web Vitals</span>
          <span class="border border-border bg-muted/45 px-2.5 py-1 text-xs text-muted-foreground">Cross-domain</span>
          <span class="border border-border bg-muted/45 px-2.5 py-1 text-xs text-muted-foreground">API contracts</span>
        </div>
      </div>
    </div>
  </aside>
</template>
