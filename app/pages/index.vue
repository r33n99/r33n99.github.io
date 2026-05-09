<template>
  <main class="min-h-screen overflow-x-clip">
    <AppHeader />

    <section class="section-shell section-shell-hero">
      <div class="section-container relative px-0">
        <div class="relative min-h-[640px] md:min-h-[760px] xl:min-h-[860px]">
          <ClientOnly>
            <div class="absolute inset-0 w-full">
              <InspiraFallingStarsBg :color="isDark ? '#FFF' : '#000'" />
            </div>
          </ClientOnly>
          <section
            class="relative z-10 mx-auto grid h-full w-full max-w-7xl min-w-0 items-center justify-items-center gap-8 px-4 py-16 text-center sm:px-8 md:gap-10 md:px-12 md:py-20 xl:px-16 xl:py-24"
          >
            <div
              class="hero-reveal relative min-w-0 max-w-296"
            >
              <div class="px-5">
                <p class="text-2xl text-muted-foreground">
                  {{ language === "ru" ? "Привет!" : "Hi!" }}
                  <span class="text-red-500">{{ t.name }}</span>
                </p>
                <h1
                  class="mx-auto mt-6 max-w-[16ch] text-3xl font-semibold leading-[0.9] tracking-tighter sm:text-6xl md:mt-8 md:text-5xl lg:text-7xl xl:tracking-[-0.075em]"
                >
                  {{ t.heroBadge }}
                </h1>
              </div>
              <p class="mt-5 px-5 text-sm text-muted-foreground">
                #Vue #Nuxt #TypeScript
              </p>
              <div
                class="mt-6 flex flex-col items-center justify-center gap-1 px-5 text-center"
              >
                <InspiraFlipWords
                  class="mx-auto max-w-[46ch] text-center text-base font-medium leading-snug text-foreground md:text-lg"
                  :words="t.flipWords"
                  :duration="5000"
                  :animate-on-load="true"
                />
              </div>
              <div
                class="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row"
              >
                <a
                  href="#experience"
                  class="group border border-primary bg-primary px-7 py-3 text-center text-sm font-semibold text-primary-foreground shadow-2xl shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 hover:text-foreground md:px-8 md:py-3.5 md:text-base xl:px-9 xl:py-4 xl:text-[17px]"
                >
                  {{ t.heroPrimaryCta }}
                  <Icon
                    name="lucide:arrow-down-right"
                    class="ml-2 inline size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  class="border border-border bg-background px-7 py-3 text-center text-sm font-semibold text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:bg-muted/65 md:px-8 md:py-3.5 md:text-base xl:px-9 xl:py-4 xl:text-[17px]"
                >
                  {{ t.heroSecondaryCta }}
                </a>
                <a
                  :href="t.resumeHref"
                  download
                  class="border border-border bg-background px-7 py-3 text-center text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-muted/65 md:px-8 md:py-3.5 md:text-base xl:px-9 xl:py-4 xl:text-[17px]"
                >
                  {{ t.resumeButton }}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <article
            v-for="item in heroStats"
            :key="item.label"
            class="border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r md:p-6 md:last:border-r-0"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              {{ item.label }}
            </p>
            <p class="mt-3 text-4xl font-semibold leading-none text-primary">
              {{ item.value }}
            </p>
            <p class="mt-2 text-base text-muted-foreground">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <RevealOnScroll>
      <section id="about" class="section-shell">
        <div class="section-container">
          <div class="bg-background">
            <div
              class="flex items-center justify-between px-6 py-6 md:px-8 md:py-7"
            >
              <h2
                class="text-3xl font-semibold leading-none tracking-tight md:text-4xl xl:text-[52px]"
              >
                {{ t.aboutSection.eyebrow }}
              </h2>
            </div>

            <div
              class="grid gap-6 p-6 md:gap-8 md:p-8 lg:grid-cols-[420px_1fr] xl:grid-cols-[560px_1fr] lg:p-10"
            >
              <div
                class="h-[320px] border border-border bg-muted/25 md:h-[420px] xl:h-[500px]"
              >
                <NuxtImg
                  src="/images/avatar.png"
                  alt="About"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="max-w-[760px]">
                <p
                  class="text-2xl font-semibold leading-tight text-primary md:text-3xl xl:text-[36px]"
                >
                  {{ aboutIntro }}
                </p>
                <p
                  class="mt-5 text-base leading-[1.65] text-muted-foreground md:mt-6 md:text-lg xl:text-[23px]"
                >
                  {{ aboutParagraph1 }}
                </p>
                <p
                  class="mt-5 text-base leading-[1.65] text-muted-foreground md:mt-6 md:text-lg xl:text-[23px]"
                >
                  {{ aboutParagraph2 }}
                </p>

                <div class="mt-10 flex flex-wrap gap-3">
                  <a
                    :href="t.resumeHref"
                    download
                    class="w-full md:w-auto inline-flex items-center justify-center md:justify-start gap-2 border border-primary bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90 hover:text-foreground"
                  >
                    <Icon name="lucide:download" class="size-4" />
                    {{ language === "ru" ? "Скачать резюме" : "Download CV" }}
                  </a>
                  <a
                    href="#contact"
                    class="w-full md:w-auto inline-flex items-center justify-center md:justify-start gap-2 border border-border bg-background px-6 py-3 text-base font-semibold transition hover:bg-muted/50"
                  >
                    <Icon name="lucide:mail" class="size-4" />
                    {{ language === "ru" ? "Связаться" : "Email Me" }}
                  </a>
                  <a
                    href="https://t.me/r33n_dev"
                    target="_blank"
                    rel="noreferrer"
                    class="w-full md:w-auto inline-flex items-center justify-center md:justify-start gap-2 border border-border bg-background px-6 py-3 text-base font-semibold transition hover:bg-muted/50"
                  >
                    <Icon name="lucide:send" class="size-4" />
                    {{ language === "ru" ? "Написать в telegram" : "Message in telegram" }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <RevealOnScroll>
      <section id="experience" class="section-shell">
        <div class="section-container py-10">
          <SectionTitle
            :eyebrow="t.workSection.eyebrow"
            :title="t.workSection.title"
            :description="t.workSection.description"
          />

          <div
            class="divide-y divide-border border-t border-border bg-background"
          >
            <div
              v-for="(row, i) in t.workHistory"
              :key="i"
              class="grid grid-cols-1 gap-3 px-5 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:px-10 md:py-7"
            >
              <div class="min-w-0">
                <p class="text-sm font-semibold text-foreground md:text-base">
                  {{ row.role }}
                </p>
                <p class="mt-1 text-sm text-muted-foreground md:text-base">
                  {{ row.company }}
                </p>
              </div>
              <p
                class="text-sm text-muted-foreground md:text-right md:text-base"
              >
                {{ row.period }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <RevealOnScroll>
      <section id="projects" class="section-shell">
        <div class="section-container py-10">
          <SectionTitle
            :eyebrow="t.projectsSection.eyebrow"
            :title="t.projectsSection.title"
            :description="t.projectsSection.description"
          />

          <div
            class="divide-y divide-border border-t border-border bg-background"
          >
            <NuxtLink
              v-for="card in projectRows"
              :key="card.slug"
              :to="`/projects/${card.slug}`"
              class="group grid grid-cols-1 gap-3 px-5 py-6 transition hover:bg-muted/20 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:px-10 md:py-7"
            >
              <div class="min-w-0">
                <p
                  class="text-xs font-semibold tracking-[0.18em] text-muted-foreground"
                >
                  {{ card.index }}
                </p>
                <p
                  class="mt-1 text-sm font-semibold text-foreground md:text-base"
                >
                  {{ card.title }}
                </p>
                <p class="mt-1 text-sm text-muted-foreground md:text-base">
                  {{ card.intro }}
                </p>
              </div>
              <div class="text-left md:text-right">
                <p class="text-sm text-muted-foreground md:text-base">
                  {{ card.period }}
                </p>
                <p class="mt-1 text-sm font-semibold text-primary">
                  {{ t.projectsReadMore }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <RevealOnScroll>
      <section id="stack" class="section-shell">
        <div class="section-container p-10">
          <div class="bg-background">
            <SectionTitle
              :eyebrow="t.stackSection.eyebrow"
              :title="t.stackSection.title"
              :description="t.stackSection.description"
            />

            <div
              class="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))]"
            >
              <article
                v-for="item in t.stack"
                :key="item.name"
                class="border border-border bg-muted/35 p-5 md:p-6 xl:p-8"
              >
                <Icon :name="item.icon" class="size-9 text-foreground" />
                <h3 class="mt-4 text-xl font-semibold md:mt-5 md:text-[22px]">
                  {{ item.name }}
                </h3>
                <p
                  class="mt-2 text-base leading-[1.65] text-muted-foreground md:text-lg xl:text-[18px]"
                >
                  {{ item.description }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <RevealOnScroll>
      <section id="contact" class="section-shell section-shell-last mb-10">
        <div class="section-container p-10">
          <div class="relative bg-background text-center">
            <SectionTitle
              :eyebrow="t.contactSection.eyebrow"
              :title="t.contactSection.title"
              :description="t.contactSection.description"
            />
            <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:rinni499@gmail.com"
                class="border border-foreground bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground"
              >
                rinni499@gmail.com
              </a>
              <a
                href="https://t.me/r33n_dev"
                target="_blank"
                rel="noreferrer"
                class="border border-border bg-muted/40 px-6 py-3 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground"
              >
                Telegram
              </a>
              <a
                href="https://github.com/r33n99"
                target="_blank"
                rel="noreferrer"
                class="border border-border bg-muted/40 px-6 py-3 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground"
              >
                GitHub
              </a>
              <a
                href="https://gitlab.com/r33n99"
                target="_blank"
                rel="noreferrer"
                class="border border-border bg-muted/40 px-6 py-3 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground"
              >
                GitLab
              </a>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  </main>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from "nuxt/app";

type Language = "ru" | "en";

interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

interface WorkHistoryRow {
  role: string;
  company: string;
  period: string;
}

interface StackItem {
  name: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface PageText {
  name: string;
  seo: {
    title: string;
    description: string;
  };
  heroBadge: string;
  flipWords: string[];
  heroDescription: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  resumeButton: string;
  resumeHref: string;
  coreWebVitals: string;
  bookingArchitecture: string;
  aboutSection: SectionCopy;
  aboutHighlights: string[];
  workSection: SectionCopy;
  stackSection: SectionCopy;
  processSection: SectionCopy;
  contactSection: SectionCopy;
  projectsSection: SectionCopy;
  projectsReadMore: string;
  workHistory: WorkHistoryRow[];
  stack: StackItem[];
  process: ProcessStep[];
}

const { language } = useLanguage();

const pageText: Record<Language, PageText> = {
  ru: {
    seo: {
      title: "Frontend Developer",
      description:
        "Frontend (Vue/Nuxt/TypeScript): сложные продуктовые сценарии, white label, карты и производительность. Удалённо, full-time.",
    },
    heroBadge: "Frontend Developer",
    name: "Я Ринат",
    flipWords: [
      "Сложные сценарии довожу до стабильных релизов, а не до «потом поправим»",
      "Карты, каталоги, кабинеты — где много состояний и мало права на ошибку",
      "Скорость и метрики так, чтобы это заметил пользователь, а не только Lighthouse",
      "Код и архитектура так, чтобы через полгода в проект не страшно заходить",
    ],
    heroDescription:
      "Работаю как инженер «сквозь продукт»: уточняю требования, держу UX и техдолг в балансе, синхронизируюсь с backend до стабильного релиза. Ниже — конкретные проекты и стек; резюме можно скачать одной кнопкой.",
    heroPrimaryCta: "Смотреть опыт",
    heroSecondaryCta: "Связаться",
    resumeButton: "Скачать резюме",
    resumeHref: "/resume-rinat-razhapov-ru.pdf",
    coreWebVitals: "Core Web Vitals",
    bookingArchitecture: "Booking flow architecture",
    aboutSection: {
      eyebrow: "Обо мне",
      title: "Обо мне",
      description:
        "Ценю ясные договорённости с продуктом и backend: фиксирую сценарии, краевые случаи и контракты до того, как они превращаются в переделки. Люблю системный подход — от структуры фронта до наблюдаемости и регрессий — и спокойное ведение задачи до релиза без «пожаров» к дедлайну.",
    },
    aboutHighlights: [
      "Формат: удалённо, full-time; комфортно в международных командах и англоязычной переписке",
      "White Label: несколько брендов из одной кодовой базы с общей логикой и разными визуальными настройками",
      "Карты и плотный UI: Mapbox, Google/Yandex Maps — маршруты, большие наборы точек, отзывчивость интерфейса",
      "SEO и разметка: SSR/ISR, динамические meta и JSON-LD для органического трафика на больших каталогах",
      "Сейчас усиливаю: AI-функции в продуктах, Telegram-боты, SaaS для малого бизнеса, Node.js API, Three.js/Pixi",
      "Инструменты ускорения: Cursor, MCP, Codex — тесты, рефакторинг и разбор legacy осознанно, а не «вслепую»",
    ],
    workSection: {
      eyebrow: "Опыт",
      title: "Опыт работы",
      description:
        "Ключевые позиции и компании. Подробные продуктовые кейсы — в разделе «Проекты».",
    },
    projectsSection: {
      eyebrow: "Опыт",
      title: "Проекты",
      description:
        "Краткий обзор продуктов, в которых я вёл frontend: от booking flow и маркетплейсов до карт и операторских панелей.",
    },
    projectsReadMore: "Подробнее",
    workHistory: [
      {
        role: "Frontend Developer",
        company: "TrustyOne",
        period: "2024 — 2026",
      },
      {
        role: "Frontend Developer",
        company: "Paleo Studio",
        period: "2022 — 2024",
      },
    ],
    stackSection: {
      eyebrow: "Навыки",
      title: "Стек шире, чем UI-библиотека",
      description:
        "Эта секция про реальный рабочий стек: frontend-архитектуру, React/Vue экосистему, тестирование, интеграции, tg bots, CI/CD и продуктовую оптимизацию.",
    },
    processSection: {
      eyebrow: "Сильные стороны",
      title: "Что я приношу в команду",
      description:
        "Три опоры: продуманная архитектура старта, внимание к конверсии и правилам расчёта в продукте, и инженерная дисциплина — типизация, тесты, CI и понятные правила для всех в репозитории.",
    },
    contactSection: {
      eyebrow: "Контакты",
      title: "Нужен frontend-разработчик в команду?",
      description:
        "Готов подключиться к Vue/Nuxt проекту, усилить архитектуру, стабилизировать релизы и довести интерфейс до хороших метрик.",
    },
    stack: [
      {
        name: "Frontend Core",
        description:
          "Vue 3 Composition API, Nuxt 3/4, Vue 2, React, TypeScript, JavaScript ES6+. Основной опыт во Vue-экосистеме, при необходимости быстро переключаюсь на React.",
        icon: "simple-icons:nuxtdotjs",
      },
      {
        name: "State & UI",
        description:
          "Pinia, Vuex, Redux, Zustand, Tailwind CSS, SCSS, PostCSS, PrimeVue, Vuetify, Quasar, Inspira UI.",
        icon: "lucide:panel-top",
      },
      {
        name: "Quality",
        description:
          "Playwright, Vitest, Jest, визуальная регрессия, ESLint, Prettier, Husky, Lint-staged.",
        icon: "lucide:shield-check",
      },
      {
        name: "Integrations",
        description:
          "REST API, Swagger, Postman, Stripe, Zoho CRM, Telegram bots, Sentry, Docker, Bitbucket Pipelines.",
        icon: "lucide:workflow",
      },
    ],
    process: [
      {
        number: "01",
        title: "Архитектура с нуля",
        description:
          "Выбираю стек, структуру проекта, стандарты качества и фундамент, который можно масштабировать.",
      },
      {
        number: "02",
        title: "Продуктовая логика",
        description:
          "Погружаюсь в бизнес-метрики: конверсия, динамические тарифы, сложные правила расчета, UX мобильных сценариев и производительность.",
      },
      {
        number: "03",
        title: "Качество и команда",
        description:
          "Закрываю риски через типизацию, тестирование, мониторинг, CI/CD, понятные правила разработки.",
      },
    ],
  },
  en: {
    name: "I'm Rinat",
    seo: {
      title: "Frontend Developer",
      description:
        "Frontend (Vue/Nuxt/TypeScript): complex product flows, white label, maps and performance. Remote, full-time.",
    },
    heroBadge: "Frontend Developer",
    flipWords: [
      "I ship messy flows as boring-stable releases",
      "Maps, catalogs, dashboards — lots of state, little room for breakage",
      "Performance users feel in the UI, not only in Lighthouse scores",
      "Code structure you can refactor six months later without fear",
    ],
    heroDescription:
      "I work end-to-end as a frontend engineer: clarify requirements, balance UX with tech debt, and align with backend until releases stay predictable. Below are case studies and stack; you can download my resume in one click.",
    heroPrimaryCta: "View experience",
    heroSecondaryCta: "Contact me",
    resumeButton: "Download resume",
    resumeHref: "/resume-rinat-razhapov-ru.pdf",
    coreWebVitals: "Core Web Vitals",
    bookingArchitecture: "Booking flow architecture",
    aboutSection: {
      eyebrow: "About me",
      title: "How I work",
      description:
        "I care about clear agreements with product and backend: scenarios, edge cases, and contracts before they become rework. I prefer a systematic approach—from frontend structure to observability and regressions—and calm execution through release without last-minute chaos.",
    },
    aboutHighlights: [
      "Remote, full-time; comfortable in international teams and English-first communication",
      "White label delivery: multiple brands from one codebase with shared logic and separate branding",
      "Maps and dense UI: Mapbox plus Google/Yandex Maps—routes, large datasets, responsive UX",
      "SEO and markup: SSR/ISR, dynamic meta and JSON-LD for organic traffic on large catalogs",
      "Currently growing: AI features in products, Telegram bots, SMB SaaS, Node.js APIs, Three.js/Pixi experiments",
      "Acceleration toolkit: Cursor, MCP and Codex—tests, refactors and legacy analysis with intent",
    ],
    workSection: {
      eyebrow: "Experience",
      title: "Employment",
      description:
        "Roles and companies. Detailed product write-ups live in Projects.",
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Selected products",
      description:
        "A short overview of products where I owned the frontend: booking flows, marketplaces, maps and operator tooling.",
    },
    projectsReadMore: "Read more",
    workHistory: [
      {
        role: "Frontend Developer",
        company: "TrustyOne",
        period: "2024 — 2026",
      },
      {
        role: "Frontend Developer",
        company: "Paleo Studio",
        period: "2022 — 2024",
      },
    ],
    stackSection: {
      eyebrow: "Skills",
      title: "A stack wider than a UI library",
      description:
        "Frontend architecture, React/Vue ecosystems, testing, integrations, Telegram bots, CI/CD and product optimization.",
    },
    processSection: {
      eyebrow: "Strengths",
      title: "What I bring to a team",
      description:
        "Three pillars: thoughtful architecture at kickoff, attention to conversion and pricing rules in the product, and engineering discipline—typing, tests, CI and clear repo standards for everyone.",
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Need a frontend developer on your team?",
      description:
        "I can join a Vue/Nuxt project, strengthen architecture, stabilize releases and bring the interface to solid product metrics.",
    },
    stack: [
      {
        name: "Frontend Core",
        description:
          "Vue 3 Composition API, Nuxt 3/4, Vue 2, React, TypeScript, JavaScript ES6+. My main experience is in the Vue ecosystem, with the ability to switch to React when needed.",
        icon: "simple-icons:nuxtdotjs",
      },
      {
        name: "State & UI",
        description:
          "Pinia, Vuex, Redux, Zustand, Tailwind CSS, SCSS, PostCSS, PrimeVue, Vuetify, Quasar and Inspira UI.",
        icon: "lucide:panel-top",
      },
      {
        name: "Quality",
        description:
          "Playwright, Vitest, Jest, visual regression, ESLint, Prettier, Husky and lint-staged.",
        icon: "lucide:shield-check",
      },
      {
        name: "Integrations",
        description:
          "REST API, Swagger, Postman, Stripe, Zoho CRM, Telegram bots, Sentry, Docker and Bitbucket Pipelines.",
        icon: "lucide:workflow",
      },
    ],
    process: [
      {
        number: "01",
        title: "Architecture from scratch",
        description:
          "I choose the stack, project structure, quality standards and a foundation that can scale.",
      },
      {
        number: "02",
        title: "Product logic",
        description:
          "I dive into conversion, dynamic pricing, complex calculation rules, mobile UX scenarios and performance.",
      },
      {
        number: "03",
        title: "Quality and team",
        description:
          "I reduce risk with typing, testing, monitoring, CI/CD and clear development rules.",
      },
    ],
  },
};

const t = computed(() => pageText[language.value]);

const { projects: projectsList } = useProjects();

const projectCards = computed(() =>
  projectsList.map((p) => ({
    slug: p.slug,
    index: p.index,
    title: language.value === "ru" ? p.titleRu : p.titleEn,
    intro: language.value === "ru" ? p.introRu : p.introEn,
    period: language.value === "ru" ? p.periodRu : p.periodEn,
  })),
);

const projectRows = projectCards;

const { resolvedMode } = useTheme();

const isDark = computed(() => resolvedMode.value === "dark");

const heroStats = computed(() =>
  language.value === "ru"
    ? [
        { label: "Опыт", value: "3+", description: "года в продакшене" },
        { label: "Релизы", value: "10+", description: "проектов и релизов" },
        {
          label: "Формат",
          value: "Remote",
          description: "Full-time, комфортно в распределённых командах",
        },
      ]
    : [
        {
          label: "Experience",
          value: "3+",
          description: "Years in production",
        },
        { label: "Delivery", value: "10+", description: "Projects shipped" },
        {
          label: "Format",
          value: "Remote",
          description: "Full-time, comfortable in distributed teams",
        },
      ],
);

const aboutIntro = computed(() =>
  language.value === "ru" ? "Привет, я Ринат." : "Hi, I'm Rinat.",
);

const aboutParagraph1 = computed(() =>
  language.value === "ru"
    ? "Работаю frontend-инженером над продуктами с реальными метриками: беру сложные сценарии, упрощаю UX и довожу интерфейсы до стабильного продакшна."
    : "I work as a frontend engineer on products with real metrics: I simplify complex flows, improve UX, and ship stable production interfaces.",
);

const aboutParagraph2 = computed(() =>
  language.value === "ru"
    ? "Сильная сторона — системная работа с архитектурой, качеством и скоростью релизов: типизация, контракты с backend, регрессии и предсказуемая поставка."
    : "My strong side is systematic work on architecture, quality, and release speed: typing, backend contracts, regression safety, and predictable delivery.",
);

useHead(() => ({
  htmlAttrs: {
    lang: language.value,
  },
}));

useSeoMeta({
  title: computed(() => t.value.seo.title),
  description: computed(() => t.value.seo.description),
});
</script>
