<template>
  <main class="halftone relative min-h-screen overflow-x-clip">
    <AppHeader />

    <!-- Hero: реплика в пузыре, крупный рукописный заголовок, стикеры со счётом -->
    <RevealOnScroll as="section" class="section-pad section-rule relative">
      <div class="grid gap-11 xl:grid-cols-[1fr_340px] xl:items-start">
        <div>
          <p class="rise bubble inline-block px-5 py-3 text-lead">{{ t.heroBubble }}</p>

          <h1 class="rise mt-6 font-hand text-display tracking-[-0.01em]">
            <span class="inline-block -rotate-2">{{ t.heroTitle[0] }}</span><br>
            <span
              class="inline-block rotate-[1.2deg] text-accent [text-shadow:4px_4px_0_var(--ink)]"
            >{{ t.heroTitle[1] }}</span>
          </h1>

          <ul class="rise mt-8 flex flex-wrap gap-2.5">
            <li v-for="tag in heroTags" :key="tag" class="tag">{{ tag }}</li>
          </ul>

          <div class="mt-10 grid gap-4.5 sm:grid-cols-2">
            <div
              v-for="principle in t.principles"
              :key="principle.number"
              class="rise panel panel-blob lift flex items-start gap-4 px-5 py-5"
            >
              <span class="chip-num size-9.5 text-sm">{{ principle.number }}</span>
              <p class="text-note">{{ principle.text }}</p>
            </div>
          </div>

          <div class="rise mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#experience" class="btn btn-accent">{{ t.heroCtaExperience }}</a>
            <a href="#contact" class="btn btn-paper">{{ t.heroCtaContact }}</a>
            <a :href="t.resumeHref" download class="btn-dashed">{{ t.heroCtaResume }} ↓</a>
          </div>
        </div>

        <aside class="flex flex-col gap-5.5 pt-3">
          <!-- Motion B: стикеры медленно покачиваются, счётчики докручиваются один раз -->
          <div
            class="rise float-slow rounded-[var(--blob)] border-3 border-ink bg-marker-yellow px-6 py-6 text-[#23201e] shadow-[6px_7px_0_var(--ink)]"
          >
            <p class="font-mono text-[15px] uppercase leading-none tracking-[0.1em]">
              {{ t.stats.experience.label }}
            </p>
            <p class="mt-2 font-hand text-stat font-bold">
              <InspiraNumberTicker
                :value="3"
                :decimal-places="0"
                class="font-hand text-stat font-bold tracking-normal text-[#23201e]"
              />+
            </p>
            <p class="mt-1 text-[20px] leading-[1.25]">{{ t.stats.experience.note }}</p>
          </div>

          <div
            class="rise float-slower rounded-[var(--blob-alt)] border-3 border-ink bg-marker-mint px-6 py-6 text-[#23201e] shadow-[6px_7px_0_var(--ink)]"
          >
            <p class="font-mono text-[15px] uppercase leading-none tracking-[0.1em]">
              {{ t.stats.releases.label }}
            </p>
            <p class="mt-2 font-hand text-stat font-bold">
              <InspiraNumberTicker
                :value="15"
                :decimal-places="0"
                class="font-hand text-stat font-bold tracking-normal text-[#23201e]"
              />+
            </p>
            <p class="mt-1 text-[20px] leading-[1.25]">{{ t.stats.releases.note }}</p>
          </div>

          <div class="rise rounded-3xl border-3 border-dashed border-ink bg-panel px-6 py-5.5">
            <p class="label">{{ t.stats.format.label }}</p>
            <p class="mt-2 font-hand text-[32px] font-bold leading-[1.05]">
              {{ t.stats.format.value }}
            </p>
            <p class="mt-2 text-[18px] leading-[1.3] text-dim">{{ t.stats.format.note }}</p>
          </div>
        </aside>
      </div>
    </RevealOnScroll>

    <!-- Обо мне: фото как полароид с плёнкой, текст в речевом пузыре -->
    <RevealOnScroll id="about" as="section" class="section-pad section-rule">
      <div class="grid gap-12 xl:grid-cols-[400px_1fr]">
        <div
          class="rise panel relative -rotate-[1.6deg] rounded-[20px] px-4 pb-14 pt-4 shadow-[7px_8px_0_var(--ink)]"
        >
          <NuxtImg
            src="/images/avatar.jpg"
            :alt="t.about.photoAlt"
            class="aspect-4/5 w-full rounded-xl border-3 border-ink object-cover"
            sizes="360px xl:400px"
          />
          <p
            class="absolute inset-x-0 bottom-3.5 text-center font-body text-[22px] leading-none text-dim"
          >
            {{ t.about.photoCaption }}
          </p>
          <!-- клочок малярной ленты сверху -->
          <span
            aria-hidden="true"
            class="absolute -top-4 left-1/2 h-8 w-30 -translate-x-1/2 -rotate-4 border-2 border-[rgba(35,32,30,.35)] bg-[rgba(245,196,67,.75)]"
          />
        </div>

        <div>
          <p class="rise label">{{ t.about.eyebrow }}</p>
          <h2 class="rise mt-4 font-hand text-heading">{{ t.about.name }}</h2>
          <div class="rise bubble mt-6 max-w-[70ch] px-7 py-6 shadow-[6px_7px_0_var(--ink)]">
            <p class="text-lead">{{ t.about.paragraph1 }}</p>
            <p class="mt-4 text-lead text-dim">{{ t.about.paragraph2 }}</p>
          </div>
          <div class="rise mt-7 flex flex-wrap gap-3.5">
            <a :href="t.resumeHref" download class="btn btn-accent">{{ t.about.ctaResume }}</a>
            <a
              href="https://t.me/r33n_dev"
              target="_blank"
              rel="noreferrer"
              class="btn btn-paper"
            >
              {{ t.about.ctaTelegram }}
            </a>
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <!-- Опыт: таймлайн с кружками годов на чернильной линии -->
    <RevealOnScroll id="experience" as="section" class="section-pad section-rule">
      <SectionHeading
        :eyebrow="t.workSection.eyebrow"
        :title="t.workSection.title"
        :description="t.workSection.description"
      />

      <div class="relative mt-11 md:pl-[90px]">
        <span
          aria-hidden="true"
          class="absolute bottom-9 left-[43px] top-6 hidden w-[3px] bg-line md:block"
        />
        <article
          v-for="job in t.workHistory"
          :key="job.company"
          class="rise panel panel-blob lift relative mb-7 px-7 py-7 last:mb-0"
        >
          <span
            class="chip-num absolute -left-[93px] top-6 hidden size-[62px] bg-panel text-[15px] text-ink md:flex"
          >
            {{ job.from }}
          </span>
          <div class="flex flex-wrap items-baseline justify-between gap-6">
            <h3 class="font-hand text-company">{{ job.company }}</h3>
            <p class="font-mono text-[15px] leading-none text-dim">{{ job.years }}</p>
          </div>
          <p class="role-pill mt-3">{{ job.role }}</p>
          <p class="mt-4 text-[21px] leading-[1.4] text-dim">{{ job.desc }}</p>
        </article>
      </div>
    </RevealOnScroll>

    <!-- Проекты -->
    <RevealOnScroll id="projects" as="section" class="section-pad section-rule">
      <SectionHeading
        :eyebrow="t.projectsSection.eyebrow"
        :title="t.projectsSection.title"
        :description="t.projectsSection.description"
      />

      <div class="mt-11 grid gap-6.5 sm:grid-cols-2 xl:grid-cols-3">
        <NuxtLink
          v-for="card in projectCards"
          :key="card.slug"
          :to="`/projects/${card.slug}`"
          class="rise panel panel-blob lift group flex flex-col gap-3 px-7 py-6.5 text-ink hover:bg-paper-warm sm:min-h-[266px]"
        >
          <div class="flex items-center justify-between">
            <span class="chip-num size-10.5 text-[15px] group-hover:bg-marker-yellow group-hover:text-[#23201e]">
              {{ card.index }}
            </span>
            <span class="font-mono text-sm leading-none text-dim">{{ card.period }}</span>
          </div>
          <h3 class="mt-1.5 font-hand text-cardtitle">{{ card.title }}</h3>
          <p class="font-mono text-[13px] leading-[1.3] text-accent-text">{{ card.category }}</p>
          <p class="text-note text-dim">{{ card.intro }}</p>
          <p class="mt-auto flex items-center gap-2.5 font-hand text-2xl font-bold">
            {{ t.readMore }}
            <span aria-hidden="true" class="nudge-x text-accent">→</span>
          </p>
        </NuxtLink>
      </div>
    </RevealOnScroll>

    <!-- Пет-проекты: мятная подложка, пунктирные рамки -->
    <RevealOnScroll id="pet-projects" as="section" class="section-pad section-rule bg-tint">
      <SectionHeading
        :eyebrow="t.petSection.eyebrow"
        :title="t.petSection.title"
        :description="t.petSection.description"
        tone="mint"
      />

      <div class="mt-10 grid gap-6.5 sm:grid-cols-2 xl:grid-cols-3">
        <NuxtLink
          v-for="card in petCards"
          :key="card.slug"
          :to="`/projects/${card.slug}`"
          class="rise lift lift-cw flex flex-col gap-3 rounded-3xl border-3 border-dashed border-ink bg-panel px-7 py-6.5 text-ink sm:min-h-[220px]"
        >
          <div class="flex items-center justify-between">
            <span class="chip-num size-10 bg-marker-mint text-sm text-[#23201e]">
              {{ card.index }}
            </span>
            <span class="font-mono text-sm leading-none text-dim">{{ card.period }}</span>
          </div>
          <h3 class="mt-1 font-hand text-[clamp(1.625rem,2.5vw,2.25rem)] leading-[0.95]">
            {{ card.title }}
          </h3>
          <p class="text-note text-dim">{{ card.intro }}</p>
          <p class="mt-auto flex items-center gap-2.5 font-hand text-[22px] font-bold">
            {{ t.readMore }}
            <span aria-hidden="true" class="text-accent">→</span>
          </p>
        </NuxtLink>
      </div>
    </RevealOnScroll>

    <!-- Лендинги: синяя лента с полутоном поверх -->
    <RevealOnScroll
      id="landings"
      as="section"
      class="halftone halftone-light section-pad section-rule relative overflow-hidden bg-band text-[#fff7e6]"
    >
      <div class="relative">
        <SectionHeading
          :eyebrow="t.landingsSection.eyebrow"
          :title="t.landingsSection.title"
          :description="t.landingsSection.description"
          tone="poster"
        />

        <div class="mt-11 grid gap-6.5 sm:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="card in landingCards"
            :key="card.slug"
            :to="`/projects/${card.slug}`"
            class="rise lift flex flex-col gap-3 rounded-[var(--blob-alt)] border-3 border-[#23201e] bg-[#fff7e6] px-7 py-6.5 text-[#23201e] shadow-[6px_7px_0_#23201e] hover:shadow-[11px_13px_0_#23201e] sm:min-h-[210px]"
          >
            <span class="font-mono text-sm leading-none text-[#6b625a]">{{ card.index }}</span>
            <h3 class="font-hand text-[clamp(2rem,3.2vw,2.875rem)] leading-[0.95]">
              {{ card.title }}
            </h3>
            <p class="text-note text-[#6b625a]">{{ card.intro }}</p>
            <p class="mt-auto flex items-center gap-2.5 font-hand text-[22px] font-bold">
              {{ t.watch }}
              <span aria-hidden="true" class="nudge-x text-[#e4462c]">→</span>
            </p>
          </NuxtLink>
        </div>
      </div>
    </RevealOnScroll>

    <!-- Навыки -->
    <RevealOnScroll id="stack" as="section" class="section-pad section-rule">
      <SectionHeading
        :eyebrow="t.stackSection.eyebrow"
        :title="t.stackSection.title"
        :description="t.stackSection.description"
      />

      <div class="mt-11 grid gap-6.5 lg:grid-cols-2">
        <article
          v-for="group in t.skills"
          :key="group.title"
          class="rise panel panel-blob px-8 py-7"
        >
          <h3 class="font-hand text-[clamp(2rem,2.9vw,2.625rem)] leading-none">
            {{ group.title }}
          </h3>
          <p class="mb-5 mt-2.5 max-w-[52ch] text-note text-dim">{{ group.note }}</p>
          <ul class="flex flex-wrap gap-2.5">
            <li v-for="item in group.items" :key="item" class="tag tag-quiet">{{ item }}</li>
          </ul>
        </article>
      </div>
    </RevealOnScroll>

    <!-- Контакты -->
    <RevealOnScroll id="contact" as="footer" class="section-pad">
      <div class="rise panel max-w-[1000px] rounded-[36px_36px_36px_10px] px-11 py-10 shadow-[8px_9px_0_var(--ink)]">
        <p class="label">{{ t.contactSection.eyebrow }}</p>
        <h2 class="mt-4 max-w-[20ch] font-hand text-shout">{{ t.contactSection.title }}</h2>
        <p class="mt-4 max-w-[58ch] text-lead text-dim">{{ t.contactSection.description }}</p>
      </div>

      <div class="mt-8 grid max-w-[1000px] gap-4.5 sm:grid-cols-2">
        <a
          v-for="link in contactLinks"
          :key="link.id"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          class="rise panel panel-blob lift flex min-h-11 items-center justify-between gap-5 px-6 py-5 text-ink hover:bg-paper-warm"
        >
          <span class="flex flex-col gap-1">
            <span class="font-mono text-[13px] uppercase leading-none tracking-[0.12em] text-dim">
              {{ t.contactLabels[link.id] }}
            </span>
            <span class="font-hand text-[clamp(1.5rem,2.4vw,2.125rem)] font-bold leading-none">
              {{ link.value }}
            </span>
          </span>
          <span aria-hidden="true" class="font-hand text-[26px] font-bold text-accent">→</span>
        </a>
      </div>
    </RevealOnScroll>
  </main>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'nuxt/app'
import type { ProjectEntry } from '~/composables/useProjects'

type Language = 'ru' | 'en'
type ContactId = 'email' | 'telegram' | 'github' | 'gitlab'

interface SectionCopy {
  eyebrow: string
  title: string
  description: string
}

interface Principle {
  number: string
  text: string
}

interface WorkHistoryRow {
  from: string
  years: string
  company: string
  role: string
  desc: string
}

interface SkillGroup {
  title: string
  note: string
  items: string[]
}

interface StatCopy {
  label: string
  note: string
}

interface PageText {
  seo: { title: string; description: string }
  heroBubble: string
  heroTitle: [string, string]
  principles: Principle[]
  heroCtaExperience: string
  heroCtaContact: string
  heroCtaResume: string
  resumeHref: string
  stats: {
    experience: StatCopy
    releases: StatCopy
    format: StatCopy & { value: string }
  }
  about: {
    eyebrow: string
    name: string
    paragraph1: string
    paragraph2: string
    ctaResume: string
    ctaTelegram: string
    photoAlt: string
    photoCaption: string
  }
  workSection: SectionCopy
  workHistory: WorkHistoryRow[]
  projectsSection: SectionCopy
  petSection: SectionCopy
  landingsSection: SectionCopy
  stackSection: SectionCopy
  contactSection: SectionCopy
  contactLabels: Record<ContactId, string>
  readMore: string
  watch: string
  skills: SkillGroup[]
}

const { language } = useLanguage()

const heroTags = ['#TypeScript', '#Vue', '#Nuxt', '#React', '#Next', '#Node.js']

const pageText: Record<Language, PageText> = {
  ru: {
    seo: {
      title: 'Frontend Developer',
      description:
        'Frontend (Vue/Nuxt/TypeScript): сложные продуктовые сценарии, white label, карты и производительность. Удалённо / гибрид / офис, full-time.',
    },
    heroBubble: 'Привет! Я Ринат 👋',
    heroTitle: ['Frontend', 'Developer'],
    principles: [
      { number: '01', text: 'Сложные сценарии довожу до стабильных релизов, а не до «потом поправим»' },
      { number: '02', text: 'Карты, каталоги, кабинеты — где много состояний и мало права на ошибку' },
      { number: '03', text: 'Скорость и метрики так, чтобы это заметил пользователь, а не только Lighthouse' },
      { number: '04', text: 'Код и архитектура так, чтобы через полгода в проект не страшно заходить' },
    ],
    heroCtaExperience: 'Смотреть опыт',
    heroCtaContact: 'Связаться',
    heroCtaResume: 'Скачать резюме',
    resumeHref: '/cv-ru.pdf',
    stats: {
      experience: { label: 'Опыт', note: 'года в продакшене' },
      releases: { label: 'Релизы', note: 'проектов и релизов' },
      format: {
        label: 'Формат',
        value: 'Удалённо или гибрид / офис в Бишкеке',
        note: 'full-time, part-time и контракт.',
      },
    },
    about: {
      eyebrow: 'Обо мне',
      name: 'Ринат Ражапов',
      paragraph1:
        'Работаю frontend-инженером над продуктами с реальными метриками: беру сложные сценарии, упрощаю UX и довожу интерфейсы до стабильного продакшна.',
      paragraph2:
        'Сильная сторона — системная работа с архитектурой, качеством и скоростью релизов: типизация, контракты с backend, регрессии и предсказуемая поставка.',
      ctaResume: 'Скачать резюме',
      ctaTelegram: 'Написать в Telegram',
      photoAlt: 'Ринат Ражапов',
      photoCaption: 'Это я, где-то в 2026',
    },
    workSection: {
      eyebrow: 'Опыт',
      title: 'Опыт работы',
      description: 'Ключевые позиции и компании. Продуктовые кейсы — в разделе «Проекты».',
    },
    workHistory: [
      {
        from: '2024',
        years: 'Апрель 2024 — Февраль 2026',
        company: 'TrustyOne',
        role: 'Frontend Developer',
        desc: 'Full-cycle решения для travel и event-сектора: DLI, Eventner, Inspiritaly, Travel 2025. Архитектура с нуля, API-контракты с backend, тестирование и CI/CD, оптимизация Core Web Vitals. Менторство джунов и приоритизация бэклога.',
      },
      {
        from: '2022',
        years: 'Ноябрь 2022 — Январь 2024',
        company: 'Paleo Studio',
        role: 'Frontend Developer',
        desc: 'Логистическая платформа на Vue 2 + Vuetify, личный кабинет Silkway Rally с динамическими таблицами и графиками, портал ночного клуба, конструктор контента для админ-панели, браузерное расширение.',
      },
    ],
    projectsSection: {
      eyebrow: 'Работы',
      title: 'Проекты',
      description:
        'Продукты, в которых я вёл frontend: booking flow, маркетплейсы, карты и операторские панели.',
    },
    petSection: {
      eyebrow: 'Личное / эксперименты',
      title: 'Пет-проекты',
      description:
        'Расширение для браузера, конвертер Figma в Vue, CRM для лидов с Gemini API, а также магазин и сервис трансферов, собранные для себя на свежем React 19 и Next.js 15.',
    },
    landingsSection: {
      eyebrow: 'Витрина',
      title: 'Сайты-визитки и лендинги',
      description:
        'Одностраничники на чистых HTML, CSS и JS — без фреймворков. Типографика, анимации по скроллу, адаптив.',
    },
    stackSection: {
      eyebrow: 'Навыки',
      title: 'Стек шире, чем UI-библиотека',
      description:
        'Frontend-архитектура, Vue/React, тестирование, интеграции, боты, CI/CD и продуктовая оптимизация.',
    },
    contactSection: {
      eyebrow: 'Контакты',
      title: 'Нужен frontend-разработчик в команду?',
      description:
        'Готов подключиться к Vue/Nuxt проекту, усилить архитектуру, стабилизировать релизы и довести интерфейс до хороших метрик.',
    },
    contactLabels: { email: 'Почта', telegram: 'Telegram', github: 'GitHub', gitlab: 'GitLab' },
    readMore: 'Подробнее',
    watch: 'Смотреть',
    skills: [
      {
        title: 'Frontend Core',
        note: 'Основной опыт во Vue-экосистеме, при необходимости быстро переключаюсь на React.',
        items: ['Vue 3 Composition API', 'Nuxt 3/4', 'Vue 2', 'React', 'TypeScript', 'JavaScript ES6+', 'Node.js'],
      },
      {
        title: 'State & UI',
        note: 'Стейт-менеджмент и UI-слой продуктовых интерфейсов.',
        items: ['Pinia', 'Vuex', 'Redux', 'Zustand', 'Tailwind CSS', 'SCSS', 'PostCSS', 'PrimeVue', 'Vuetify', 'Quasar'],
      },
      {
        title: 'Quality',
        note: 'Тестирование и предсказуемая поставка вместо ручных прогонов.',
        items: ['Playwright', 'Vitest', 'Jest', 'Визуальная регрессия', 'ESLint', 'Prettier', 'Husky'],
      },
      {
        title: 'Integrations',
        note: 'Платежи, CRM, карты, мониторинг и CI/CD.',
        items: ['REST API', 'Swagger', 'Stripe', 'Zoho CRM', 'Mapbox GL', 'Telegram bots', 'Sentry', 'Docker'],
      },
    ],
  },
  en: {
    seo: {
      title: 'Frontend Developer',
      description:
        'Frontend (Vue/Nuxt/TypeScript): complex product flows, white label, maps and performance. Remote / hybrid / office, full-time.',
    },
    heroBubble: "Hi! I'm Rinat 👋",
    heroTitle: ['Frontend', 'Developer'],
    principles: [
      { number: '01', text: 'I take complex flows all the way to stable releases, not to "we will fix it later"' },
      { number: '02', text: 'Maps, catalogues and dashboards — heavy state and little room for mistakes' },
      { number: '03', text: 'Performance users actually feel in the UI, not only in a Lighthouse score' },
      { number: '04', text: 'Code and architecture you can walk back into six months later without fear' },
    ],
    heroCtaExperience: 'View experience',
    heroCtaContact: 'Get in touch',
    heroCtaResume: 'Download resume',
    resumeHref: '/cv-en.pdf',
    stats: {
      experience: { label: 'Experience', note: 'years in production' },
      releases: { label: 'Delivery', note: 'projects and releases' },
      format: {
        label: 'Format',
        value: 'Remote / hybrid / office',
        note: 'Full-time, comfortable in distributed teams',
      },
    },
    about: {
      eyebrow: 'About',
      name: 'Rinat Razhapov',
      paragraph1:
        'I work as a frontend engineer on products with real metrics: I take on complex scenarios, simplify the UX and bring interfaces to stable production.',
      paragraph2:
        'My strong side is systematic work on architecture, quality and release speed: typing, backend contracts, regression safety and predictable delivery.',
      ctaResume: 'Download resume',
      ctaTelegram: 'Message on Telegram',
      photoAlt: 'Rinat Razhapov',
      photoCaption: 'Rinat, somewhere in 2026',
    },
    workSection: {
      eyebrow: 'Experience',
      title: 'Employment',
      description: 'Key roles and companies. Product write-ups live in the Work section.',
    },
    workHistory: [
      {
        from: '2024',
        years: 'April 2024 — February 2026',
        company: 'TrustyOne',
        role: 'Frontend Developer',
        desc: 'Full-cycle work for travel and event products: DLI, Eventner, Inspiritaly, Travel 2025. Architecture from scratch, API contracts with backend, testing and CI/CD, Core Web Vitals. Mentoring juniors and backlog prioritisation.',
      },
      {
        from: '2022',
        years: 'November 2022 — January 2024',
        company: 'Paleo Studio',
        role: 'Frontend Developer',
        desc: 'A logistics platform on Vue 2 + Vuetify, the Silkway Rally account area with dynamic tables and charts, a nightclub portal, a content builder for the admin panel and a browser extension.',
      },
    ],
    projectsSection: {
      eyebrow: 'Work',
      title: 'Projects',
      description:
        'Products where I owned the frontend: booking flows, marketplaces, maps and operator tooling.',
    },
    petSection: {
      eyebrow: 'Personal / experiments',
      title: 'Pet projects',
      description:
        'A browser extension, a Figma-to-Vue converter, a lead CRM on the Gemini API, plus a shop and a transfer service built for myself on React 19 and Next.js 15.',
    },
    landingsSection: {
      eyebrow: 'Showcase',
      title: 'Landing pages and business-card sites',
      description:
        'Single-page sites in plain HTML, CSS and JS — no frameworks. Typography, scroll-driven animation, responsive layout.',
    },
    stackSection: {
      eyebrow: 'Skills',
      title: 'A stack wider than a UI library',
      description:
        'Frontend architecture, Vue/React, testing, integrations, bots, CI/CD and product optimisation.',
    },
    contactSection: {
      eyebrow: 'Contact',
      title: 'Need a frontend developer on your team?',
      description:
        'I can join a Vue/Nuxt project, strengthen the architecture, stabilise releases and bring the interface to solid metrics.',
    },
    contactLabels: { email: 'Email', telegram: 'Telegram', github: 'GitHub', gitlab: 'GitLab' },
    readMore: 'Read more',
    watch: 'Take a look',
    skills: [
      {
        title: 'Frontend Core',
        note: 'My main experience is in the Vue ecosystem, and I switch to React quickly when needed.',
        items: ['Vue 3 Composition API', 'Nuxt 3/4', 'Vue 2', 'React', 'TypeScript', 'JavaScript ES6+', 'Node.js'],
      },
      {
        title: 'State & UI',
        note: 'State management and the UI layer of product interfaces.',
        items: ['Pinia', 'Vuex', 'Redux', 'Zustand', 'Tailwind CSS', 'SCSS', 'PostCSS', 'PrimeVue', 'Vuetify', 'Quasar'],
      },
      {
        title: 'Quality',
        note: 'Testing and predictable delivery instead of manual run-throughs.',
        items: ['Playwright', 'Vitest', 'Jest', 'Visual regression', 'ESLint', 'Prettier', 'Husky'],
      },
      {
        title: 'Integrations',
        note: 'Payments, CRM, maps, monitoring and CI/CD.',
        items: ['REST API', 'Swagger', 'Stripe', 'Zoho CRM', 'Mapbox GL', 'Telegram bots', 'Sentry', 'Docker'],
      },
    ],
  },
}

const t = computed(() => pageText[language.value])

const { projects: projectsList } = useProjects()

function toCard(entry: ProjectEntry) {
  const isRu = language.value === 'ru'

  return {
    slug: entry.slug,
    index: entry.index,
    title: isRu ? entry.titleRu : entry.titleEn,
    intro: isRu ? entry.introRu : entry.introEn,
    period: isRu ? entry.periodRu : entry.periodEn,
    category: entry.tags.slice(0, 3).join(' · '),
  }
}

const projectCards = computed(() =>
  projectsList.filter((entry) => entry.category === 'work').map(toCard),
)

const petCards = computed(() =>
  projectsList.filter((entry) => entry.category === 'pet').map(toCard),
)

const landingCards = computed(() =>
  projectsList
    .filter((entry) => entry.category === 'landing')
    .map((entry) => ({
      ...toCard(entry),
      // В витрине живёт только имя бренда — уточнение несёт описание рядом
      title: toCard(entry).title.split('—')[0]?.trim() ?? '',
    })),
)

const contactLinks: { id: ContactId; value: string; href: string; external: boolean }[] = [
  { id: 'email', value: 'rinni499@gmail.com', href: 'mailto:rinni499@gmail.com', external: false },
  { id: 'telegram', value: '@r33n_dev', href: 'https://t.me/r33n_dev', external: true },
  { id: 'github', value: 'github.com/r33n99', href: 'https://github.com/r33n99', external: true },
  { id: 'gitlab', value: 'gitlab.com/r33n99', href: 'https://gitlab.com/r33n99', external: true },
]

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
