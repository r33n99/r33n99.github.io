<template>
  <main class="min-h-screen overflow-x-clip">
    <AppHeader />

    <div class="relative min-h-svh w-full overflow-hidden">
      <div class="relative flex min-h-svh items-center">
        <section
          class="relative z-10 grid min-h-svh w-full min-w-0 items-center gap-[clamp(1.5rem,4vw,6rem)] px-[clamp(1rem,6vw,10rem)] py-[clamp(4.5rem,6vh,7rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.95fr)]"
        >
          <div class="hero-reveal relative min-w-0 overflow-hidden">
            <div
              class="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/6 px-[clamp(0.75rem,1vw,1.25rem)] py-[clamp(0.45rem,0.65vw,0.75rem)] text-[clamp(0.72rem,0.75vw,1rem)] text-muted-foreground shadow-2xl shadow-black/30 backdrop-blur"
            >
              <span
                class="size-2 shrink-0 rounded-full bg-primary shadow-[0_0_24px_rgba(31,68,127,0.9)]"
              />
              <span class="truncate">{{ t.heroBadge }}</span>
            </div>

            <h1
              class="mt-[clamp(1.1rem,2vh,2.4rem)] max-w-[15ch] text-[clamp(2.8rem,6.2vw,8.6rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
            >
              {{ t.name }}.
            </h1>
            <InspiraFlipWords
              class="text-xl md:text-4xl font-bold mt-5 text-white/80!"
              :words="t.flipWords"
              :duration="4000"
              :animate-on-load="true"
            />
            <p
              class="mt-[clamp(1rem,1.7vh,1.8rem)] max-w-[62ch] text-[clamp(0.95rem,1.05vw,1.35rem)] leading-[1.55] text-muted-foreground"
            >
              {{ t.heroDescription }}
            </p>

            <SkillMarquee class="mt-[clamp(1rem,2vh,2rem)]" />

            <div
              class="mt-[clamp(1.25rem,2.2vh,2.4rem)] flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#work"
                class="group rounded-full bg-primary px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.8rem,0.9vw,1.1rem)] text-center text-[clamp(0.85rem,0.82vw,1.05rem)] font-semibold text-primary-foreground shadow-2xl shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {{ t.heroPrimaryCta }}
                <Icon
                  name="lucide:arrow-down-right"
                  class="ml-2 inline size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                class="rounded-full border border-white/10 bg-white/4 px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.8rem,0.9vw,1.1rem)] text-center text-[clamp(0.85rem,0.82vw,1.05rem)] font-semibold text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/8"
              >
                {{ t.heroSecondaryCta }}
              </a>
            </div>
          </div>

          <div class="hidden md:block relative">
            <div
              class="hero-orbit absolute -right-4 -top-8 hidden rounded-3xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-muted-foreground shadow-2xl shadow-black/30 backdrop-blur-xl sm:block"
            >
              <Icon
                name="lucide:gauge"
                class="mr-2 inline size-4 text-foreground"
              />
              {{ t.coreWebVitals }}
            </div>
            <div
              class="hero-orbit-delayed absolute -bottom-7 left-0 z-10 hidden rounded-3xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-muted-foreground shadow-2xl shadow-black/30 backdrop-blur-xl sm:block"
            >
              <Icon
                name="lucide:route"
                class="mr-2 inline size-4 text-accent"
              />
              {{ t.bookingArchitecture }}
            </div>
            <HeroSignalCard />
          </div>
        </section>
      </div>
    </div>

    <RevealOnScroll>
      <section
        id="work"
        class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]"
      >
        <SectionTitle
          :eyebrow="t.workSection.eyebrow"
          :title="t.workSection.title"
          :description="t.workSection.description"
        />

        <div
          class="grid gap-[clamp(1rem,1.4vw,2rem)] grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))]"
        >
          <ProjectCard
            v-for="project in t.projects"
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
      <section
        id="stack"
        class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]"
      >
        <div
          class="glass-card overflow-hidden rounded-[clamp(1.5rem,2.6vw,3.5rem)] p-[clamp(1.25rem,2.6vw,4rem)]"
        >
          <SectionTitle
            :eyebrow="t.stackSection.eyebrow"
            :title="t.stackSection.title"
            :description="t.stackSection.description"
          />

          <div
            class="grid gap-[clamp(0.9rem,1vw,1.5rem)] grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))]"
          >
            <article
              v-for="item in t.stack"
              :key="item.name"
              class="rounded-3xl border border-white/10 bg-white/4 p-[clamp(1.1rem,1.3vw,2rem)]"
            >
              <Icon
                :name="item.icon"
                class="size-[clamp(1.6rem,1.7vw,2.25rem)] text-foreground"
              />
              <h3
                class="mt-[clamp(1rem,1.2vw,1.6rem)] text-[clamp(1rem,1.05vw,1.35rem)] font-semibold"
              >
                {{ item.name }}
              </h3>
              <p
                class="mt-2 text-[clamp(0.9rem,0.9vw,1.1rem)] leading-[1.65] text-muted-foreground"
              >
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <RevealOnScroll>
      <section
        id="process"
        class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]"
      >
        <SectionTitle
          :eyebrow="t.processSection.eyebrow"
          :title="t.processSection.title"
          :description="t.processSection.description"
        />

        <div
          class="grid gap-[clamp(1rem,1.4vw,2rem)] grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))]"
        >
          <article
            v-for="step in t.process"
            :key="step.title"
            class="glass-card rounded-4xl p-[clamp(1.25rem,1.8vw,2.5rem)]"
          >
            <p
              class="text-[clamp(0.8rem,0.8vw,1rem)] font-semibold text-muted-foreground"
            >
              {{ step.number }}
            </p>
            <h3
              class="mt-[clamp(1rem,1.2vw,1.6rem)] text-[clamp(1.25rem,1.4vw,1.8rem)] font-semibold"
            >
              {{ step.title }}
            </h3>
            <p
              class="mt-3 text-[clamp(0.95rem,0.95vw,1.15rem)] leading-[1.65] text-muted-foreground"
            >
              {{ step.description }}
            </p>
          </article>
        </div>
      </section>
    </RevealOnScroll>
    <RevealOnScroll>
      <section
        id="contact"
        class="w-full px-[clamp(1rem,6vw,10rem)] py-[clamp(5rem,8vw,12rem)]"
      >
        <div
          class="glass-card relative overflow-hidden rounded-[clamp(1.5rem,2.6vw,3.5rem)] p-[clamp(1.5rem,4vw,6rem)] text-center"
        >
          <div
            class="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"
          />
          <p
            class="text-[clamp(0.78rem,0.8vw,1rem)] font-semibold uppercase tracking-[0.28em] text-muted-foreground"
          >
            {{ t.contactSection.eyebrow }}
          </p>
          <h2
            class="mx-auto mt-4 max-w-[18ch] text-[clamp(2.35rem,4.8vw,7.25rem)] font-semibold leading-[0.95] tracking-tight"
          >
            {{ t.contactSection.title }}
          </h2>
          <p
            class="mx-auto mt-5 max-w-[62ch] text-[clamp(1rem,1.18vw,1.45rem)] leading-[1.6] text-muted-foreground"
          >
            {{ t.contactSection.description }}
          </p>
          <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:rinni499@gmail.com"
              class="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground"
            >
              rinni499@gmail.com
            </a>
            <a
              href="https://t.me/r33n_dev"
              target="_blank"
              rel="noreferrer"
              class="rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold transition hover:bg-white/8"
            >
              Telegram
            </a>
            <a
              href="https://github.com/r33n99"
              target="_blank"
              rel="noreferrer"
              class="rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold transition hover:bg-white/8"
            >
              GitHub
            </a>
            <a
              href="https://gitlab.com/r33n99"
              target="_blank"
              rel="noreferrer"
              class="rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold transition hover:bg-white/8"
            >
              GitLab
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  </main>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'nuxt/app'

type Language = 'ru' | 'en'

interface SectionCopy {
  eyebrow: string
  title: string
  description: string
}

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

interface PageText {
  name: string
  seo: {
    title: string
    description: string
  }
  heroBadge: string
  flipWords: string[]
  heroDescription: string
  heroPrimaryCta: string
  heroSecondaryCta: string
  coreWebVitals: string
  bookingArchitecture: string
  workSection: SectionCopy
  stackSection: SectionCopy
  processSection: SectionCopy
  contactSection: SectionCopy
  projects: Project[]
  stack: StackItem[]
  process: ProcessStep[]
}

const { language } = useLanguage()

const pageText: Record<Language, PageText> = {
  ru: {
    seo: {
      title: 'Frontend Developer',
      description:
        'Frontend Developer с 3+ годами опыта: Vue, Nuxt, React, TypeScript, TravelTech, EventTech, Telegram bots, тестирование и Core Web Vitals.',
    },
    heroBadge: 'Frontend Developer · Product Engineering',
    name: 'Ринат Ражапов',
    flipWords: [
      'Frontend без хаоса',
      'Сложное делаю понятным',
      'От интерфейса до релиза',
      'Быстро вникаю в продукт',
      'Люблю сложные сценарии',
    ],
    heroDescription:
      '3+ года коммерческого опыта во frontend. Основной стек - Vue/Nuxt: проектирую интерфейсы со сложной бизнес-логикой, booking flows, динамическим ценообразованием, личными кабинетами, SEO-страницами, картами, checkout и API-интеграциями. На React могу быстро переключиться при необходимости.',
    heroPrimaryCta: 'Смотреть опыт',
    heroSecondaryCta: 'Связаться',
    coreWebVitals: 'Core Web Vitals',
    bookingArchitecture: 'Booking flow architecture',
    workSection: {
      eyebrow: 'Experience',
      title: 'TravelTech, EventTech, логистика и контентные платформы',
      description:
        'Опыт из резюме: запуск проектов с нуля, сложные клиентские сценарии, интеграции с backend-командами и развитие инженерных практик.',
    },
    stackSection: {
      eyebrow: 'Skills',
      title: 'Стек шире, чем UI-библиотека',
      description:
        'Эта секция про реальный рабочий стек: frontend-архитектуру, React/Vue экосистему, тестирование, интеграции, tg bots, CI/CD и продуктовую оптимизацию.',
    },
    processSection: {
      eyebrow: 'Strengths',
      title: 'Что я приношу в команду',
      description:
        'Не только верстка экранов: беру на себя архитектуру, сложную бизнес-логику, качество, продуктовые метрики, стабильность релизов и поддержку junior-разработчиков.',
    },
    contactSection: {
      eyebrow: 'Contact',
      title: 'Нужен frontend-разработчик в команду?',
      description:
        'Готов подключиться к Vue/Nuxt проекту, усилить архитектуру, стабилизировать релизы и довести интерфейс до хороших метрик.',
    },
    projects: [
      {
        index: '01',
        title: 'TrustyOne: TravelTech / EventTech',
        description:
          'DLI, Eventner, Inspiritaly и Travel 2025: booking flows, каталоги, checkout, личные кабинеты, карты, SEO-страницы и мобильные сценарии.',
        tags: ['Nuxt', 'Stripe', 'Zoho CRM', 'SSR/ISR'],
      },
      {
        index: '02',
        title: 'Paleo Studio: веб-платформы',
        description:
          'Логистическая платформа, кабинет Silkway Rally, SEO-портал ночного клуба, журналистская админка, браузерное расширение и Telegram-боты.',
        tags: ['Vue 2', 'Vuetify', 'Charts', 'Telegram Bots'],
      },
      {
        index: '03',
        title: 'Инженерные практики',
        description:
          'Миграция на TypeScript, стратегия Unit/Integration/E2E тестирования, менторство junior-разработчиков, CI/CD и настройка AI-driven workflow через Cursor/MCP.',
        tags: ['TypeScript', 'Mentoring', 'Vitest', 'CI/CD'],
      },
    ],
    stack: [
      {
        name: 'Frontend Core',
        description:
          'Vue 3 Composition API, Nuxt 3/4, Vue 2, React, TypeScript, JavaScript ES6+. Основной опыт во Vue-экосистеме, при необходимости быстро переключаюсь на React.',
        icon: 'simple-icons:nuxtdotjs',
      },
      {
        name: 'State & UI',
        description:
          'Pinia, Vuex, Redux, Tailwind CSS, SCSS, PostCSS, PrimeVue, Vuetify, Quasar.',
        icon: 'lucide:panel-top',
      },
      {
        name: 'Quality',
        description:
          'Playwright, Vitest, Jest, визуальная регрессия, ESLint, Prettier, Husky, Lint-staged.',
        icon: 'lucide:shield-check',
      },
      {
        name: 'Integrations',
        description:
          'REST API, Swagger, Postman, Stripe, Zoho CRM, Telegram bots, Sentry, Docker, Bitbucket Pipelines.',
        icon: 'lucide:workflow',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Архитектура с нуля',
        description:
          'Выбираю стек, структуру проекта, стандарты качества и фундамент, который можно масштабировать.',
      },
      {
        number: '02',
        title: 'Продуктовая логика',
        description:
          'Погружаюсь в бизнес-метрики: конверсия, динамические тарифы, сложные правила расчета, UX мобильных сценариев и производительность.',
      },
      {
        number: '03',
        title: 'Качество и команда',
        description:
          'Закрываю риски через типизацию, тестирование, мониторинг, CI/CD, понятные правила разработки.',
      },
    ],
  },
  en: {
    name: 'Rinat Razhapov',
    seo: {
      title: 'Frontend Developer',
      description:
        'Frontend Developer with 3+ years of experience: Vue, Nuxt, React, TypeScript, TravelTech, EventTech, Telegram bots, testing and Core Web Vitals.',
    },
    heroBadge: 'Frontend Developer · Product Engineering',
    flipWords: [
      'Frontend without chaos',
      'I make complex flows clear',
      'From interface to release',
      'Fast product onboarding',
      'I enjoy complex scenarios',
    ],
    heroDescription:
      'Frontend Developer with 3+ years of commercial experience. My main stack is Vue/Nuxt: I build interfaces with complex business logic, booking flows, dynamic pricing, dashboards, SEO pages, maps, checkout and API integrations. I can switch to React quickly when the project needs it.',
    heroPrimaryCta: 'View experience',
    heroSecondaryCta: 'Contact me',
    coreWebVitals: 'Core Web Vitals',
    bookingArchitecture: 'Booking flow architecture',
    workSection: {
      eyebrow: 'Experience',
      title: 'TravelTech, EventTech, logistics and content platforms',
      description:
        'Experience from real products: projects from scratch, complex user scenarios, backend integrations and engineering practices.',
    },
    stackSection: {
      eyebrow: 'Skills',
      title: 'A stack wider than a UI library',
      description:
        'Frontend architecture, React/Vue ecosystems, testing, integrations, Telegram bots, CI/CD and product optimization.',
    },
    processSection: {
      eyebrow: 'Strengths',
      title: 'What I bring to a team',
      description:
        'More than screen implementation: architecture, complex business logic, quality, product metrics, stable releases and junior developer support.',
    },
    contactSection: {
      eyebrow: 'Contact',
      title: 'Need a frontend developer on your team?',
      description:
        'I can join a Vue/Nuxt project, strengthen architecture, stabilize releases and bring the interface to solid product metrics.',
    },
    projects: [
      {
        index: '01',
        title: 'TrustyOne: TravelTech / EventTech',
        description:
          'DLI, Eventner, Inspiritaly and Travel 2025: booking flows, catalogs, checkout, user accounts, maps, SEO pages and mobile scenarios.',
        tags: ['Nuxt', 'Stripe', 'Zoho CRM', 'SSR/ISR'],
      },
      {
        index: '02',
        title: 'Paleo Studio: web platforms',
        description:
          'A logistics platform, Silkway Rally account area, SEO portal for a nightclub, editorial admin panel, browser extension and Telegram bots.',
        tags: ['Vue 2', 'Vuetify', 'Charts', 'Telegram Bots'],
      },
      {
        index: '03',
        title: 'Engineering practices',
        description:
          'TypeScript migration, Unit/Integration/E2E testing strategy, junior mentoring, CI/CD and AI-driven workflow setup with Cursor/MCP.',
        tags: ['TypeScript', 'Mentoring', 'Vitest', 'CI/CD'],
      },
    ],
    stack: [
      {
        name: 'Frontend Core',
        description:
          'Vue 3 Composition API, Nuxt 3/4, Vue 2, React, TypeScript, JavaScript ES6+. My main experience is in the Vue ecosystem, with the ability to switch to React when needed.',
        icon: 'simple-icons:nuxtdotjs',
      },
      {
        name: 'State & UI',
        description:
          'Pinia, Vuex, Redux, Tailwind CSS, SCSS, PostCSS, PrimeVue, Vuetify and Quasar.',
        icon: 'lucide:panel-top',
      },
      {
        name: 'Quality',
        description:
          'Playwright, Vitest, Jest, visual regression, ESLint, Prettier, Husky and lint-staged.',
        icon: 'lucide:shield-check',
      },
      {
        name: 'Integrations',
        description:
          'REST API, Swagger, Postman, Stripe, Zoho CRM, Telegram bots, Sentry, Docker and Bitbucket Pipelines.',
        icon: 'lucide:workflow',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Architecture from scratch',
        description:
          'I choose the stack, project structure, quality standards and a foundation that can scale.',
      },
      {
        number: '02',
        title: 'Product logic',
        description:
          'I dive into conversion, dynamic pricing, complex calculation rules, mobile UX scenarios and performance.',
      },
      {
        number: '03',
        title: 'Quality and team',
        description:
          'I reduce risk with typing, testing, monitoring, CI/CD and clear development rules.',
      },
    ],
  },
}

const t = computed(() => pageText[language.value])

useHead(() => ({
  htmlAttrs: {
    lang: language.value,
  },
}))

useSeoMeta({
  title: computed(() => t.value.seo.title),
  description: computed(() => t.value.seo.description),
})
</script>
