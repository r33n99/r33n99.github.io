<template>
  <main class="min-h-screen overflow-x-hidden">
    <AppHeader class="hidden md:flex" />

    <div class="relative min-h-svh w-full overflow-hidden">
  <div class="relative flex min-h-svh items-center">
    <section class="relative z-10 grid min-h-svh w-full min-w-0 items-center gap-[clamp(1.5rem,4vw,6rem)] px-[clamp(1rem,6vw,10rem)] py-[clamp(4.5rem,6vh,7rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.95fr)]">
      <div class="hero-reveal relative min-w-0 overflow-hidden">

        <div class="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/6 px-[clamp(0.75rem,1vw,1.25rem)] py-[clamp(0.45rem,0.65vw,0.75rem)] text-[clamp(0.72rem,0.75vw,1rem)] text-muted-foreground shadow-2xl shadow-black/30 backdrop-blur">
          <span class="size-2 shrink-0 rounded-full bg-primary shadow-[0_0_24px_rgba(31,68,127,0.9)]" />
          <span class="truncate">Frontend Developer · Product Engineering</span>
        </div>

        <h1 class="mt-[clamp(1.1rem,2vh,2.4rem)] max-w-[15ch] text-[clamp(2.8rem,6.2vw,8.6rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
          Ринат Ражапов.
          <span class="block bg-linear-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Frontend для сложных продуктов.
          </span>
        </h1>

        <p class="mt-[clamp(1rem,1.7vh,1.8rem)] max-w-[62ch] text-[clamp(0.95rem,1.05vw,1.35rem)] leading-[1.55] text-muted-foreground">
          3+ года коммерческого опыта во frontend. Основной стек - Vue/Nuxt: проектирую
          интерфейсы со сложной бизнес-логикой, booking flows, динамическим ценообразованием,
          личными кабинетами, SEO-страницами, картами, checkout и API-интеграциями.
          На React могу быстро переключиться при необходимости.
        </p>

      <SkillMarquee class="mt-[clamp(1rem,2vh,2rem)]" />
      
        <div class="mt-[clamp(1.25rem,2.2vh,2.4rem)] flex flex-col gap-3 sm:flex-row">
          <a href="#work" class="group rounded-full bg-primary px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.8rem,0.9vw,1.1rem)] text-center text-[clamp(0.85rem,0.82vw,1.05rem)] font-semibold text-primary-foreground shadow-2xl shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90">
            Смотреть опыт
            <Icon name="lucide:arrow-down-right" class="ml-2 inline size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a href="#contact" class="rounded-full border border-white/10 bg-white/4 px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.8rem,0.9vw,1.1rem)] text-center text-[clamp(0.85rem,0.82vw,1.05rem)] font-semibold text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/8">
            Связаться
          </a>
        </div>
      </div>

      <div class="hidden md:block relative">
        <div class="hero-orbit absolute -right-4 -top-8 hidden rounded-3xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-muted-foreground shadow-2xl shadow-black/30 backdrop-blur-xl sm:block">
          <Icon name="lucide:gauge" class="mr-2 inline size-4 text-foreground" />
          Core Web Vitals
        </div>
        <div class="hero-orbit-delayed absolute -bottom-7 left-0 z-10 hidden rounded-3xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-muted-foreground shadow-2xl shadow-black/30 backdrop-blur-xl sm:block">
          <Icon name="lucide:route" class="mr-2 inline size-4 text-accent" />
          Booking flow architecture
        </div>
        <HeroSignalCard />
      </div>
    </section>
  </div>
  </div>


 
  <RevealOnScroll>
    <section id="work" class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]">
      <SectionTitle
        eyebrow="Experience"
        title="TravelTech, EventTech, логистика и контентные платформы"
        description="Опыт из резюме: запуск проектов с нуля, сложные клиентские сценарии, интеграции с backend-командами и развитие инженерных практик."
      />

      <div class="grid gap-[clamp(1rem,1.4vw,2rem)] grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :index="project.index"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
        />
      </div>
    </section>
  </RevealOnScroll>
   

  <RevealOnScroll>
    <section id="stack" class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]">
      <div class="glass-card overflow-hidden rounded-[clamp(1.5rem,2.6vw,3.5rem)] p-[clamp(1.25rem,2.6vw,4rem)]">
        <SectionTitle
          eyebrow="Skills"
          title="Стек шире, чем UI-библиотека"
          description="Эта секция про реальный рабочий стек: frontend-архитектуру, React/Vue экосистему, тестирование, интеграции, tg bots, CI/CD и продуктовую оптимизацию."
        />

        <div class="grid gap-[clamp(0.9rem,1vw,1.5rem)] grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))]">
          <article
            v-for="item in stack"
            :key="item.name"
            class="rounded-3xl border border-white/10 bg-white/4 p-[clamp(1.1rem,1.3vw,2rem)]"
          >
            <Icon :name="item.icon" class="size-[clamp(1.6rem,1.7vw,2.25rem)] text-foreground" />
            <h3 class="mt-[clamp(1rem,1.2vw,1.6rem)] text-[clamp(1rem,1.05vw,1.35rem)] font-semibold">{{ item.name }}</h3>
            <p class="mt-2 text-[clamp(0.9rem,0.9vw,1.1rem)] leading-[1.65] text-muted-foreground">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </RevealOnScroll>

  <RevealOnScroll>
    <section id="process" class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]">
      <SectionTitle
        eyebrow="Strengths"
        title="Что я приношу в команду"
          description="Не только верстка экранов: беру на себя архитектуру, сложную бизнес-логику, качество, продуктовые метрики, стабильность релизов и поддержку junior-разработчиков."
      />

      <div class="grid gap-[clamp(1rem,1.4vw,2rem)] grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
        <article
          v-for="step in process"
          :key="step.title"
          class="glass-card rounded-4xl p-[clamp(1.25rem,1.8vw,2.5rem)]"
        >
          <p class="text-[clamp(0.8rem,0.8vw,1rem)] font-semibold text-muted-foreground">{{ step.number }}</p>
          <h3 class="mt-[clamp(1rem,1.2vw,1.6rem)] text-[clamp(1.25rem,1.4vw,1.8rem)] font-semibold">{{ step.title }}</h3>
          <p class="mt-3 text-[clamp(0.95rem,0.95vw,1.15rem)] leading-[1.65] text-muted-foreground">{{ step.description }}</p>
        </article>
      </div>
    </section>
  </RevealOnScroll>
  <RevealOnScroll>
    <section id="contact" class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]">
      <div class="glass-card relative overflow-hidden rounded-[clamp(1.5rem,2.6vw,3.5rem)] p-[clamp(1.5rem,4vw,6rem)] text-center">
        <div class="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
        <p class="text-[clamp(0.78rem,0.8vw,1rem)] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Contact</p>
        <h2 class="mx-auto mt-4 max-w-[18ch] text-[clamp(2.35rem,4.8vw,7.25rem)] font-semibold leading-[0.95] tracking-tight">
          Нужен frontend-разработчик в команду?
        </h2>
        <p class="mx-auto mt-5 max-w-[62ch] text-[clamp(1rem,1.18vw,1.45rem)] leading-[1.6] text-muted-foreground">
          Готов подключиться к Vue/Nuxt проекту, усилить архитектуру, стабилизировать релизы
          и довести интерфейс до хороших метрик.
        </p>
        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:rinni499@gmail.com" class="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground">
            rinni499@gmail.com
          </a>
          <a href="https://t.me/r33n_dev" target="_blank" rel="noreferrer" class="rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold transition hover:bg-white/8">
            Telegram
          </a>
          <a href="https://github.com/r33n99" target="_blank" rel="noreferrer" class="rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold transition hover:bg-white/8">
            GitHub
          </a>
          <a href="https://gitlab.com/r33n99" target="_blank" rel="noreferrer" class="rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold transition hover:bg-white/8">
            GitLab
          </a>
        </div>
      </div>
    </section>
  </RevealOnScroll>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

interface Project {
  index: string
  title: string
  description: string
  tags: string[]
}

interface StackItem {
  name: string
  description: string
  icon: string
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

useSeoMeta({
  title: 'Frontend Developer',
  description: 'Frontend Developer с 3+ годами опыта: Vue, Nuxt, React, TypeScript, TravelTech, EventTech, Telegram bots, тестирование и Core Web Vitals.',
})

const projects: Project[] = [
  {
    index: '01',
    title: 'TrustyOne: TravelTech / EventTech',
    description: 'DLI, Eventner, Inspiritaly и Travel 2025: booking flows, каталоги, checkout, личные кабинеты, карты, SEO-страницы и мобильные сценарии.',
    tags: ['Nuxt', 'Stripe', 'Zoho CRM', 'SSR/ISR'],
  },
  {
    index: '02',
    title: 'Paleo Studio: веб-платформы',
    description: 'Логистическая платформа, кабинет Silkway Rally, SEO-портал ночного клуба, журналистская админка, браузерное расширение и Telegram-боты.',
    tags: ['Vue 2', 'Vuetify', 'Charts', 'Telegram Bots'],
  },
  {
    index: '03',
    title: 'Инженерные практики',
    description: 'Миграция на TypeScript, стратегия Unit/Integration/E2E тестирования, менторство junior-разработчиков, CI/CD и настройка AI-driven workflow через Cursor/MCP.',
    tags: ['TypeScript', 'Mentoring', 'Vitest', 'CI/CD'],
  },
]

const stack: StackItem[] = [
  {
    name: 'Frontend Core',
    description: 'Vue 3 Composition API, Nuxt 3/4, Vue 2, React, TypeScript, JavaScript ES6+. Основной опыт во Vue-экосистеме, при необходимости быстро переключаюсь на React.',
    icon: 'simple-icons:nuxtdotjs',
  },
  {
    name: 'State & UI',
    description: 'Pinia, Vuex, Redux, Tailwind CSS, SCSS, PostCSS, PrimeVue, Vuetify, Quasar.',
    icon: 'lucide:panel-top',
  },
  {
    name: 'Quality',
    description: 'Playwright, Vitest, Jest, визуальная регрессия, ESLint, Prettier, Husky, Lint-staged.',
    icon: 'lucide:shield-check',
  },
  {
    name: 'Integrations',
    description: 'REST API, Swagger, Postman, Stripe, Zoho CRM, Telegram bots, Sentry, Docker, Bitbucket Pipelines.',
    icon: 'lucide:workflow',
  },
]

const process: ProcessStep[] = [
  {
    number: '01',
    title: 'Архитектура с нуля',
    description: 'Выбираю стек, структуру проекта, стандарты качества и фундамент, который можно масштабировать.',
  },
  {
    number: '02',
    title: 'Продуктовая логика',
    description: 'Погружаюсь в бизнес-метрики: конверсия, динамические тарифы, сложные правила расчета, UX мобильных сценариев и производительность.',
  },
  {
    number: '03',
    title: 'Качество и команда',
    description: 'Закрываю риски через типизацию, тестирование, мониторинг, CI/CD, понятные правила разработки.',
  },
]
</script>
