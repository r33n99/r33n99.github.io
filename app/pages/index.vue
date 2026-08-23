<template>
  <main class="min-h-screen overflow-x-clip">
    <AppHeader />

    <!-- Hero: слева дисплей и тезисы, справа колонка цифр -->
    <RevealOnScroll as="section" class="section-rule">
      <div class="grid lg:grid-cols-[1fr_380px]">
        <div class="px-[var(--pad-x)] pb-14 pt-12 lg:border-r-2 lg:border-border lg:pt-[72px]">
          <p class="kicker rise">{{ t.heroKicker }}</p>
          <h1 class="rise mt-5 text-display font-semibold" style="--rise-index: 1">
            <span v-for="line in t.heroTitle" :key="line" class="block">{{ line }}</span>
          </h1>

          <ul class="rise mt-8 flex flex-wrap gap-2" style="--rise-index: 2">
            <li v-for="tag in heroTags" :key="tag" class="tag tag-hoverable">{{ tag }}</li>
          </ul>

          <div class="mt-11 grid border-t-2 border-border sm:grid-cols-2">
            <div
              v-for="(claim, index) in t.heroClaims"
              :key="claim.number"
              class="rise flex gap-3.5 py-5"
              :class="[
                index === 3 ? '' : 'border-b-2 border-border',
                index % 2 === 0 ? 'sm:border-r-2 sm:border-border sm:pr-6' : 'sm:pl-6',
                index === 2 ? 'sm:border-b-0' : '',
              ]"
              :style="{ '--rise-index': index + 3 }"
            >
              <span class="text-xs font-semibold leading-[1.4] text-primary nums">{{ claim.number }}</span>
              <p class="m-0 text-base leading-[1.45]">{{ claim.text }}</p>
            </div>
          </div>

          <div class="rise mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style="--rise-index: 7">
            <a href="#experience" class="btn btn-accent">{{ t.heroCtaExperience }}</a>
            <a href="#contact" class="btn btn-outline">{{ t.heroCtaContact }}</a>
            <a :href="t.resumeHref" download class="btn btn-quiet">{{ t.heroCtaResume }} ↓</a>
          </div>
        </div>

        <aside class="grid grid-cols-2 lg:grid-cols-1">
          <div class="border-b-2 border-r-2 border-border px-[var(--pad-x)] py-8 lg:border-r-0 lg:px-10">
            <p class="kicker">{{ t.stats.experience.label }}</p>
            <p class="mt-3 text-stat font-semibold">
              <InspiraNumberTicker
                :value="3"
                :decimal-places="0"
                class="text-stat font-semibold tracking-[-0.04em] text-foreground"
              />
              <span class="text-primary">+</span>
            </p>
            <p class="mt-2 text-[15px] leading-[1.4] text-muted-foreground">{{ t.stats.experience.note }}</p>
          </div>

          <div class="border-b-2 border-border px-[var(--pad-x)] py-8 lg:px-10">
            <p class="kicker">{{ t.stats.releases.label }}</p>
            <p class="mt-3 text-stat font-semibold">
              <InspiraNumberTicker
                :value="15"
                :decimal-places="0"
                class="text-stat font-semibold tracking-[-0.04em] text-foreground"
              />
              <span class="text-primary">+</span>
            </p>
            <p class="mt-2 text-[15px] leading-[1.4] text-muted-foreground">{{ t.stats.releases.note }}</p>
          </div>

          <div class="col-span-2 px-[var(--pad-x)] py-8 lg:col-span-1 lg:px-10">
            <p class="kicker">{{ t.stats.format.label }}</p>
            <p class="mt-3 text-[26px] font-semibold leading-[1.2] tracking-[-0.01em]">
              {{ t.stats.format.value }}
            </p>
            <p class="mt-2.5 text-[15px] leading-[1.45] text-muted-foreground">{{ t.stats.format.note }}</p>
          </div>
        </aside>
      </div>
    </RevealOnScroll>

    <!-- Обо мне -->
    <RevealOnScroll id="about" as="section" class="section-rule">
      <div class="grid lg:grid-cols-[420px_1fr]">
        <div class="px-[var(--pad-x)] pb-0 pt-[var(--pad-y)] lg:border-r-2 lg:border-border lg:pb-[var(--pad-y)]">
          <div class="aspect-4/5 border-2 border-border bg-surface">
            <NuxtImg
              src="/images/avatar.jpg"
              :alt="t.about.photoAlt"
              class="size-full object-cover grayscale"
              sizes="390px lg:420px"
            />
          </div>
        </div>

        <div class="section-pad">
          <p class="kicker">{{ t.about.eyebrow }}</p>
          <h2 class="rise mt-5 text-section font-semibold">{{ t.about.name }}</h2>
          <p class="rise mt-7 max-w-[64ch] text-[19px] leading-[1.5]" style="--rise-index: 1">
            {{ t.about.paragraph1 }}
          </p>
          <p
            class="rise mt-5 max-w-[64ch] text-[19px] leading-[1.5] text-muted-foreground"
            style="--rise-index: 2"
          >
            {{ t.about.paragraph2 }}
          </p>
          <div class="rise mt-9 flex flex-col gap-3 sm:flex-row" style="--rise-index: 3">
            <a :href="t.resumeHref" download class="btn btn-accent">{{ t.about.ctaResume }}</a>
            <a
              href="https://t.me/r33n_dev"
              target="_blank"
              rel="noreferrer"
              class="btn border-2 border-border px-5 py-3.5 text-foreground hover:border-primary"
            >
              {{ t.about.ctaTelegram }}
            </a>
          </div>
        </div>
      </div>
    </RevealOnScroll>

    <!-- Опыт работы -->
    <RevealOnScroll id="experience" as="section" class="section-pad section-rule">
      <SectionHeading
        :eyebrow="t.workSection.eyebrow"
        :title="t.workSection.title"
        :description="t.workSection.description"
      />

      <div class="mt-12">
        <div class="rule-draw h-0.5 w-full bg-border" />
        <div
          v-for="(job, index) in t.workHistory"
          :key="job.company"
          class="rise grid gap-4 border-b-2 border-border py-8 transition-colors duration-150 ease-out hover:bg-accent-wash md:grid-cols-[180px_300px_1fr] md:items-start md:gap-8"
          :style="{ '--rise-index': index + 1 }"
        >
          <p class="text-[15px] font-medium leading-[1.4] text-muted-foreground nums">{{ job.years }}</p>
          <div>
            <p class="text-[30px] font-semibold leading-[1.1] tracking-[-0.02em]">{{ job.company }}</p>
            <p class="mt-2.5 text-sm font-medium uppercase leading-none tracking-[0.1em] text-accent-quiet">
              {{ job.role }}
            </p>
          </div>
          <p class="text-[17px] leading-[1.5] text-muted-foreground">{{ job.desc }}</p>
        </div>
      </div>
    </RevealOnScroll>

    <!-- Проекты -->
    <RevealOnScroll id="projects" as="section" class="section-pad section-rule">
      <SectionHeading
        :eyebrow="t.projectsSection.eyebrow"
        :title="t.projectsSection.title"
        :description="t.projectsSection.description"
      />

      <div class="mt-12">
        <div class="rule-draw h-0.5 w-full bg-border" />
        <div class="grid border-l-2 border-border sm:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="(card, index) in projectCards"
            :key="card.slug"
            :to="`/projects/${card.slug}`"
            class="rise grid-cell group flex min-h-[230px] flex-col gap-3.5 p-7 transition-colors duration-150 ease-out hover:bg-surface"
            :style="{ '--rise-index': index % 3 }"
          >
            <div class="flex items-center justify-between">
              <span class="parallax-num text-[13px] font-semibold leading-none tracking-[0.1em] text-accent-quiet nums">
                {{ card.index }}
              </span>
              <span class="text-[13px] font-medium leading-none text-muted-foreground nums">{{ card.period }}</span>
            </div>
            <p class="mt-2 text-cardtitle font-semibold">{{ card.title }}</p>
            <p class="text-xs font-medium uppercase leading-none tracking-[0.12em] text-accent-quiet">
              {{ card.category }}
            </p>
            <p class="text-base leading-[1.45] text-muted-foreground">{{ card.intro }}</p>
            <span class="mt-auto flex items-center gap-2 text-sm font-semibold leading-none">
              {{ t.readMore }}
              <span
                aria-hidden="true"
                class="text-primary transition-transform duration-150 ease-out group-hover:translate-x-1.5"
              >→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </RevealOnScroll>

    <!-- Пет-проекты -->
    <RevealOnScroll id="pet-projects" as="section" class="section-pad section-rule">
      <SectionHeading
        :eyebrow="t.petSection.eyebrow"
        :title="t.petSection.title"
        :description="t.petSection.description"
        tone="accent"
      />

      <div class="mt-12">
        <div class="rule-draw h-0.5 w-full bg-border" />
        <div class="grid border-l-2 border-border sm:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="(card, index) in petCards"
            :key="card.slug"
            :to="`/projects/${card.slug}`"
            class="rise grid-cell group flex min-h-[200px] flex-col gap-3.5 bg-accent-wash p-7 transition-colors duration-150 ease-out hover:bg-[var(--accent-wash-strong)]"
            :style="{ '--rise-index': index }"
          >
            <div class="flex items-center justify-between">
              <span class="parallax-num text-[13px] font-semibold leading-none tracking-[0.1em] text-accent-quiet nums">
                {{ card.index }}
              </span>
              <span class="text-[13px] font-medium leading-none text-muted-foreground nums">{{ card.period }}</span>
            </div>
            <p class="mt-2 text-cardtitle font-semibold">{{ card.title }}</p>
            <p class="text-base leading-[1.45] text-muted-foreground">{{ card.intro }}</p>
            <span class="mt-auto flex items-center gap-2 text-sm font-semibold leading-none">
              {{ t.readMore }}
              <span
                aria-hidden="true"
                class="text-primary transition-transform duration-150 ease-out group-hover:translate-x-1.5"
              >→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </RevealOnScroll>

    <!-- Лендинги — плакатная секция, акцент работает полем -->
    <RevealOnScroll
      id="landings"
      as="section"
      class="section-pad section-rule bg-primary text-primary-foreground"
    >
      <SectionHeading
        :eyebrow="t.landingsSection.eyebrow"
        :title="t.landingsSection.title"
        :description="t.landingsSection.description"
        tone="poster"
      />

      <div class="mt-14">
        <div class="rule-draw h-0.5 w-full bg-white/35" />
        <NuxtLink
          v-for="(card, index) in landingCards"
          :key="card.slug"
          :to="`/projects/${card.slug}`"
          class="rise grid items-center gap-4 border-b-2 border-white/35 py-6 text-primary-foreground transition-colors duration-150 ease-out hover:bg-black/15 md:grid-cols-[80px_1fr_200px_140px] md:gap-6"
          :style="{ '--rise-index': index + 1 }"
        >
          <span class="text-[15px] font-semibold leading-none opacity-70 nums">{{ card.index }}</span>
          <span class="text-row font-semibold">{{ card.title }}</span>
          <span class="text-base leading-[1.4] opacity-85">{{ card.intro }}</span>
          <span class="text-[15px] font-semibold leading-none md:text-right">{{ t.readMore }} →</span>
        </NuxtLink>
      </div>
    </RevealOnScroll>

    <!-- Навыки -->
    <RevealOnScroll id="stack" as="section" class="section-pad section-rule">
      <SectionHeading
        :eyebrow="t.stackSection.eyebrow"
        :title="t.stackSection.title"
        :description="t.stackSection.description"
      />

      <div class="mt-12">
        <div class="rule-draw h-0.5 w-full bg-border" />
        <div class="grid border-l-2 border-border lg:grid-cols-2">
          <article
            v-for="(group, index) in t.skills"
            :key="group.title"
            class="rise grid-cell p-8"
            :style="{ '--rise-index': index }"
          >
            <h3 class="text-[26px] font-semibold leading-[1.1] tracking-[-0.02em]">{{ group.title }}</h3>
            <p class="mb-5 mt-3 max-w-[56ch] text-[15px] leading-[1.45] text-muted-foreground">
              {{ group.note }}
            </p>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="item in group.items"
                :key="item"
                class="tag tag-hoverable normal-case tracking-[0.04em] text-foreground"
              >
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </RevealOnScroll>

    <!-- Контакты -->
    <RevealOnScroll id="contact" as="footer" class="px-[var(--pad-x)] pb-14 pt-[var(--pad-y)]">
      <p class="kicker">{{ t.contactSection.eyebrow }}</p>
      <h2 class="rise mt-6 max-w-[24ch] text-contact font-semibold">{{ t.contactSection.title }}</h2>
      <p class="rise mt-6 max-w-[62ch] text-[19px] leading-[1.5] text-muted-foreground" style="--rise-index: 1">
        {{ t.contactSection.description }}
      </p>

      <a
        href="mailto:rinni499@gmail.com"
        class="rise mt-11 inline-block border-b-2 border-primary pb-1.5 text-mail font-semibold transition-colors duration-150 ease-out hover:text-accent-quiet"
        style="--rise-index: 2"
      >
        rinni499@gmail.com
      </a>

      <div class="mt-14">
        <div class="rule-draw h-0.5 w-full bg-border" />
        <div class="grid border-l-2 border-border sm:grid-cols-3">
          <a
            v-for="(link, index) in contactLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="rise grid-cell flex min-h-11 items-center px-6 py-5 text-lg font-semibold leading-none transition-colors duration-150 ease-out hover:bg-surface hover:text-accent-quiet"
            :style="{ '--rise-index': index }"
          >
            {{ link.label }}
            <span class="ml-2 font-normal text-muted-foreground">{{ link.handle }}</span>
          </a>
        </div>
      </div>

      <div class="mt-8 flex justify-between text-[13px] leading-none text-muted-foreground">
        <span>reen.cv — {{ currentYear }}</span>
        <span>Nuxt SSG</span>
      </div>
    </RevealOnScroll>
  </main>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'nuxt/app'
import type { ProjectEntry } from '~/composables/useProjects'

type Language = 'ru' | 'en'

interface SectionCopy {
  eyebrow: string
  title: string
  description: string
}

interface HeroClaim {
  number: string
  text: string
}

interface WorkHistoryRow {
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
  heroKicker: string
  heroTitle: string[]
  heroClaims: HeroClaim[]
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
  }
  workSection: SectionCopy
  workHistory: WorkHistoryRow[]
  projectsSection: SectionCopy
  petSection: SectionCopy
  landingsSection: SectionCopy
  stackSection: SectionCopy
  contactSection: SectionCopy
  readMore: string
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
    heroKicker: 'Привет! Я Ринат',
    heroTitle: ['Frontend', 'Developer'],
    heroClaims: [
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
        value: 'Удалённо / гибрид / офис',
        note: 'Full-time, комфортно в распределённых командах',
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
    },
    workSection: {
      eyebrow: 'Опыт',
      title: 'Опыт работы',
      description: 'Ключевые позиции и компании. Подробные продуктовые кейсы — в разделе «Проекты».',
    },
    workHistory: [
      {
        years: 'Апрель 2024 — Февраль 2026',
        company: 'TrustyOne',
        role: 'Frontend Developer',
        desc: 'Full-cycle решения для travel и event-сектора: DLI, Eventner, Inspiritaly, Travel 2025. Архитектура с нуля, API-контракты с backend, тестирование и CI/CD, оптимизация Core Web Vitals. Менторство джунов и приоритизация бэклога.',
      },
      {
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
        'Краткий обзор продуктов, в которых я вёл frontend: от booking flow и маркетплейсов до карт и операторских панелей.',
    },
    petSection: {
      eyebrow: 'Личное / эксперименты',
      title: 'Пет-проекты',
      description:
        'Небольшие проекты для себя: расширение для браузера, конвертер Figma в Vue и CRM для лидов. Во всех трёх — интеграция с Gemini API: пробую AI-инструменты вне рабочих задач.',
    },
    landingsSection: {
      eyebrow: 'Витрина',
      title: 'Сайты-визитки и лендинги',
      description:
        'Одностраничники для небольшого бизнеса на чистых HTML, CSS и JavaScript — без фреймворков и сборки. Акцент на типографике, анимациях по скроллу и адаптиве.',
    },
    stackSection: {
      eyebrow: 'Навыки',
      title: 'Стек шире, чем UI-библиотека',
      description:
        'Реальный рабочий стек: frontend-архитектура, Vue/React экосистемы, тестирование, интеграции, tg-боты, CI/CD и продуктовая оптимизация.',
    },
    contactSection: {
      eyebrow: 'Контакты',
      title: 'Нужен frontend-разработчик в команду?',
      description:
        'Готов подключиться к Vue/Nuxt проекту, усилить архитектуру, стабилизировать релизы и довести интерфейс до хороших метрик.',
    },
    readMore: 'Подробнее',
    skills: [
      {
        title: 'Frontend Core',
        note: 'Основной опыт во Vue-экосистеме, при необходимости быстро переключаюсь на React.',
        items: ['Vue 3 Composition API', 'Nuxt 3/4', 'Vue 2', 'React', 'TypeScript', 'JavaScript ES6+', 'Node.js'],
      },
      {
        title: 'State & UI',
        note: 'Стейт-менеджмент и UI-слой продуктовых интерфейсов.',
        items: ['Pinia', 'Vuex', 'Redux', 'Zustand', 'Tailwind CSS', 'SCSS', 'PostCSS', 'PrimeVue', 'Vuetify', 'Quasar', 'Inspira UI'],
      },
      {
        title: 'Quality',
        note: 'Тестирование и предсказуемая поставка вместо ручных прогонов.',
        items: ['Playwright', 'Vitest', 'Jest', 'Визуальная регрессия', 'ESLint', 'Prettier', 'Husky', 'Lint-staged'],
      },
      {
        title: 'Integrations',
        note: 'Платежи, CRM, карты, мониторинг и CI/CD.',
        items: ['REST API', 'Swagger', 'Postman', 'Stripe', 'Zoho CRM', 'Mapbox GL', 'Telegram bots', 'Sentry', 'Docker', 'Bitbucket Pipelines'],
      },
    ],
  },
  en: {
    seo: {
      title: 'Frontend Developer',
      description:
        'Frontend (Vue/Nuxt/TypeScript): complex product flows, white label, maps and performance. Remote / hybrid / office, full-time.',
    },
    heroKicker: "Hi! I'm Rinat",
    heroTitle: ['Frontend', 'Developer'],
    heroClaims: [
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
    },
    workSection: {
      eyebrow: 'Experience',
      title: 'Employment',
      description: 'Key roles and companies. Detailed product write-ups live in the Work section.',
    },
    workHistory: [
      {
        years: 'April 2024 — February 2026',
        company: 'TrustyOne',
        role: 'Frontend Developer',
        desc: 'Full-cycle work for travel and event products: DLI, Eventner, Inspiritaly, Travel 2025. Architecture from scratch, API contracts with backend, testing and CI/CD, Core Web Vitals. Mentoring juniors and backlog prioritisation.',
      },
      {
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
        'A short overview of the products where I owned the frontend: booking flows, marketplaces, maps and operator tooling.',
    },
    petSection: {
      eyebrow: 'Personal / experiments',
      title: 'Pet projects',
      description:
        'Small side projects: a browser extension, a Figma-to-Vue converter and a lead CRM. All three integrate the Gemini API — trying AI tooling outside of work tasks.',
    },
    landingsSection: {
      eyebrow: 'Showcase',
      title: 'Landing pages and business-card sites',
      description:
        'Single-page sites for small businesses in plain HTML, CSS and JavaScript — no frameworks, no build step. Focused on typography, scroll-driven animation and responsive layout.',
    },
    stackSection: {
      eyebrow: 'Skills',
      title: 'A stack wider than a UI library',
      description:
        'The real working stack: frontend architecture, the Vue/React ecosystems, testing, integrations, Telegram bots, CI/CD and product optimisation.',
    },
    contactSection: {
      eyebrow: 'Contact',
      title: 'Need a frontend developer on your team?',
      description:
        'I can join a Vue/Nuxt project, strengthen the architecture, stabilise releases and bring the interface to solid metrics.',
    },
    readMore: 'Read more',
    skills: [
      {
        title: 'Frontend Core',
        note: 'My main experience is in the Vue ecosystem, and I switch to React quickly when needed.',
        items: ['Vue 3 Composition API', 'Nuxt 3/4', 'Vue 2', 'React', 'TypeScript', 'JavaScript ES6+', 'Node.js'],
      },
      {
        title: 'State & UI',
        note: 'State management and the UI layer of product interfaces.',
        items: ['Pinia', 'Vuex', 'Redux', 'Zustand', 'Tailwind CSS', 'SCSS', 'PostCSS', 'PrimeVue', 'Vuetify', 'Quasar', 'Inspira UI'],
      },
      {
        title: 'Quality',
        note: 'Testing and predictable delivery instead of manual run-throughs.',
        items: ['Playwright', 'Vitest', 'Jest', 'Visual regression', 'ESLint', 'Prettier', 'Husky', 'Lint-staged'],
      },
      {
        title: 'Integrations',
        note: 'Payments, CRM, maps, monitoring and CI/CD.',
        items: ['REST API', 'Swagger', 'Postman', 'Stripe', 'Zoho CRM', 'Mapbox GL', 'Telegram bots', 'Sentry', 'Docker', 'Bitbucket Pipelines'],
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
      // В плакатной строке живёт только имя бренда — уточнение уже несёт описание рядом
      title: toCard(entry).title.split('—')[0]?.trim() ?? '',
    })),
)

const contactLinks = [
  { label: 'Telegram', handle: '@r33n_dev', href: 'https://t.me/r33n_dev' },
  { label: 'GitHub', handle: 'r33n99', href: 'https://github.com/r33n99' },
  { label: 'GitLab', handle: 'r33n99', href: 'https://gitlab.com/r33n99' },
]

const currentYear = new Date().getFullYear()

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
