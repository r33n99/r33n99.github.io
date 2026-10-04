<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import PortfolioHeader from '~/components/PortfolioHeader.vue'

const { projects } = useProjects()
const { language } = useLanguage()
const ru = computed(() => language.value === 'ru')
const selectedSlugs = ['vdvoem', 'smenaos', 'dli-deluxe-limo-italy', 'eventner', 'inspiritaly', 'travel-2025']
const selected = projects.filter(p => selectedSlugs.includes(p.slug))
const otherProjects = projects.filter(p => !selectedSlugs.includes(p.slug))
const root = ref<HTMLElement>()
const menuOpen = ref(false)
const reduced = ref(false)
const name = computed(() => ru.value ? ['Ринат', 'Ражапов'] : ['Rinat', 'Razhapov'])
const skillGroups = [
  { label: ['Frontend', 'Frontend'], description: ['Продуктовые интерфейсы, SSR и типизация.', 'Product interfaces, SSR and type safety.'], items: ['TypeScript', 'Vue 3 / Nuxt 4', 'React 19 / Next.js', 'Pinia', 'TanStack Query', 'Tailwind CSS', 'shadcn/ui'] },
  { label: ['Мобильные приложения', 'Mobile apps'], description: ['Веб-интерфейс и нативные возможности Android.', 'Web interfaces and native Android capabilities.'], items: ['Capacitor 8', 'Android', 'Geolocation', 'Local Notifications', 'Mobile-first UI'] },
  { label: ['Данные и интеграции', 'Data and integrations'], description: ['Авторизация, изоляция данных и серверные API.', 'Authentication, data isolation and server APIs.'], items: ['Node.js', 'Supabase Auth', 'PostgreSQL', 'RLS / RPC', 'Realtime', 'Storage', 'REST API', 'Gemini / Search Grounding'] },
  { label: ['Качество и доставка', 'Quality and delivery'], description: ['Валидация, проверки и стабильные релизы.', 'Validation, verification and reliable releases.'], items: ['Zod', 'React Hook Form', 'Vitest', 'Playwright', 'CI/CD', 'Core Web Vitals'] },
]
const jobs = [
  { company: 'TrustyOne', date: ['Апрель 2024 — Февраль 2026', 'April 2024 — February 2026'], description: ['Travel и EventTech. Архитектура с нуля, бронирования, API-контракты, тестирование и CI/CD.', 'Travel and EventTech. Architecture, booking flows, API contracts, testing and CI/CD.'] },
  { company: 'Paleo Studio', date: ['Ноябрь 2022 — Январь 2024', 'November 2022 — January 2024'], description: ['Логистические платформы, кабинеты, динамические таблицы и графики на Vue.', 'Logistics platforms, accounts, dynamic tables and charts with Vue.'] },
  { company: 'Freelance', date: ['Июнь 2021 — Август 2022', 'June 2021 — August 2022'], description: ['Клиентские приложения и лендинги на React и Next.js. SSR, REST API, формы и валидация.', 'Client apps and landing pages with React and Next.js. SSR, REST APIs, forms and validation.'] },
]
let observer: IntersectionObserver | undefined
let dispose = () => {}
function moveSurface(event: PointerEvent) {
  if (reduced.value || event.pointerType !== 'mouse') return
  const el = event.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - .5
  const y = (event.clientY - rect.top) / rect.height - .5
  el.style.setProperty('--rx', `${-y * 4}deg`)
  el.style.setProperty('--ry', `${x * 4}deg`)
  el.style.setProperty('--image-x', `${x * 6}px`)
  el.style.setProperty('--image-y', `${y * 6}px`)
}
function resetSurface(event: PointerEvent) {
  const el = event.currentTarget as HTMLElement
  for (const key of ['--rx', '--ry']) el.style.setProperty(key, '0deg')
  for (const key of ['--image-x', '--image-y']) el.style.setProperty(key, '0px')
}
onMounted(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  const updatePreference = () => { reduced.value = media.matches }
  updatePreference()
  media.addEventListener('change', updatePreference)
  // Content stays visible. The observer only starts a brief image animation.
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      if (!reduced.value) entry.target.classList.add('image-arrived')
      observer?.unobserve(entry.target)
    }
  }, { threshold: .08 })
  root.value?.querySelectorAll('.project-preview').forEach(el => observer!.observe(el))
  dispose = () => { media.removeEventListener('change', updatePreference) }
})
onBeforeUnmount(() => { observer?.disconnect(); dispose() })
useSeoMeta({
  title: computed(() => ru.value ? 'Ринат Ражапов — веб, мобильные приложения и SaaS' : 'Rinat Razhapov — web, mobile apps and SaaS'),
  description: computed(() => ru.value ? 'Разрабатываю веб-приложения, мобильные приложения и SaaS-сервисы на Vue, React и TypeScript. 4+ года опыта. Удалённо / гибрид либо офис в городе Бишкек.' : 'Web applications, mobile apps and SaaS products with Vue, React and TypeScript. 4+ years of experience. Remote / hybrid or office-based in Bishkek.'),
})
</script>

<template>
  <main ref="root" class="portfolio" :class="{ 'reduce-motion': reduced, 'menu-open': menuOpen }">
    <a class="skip-link" href="#projects">{{ ru ? 'Перейти к проектам' : 'Skip to projects' }}</a>
    <PortfolioHeader @menu-change="menuOpen = $event" />

    <section class="hero page-width" :inert="menuOpen || undefined">
      <div class="hero-copy">
        <p class="eyebrow">Frontend developer · {{ ru ? 'Бишкек' : 'Bishkek' }}</p>
        <h1 :key="language" :aria-label="name.join(' ')">
          <span v-for="(line, row) in name" :key="line" class="name-line" aria-hidden="true"><span v-for="(letter, index) in line" :key="index" class="letter" :style="{ '--delay': `${row * 120 + index * 35}ms` }">{{ letter }}</span></span>
        </h1>
        <p class="hero-description">{{ ru ? 'Vue, React и TypeScript. Разрабатываю веб-приложения, мобильные приложения и SaaS-сервисы.' : 'Vue, React and TypeScript. I build web applications, mobile apps and SaaS products.' }}</p>
        <div class="hero-actions">
          <a href="https://t.me/r33n_dev" target="_blank" rel="noreferrer" class="solid-link">{{ ru ? 'Написать в Telegram' : 'Get in touch on Telegram' }}</a>
          <a :href="ru ? '/cv/cv-ru.pdf' : '/cv/cv-en.pdf'" download class="plain-link">{{ ru ? 'Скачать резюме' : 'Download résumé' }} <span>PDF</span></a>
        </div>
        <p class="hero-facts">{{ ru ? '4+ года опыта · Удалённо / гибрид либо офис в городе Бишкек' : '4+ years of experience · Remote / hybrid or office-based in Bishkek' }}</p>
      </div>
      <figure class="portrait" @pointermove="moveSurface" @pointerleave="resetSurface">
        <div class="portrait-crop"><img src="/images/avatar.png" :alt="ru ? 'Мой портрет' : 'My portrait'" width="1086" height="1448" fetchpriority="high"></div>
      </figure>
    </section>

    <section id="projects" class="work page-width" :inert="menuOpen || undefined">
      <div class="section-heading"><h2>{{ ru ? 'Избранные проекты' : 'Selected projects' }}</h2><p>{{ ru ? 'Мобильные приложения · SaaS · Web' : 'Mobile apps · SaaS · Web' }}</p></div>
      <div class="project-grid">
        <article v-for="project in selected" :key="project.slug" class="project">
          <a class="project-preview" :class="{ 'has-mobile-screens': project.previewLayout === 'mobile' }" :href="project.websiteUrl || `/projects/${project.slug}`" :target="project.websiteUrl ? '_blank' : undefined" :rel="project.websiteUrl ? 'noreferrer' : undefined" :aria-label="`${ru ? 'Открыть' : 'Visit'} ${ru ? project.titleRu : project.titleEn}`" @pointermove="moveSurface" @pointerleave="resetSurface">
            <div v-if="project.previewLayout === 'mobile'" class="mobile-preview"><img v-for="(shot, i) in project.previewImages?.slice(0, 2)" :key="shot" :src="shot" :alt="`${ru ? project.titleRu : project.titleEn} — ${i === 0 ? (ru ? 'Главная' : 'Home') : (ru ? 'Напоминания' : 'Reminders')}`" loading="lazy"></div>
            <img v-else :src="project.previewImage" :alt="ru ? project.titleRu : project.titleEn" loading="lazy">
          </a>
          <div class="project-heading"><h3><a :href="project.websiteUrl || `/projects/${project.slug}`" :target="project.websiteUrl ? '_blank' : undefined" :rel="project.websiteUrl ? 'noreferrer' : undefined">{{ ru ? project.titleRu : project.titleEn }}</a></h3><span v-if="project.status === 'in-progress'" class="project-status">{{ ru ? 'В разработке' : 'In development' }}</span><span class="project-period">{{ ru ? project.periodRu : project.periodEn }}</span></div>
          <p class="project-description">{{ ru ? project.introRu : project.introEn }}</p>
          <div class="project-meta"><span>{{ project.tags.join(' · ') }}</span></div>
          <div class="project-actions"><a v-if="project.websiteUrl" class="project-open" :href="project.websiteUrl" target="_blank" rel="noreferrer">{{ ru ? (project.previewLayout === 'mobile' ? 'Открыть приложение' : 'Открыть сайт') : (project.previewLayout === 'mobile' ? 'Open app' : 'Visit website') }}</a><NuxtLink v-else class="project-open" :to="`/projects/${project.slug}`">{{ ru ? 'О проекте' : 'About the project' }}</NuxtLink><a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noreferrer">{{ ru ? 'Код проекта' : 'Source code' }}</a></div>
        </article>
      </div>
    </section>
    <section id="other-projects" class="more-work page-width" :inert="menuOpen || undefined">
        <div class="section-heading"><h2>{{ ru ? 'Другие работы' : 'More work' }}</h2><p>{{ ru ? 'Пет-проекты, сервисы и лендинги' : 'Side projects, services and landing pages' }}</p></div>
        <div class="other-projects"><NuxtLink v-for="project in otherProjects" :key="project.slug" :to="`/projects/${project.slug}`"><span>{{ ru ? project.titleRu : project.titleEn }}</span><span class="other-category">{{ project.tags.slice(0, 2).join(' / ') }}</span></NuxtLink></div>
    </section>

    <section id="experience" class="experience page-width" :inert="menuOpen || undefined">
      <div class="section-heading"><h2>{{ ru ? 'Опыт работы' : 'Experience' }}</h2><a :href="ru ? '/cv/cv-ru.pdf' : '/cv/cv-en.pdf'" download class="plain-link">{{ ru ? 'Полное резюме' : 'Full résumé' }} <span>PDF</span></a></div>
      <article v-for="job in jobs" :key="job.company" class="job">
        <div><h3>{{ job.company }}</h3><p class="job-role">Frontend Developer</p></div>
        <p class="job-description">{{ job.description[ru ? 0 : 1] }}</p>
        <p class="job-date">{{ job.date[ru ? 0 : 1] }}</p>
      </article>
    </section>
    <section id="stack" class="skills page-width" :inert="menuOpen || undefined">
      <div class="section-heading"><h2>{{ ru ? 'Технологии и инструменты' : 'Technologies and tools' }}</h2></div>
      <div class="skill-grid"><article v-for="group in skillGroups" :key="group.label[0]"><h3>{{ group.label[ru ? 0 : 1] }}</h3><p>{{ group.description[ru ? 0 : 1] }}</p><ul><li v-for="item in group.items" :key="item">{{ item }}</li></ul></article></div>
    </section>

    <footer id="contact" class="contact" :inert="menuOpen || undefined">
      <div class="page-width contact-layout">
        <div><p class="eyebrow">{{ ru ? 'Контакт' : 'Contact' }}</p><h2>{{ ru ? 'Обсудим вашу задачу.' : 'Let’s talk about your project.' }}</h2><a href="mailto:rinni499@gmail.com" class="contact-email">rinni499@gmail.com</a></div>
        <div class="contact-links"><a href="https://t.me/r33n_dev" target="_blank" rel="noreferrer">Telegram</a><a href="https://github.com/r33n99" target="_blank" rel="noreferrer">GitHub</a><a href="https://gitlab.com/r33n99" target="_blank" rel="noreferrer">GitLab</a><a :href="ru ? '/cv/cv-ru.pdf' : '/cv/cv-en.pdf'" download>{{ ru ? 'Резюме / PDF' : 'Résumé / PDF' }}</a></div>
      </div>
      <div class="page-width colophon"><span>r33n</span><span>{{ ru ? 'Удалённо / гибрид либо офис в городе Бишкек' : 'Remote / hybrid or office-based in Bishkek' }}</span><a href="#">{{ ru ? 'Наверх' : 'Back to top' }}</a></div>
    </footer>
  </main>
</template>

<style scoped>
.portfolio { --paper: #fff; --ink: #191919; --muted: #646464; --rule: #e4e4e4; --ease: cubic-bezier(.22,1,.36,1); color-scheme: light; background: var(--paper); color: var(--ink); font: 400 17px/1.5 Arial, Helvetica, sans-serif; }
.portfolio h1,.portfolio h2,.portfolio h3 { font-family: Arial, Helvetica, sans-serif; font-weight: 500; text-wrap: initial; }
.portfolio a { color: inherit; text-decoration: none; }
.portfolio button { font: inherit; cursor: pointer; }
.portfolio :focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
.page-width { width: min(100% - 96px,1440px); margin-inline: auto; }
.skip-link { position: absolute; top: -100px; padding: 12px; background: white; z-index: 99; }.skip-link:focus { top: 12px; }
.portfolio { --header-height: 89px; padding-top: var(--header-height); }
.portfolio section[id], .portfolio footer[id] { scroll-margin-top: calc(var(--header-height) + 20px); }
.plain-link,.project-meta a,.contact-links a { text-decoration: underline !important; text-decoration-color: transparent !important; text-underline-offset: 5px; transition: text-decoration-color .25s; }
.plain-link:hover,.project-meta a:hover,.contact-links a:hover { text-decoration-color: currentColor !important; }
.hero { display: grid; grid-template-columns: 1fr 340px; align-items: center; gap: 100px; padding-block: 58px 64px; }
.eyebrow { font-family: 'JetBrains Mono',monospace; font-size: 13px; color: var(--muted); }
h1 { margin-block: 24px 28px !important; font-size: clamp(72px,8.5vw,124px); line-height: .98; letter-spacing: -.055em; }
.name-line { display: block; overflow: clip; padding-bottom: 8px; }.letter { display: inline-block; animation: letter-in .8s var(--ease) var(--delay) backwards; }
.hero-description { max-width: 48ch; font-size: 21px; line-height: 1.5; letter-spacing: -.02em; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; margin-top: 28px; font-size: 15px; }
.solid-link { display: inline-flex; padding: 14px 21px; background: var(--ink); color: white !important; border-radius: 3px; transition: transform .3s var(--ease),background .25s; }.solid-link:hover { background: #3b3b3b; transform: translateY(-3px); }
.plain-link span { font-family: 'JetBrains Mono',monospace; font-size: 11px; margin-left: 6px; color: var(--muted); }
.hero-facts { margin-top: 24px; color: var(--muted); font-size: 14px; }
.portrait { margin: 0; transform: perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); transition: transform .6s var(--ease); }
.portrait-crop { aspect-ratio: .82; overflow: hidden; border-radius: 3px; }.portrait img { display: block; width: 100%; height: 100%; object-fit: cover; transform: scale(1.02) translate(var(--image-x,0px),var(--image-y,0px)); transition: transform .7s var(--ease); }
.section-heading { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px 30px; margin-bottom: 30px; }.section-heading h2 { font-size: 34px; line-height: 1.15; letter-spacing: -.04em; }.section-heading>p { font-size: 13px; color: var(--muted); }
.work { padding-block: 38px 36px; border-top: 1px solid var(--ink); }
.project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px 32px; }.project { min-width: 0; }
.project-preview { display: block; position: relative; overflow: hidden; aspect-ratio: 1.92; background: #f1f1f1; border-radius: 3px; transform: perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); transition: transform .65s var(--ease); }
.project-preview img { display: block; width: 100%; height: 100%; object-fit: contain; transition: transform .8s var(--ease); }.project-preview:hover img { transform: scale(1.025) translate(var(--image-x,0px),var(--image-y,0px)); }.image-arrived img { animation: image-open .85s var(--ease); }
.project-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; margin-top: 16px; font-size: 13px; }
.project-actions a { display: inline-flex; align-items: center; min-height: 44px; }
.project-actions .project-open { padding: 0 16px; background: var(--ink); color: white; border-radius: 3px; transition: background .25s; }
.project-actions .project-open:hover { background: #444; }
.project-actions>a:not(.project-open) { text-decoration: underline; text-underline-offset: 4px; }
.project-status { font-size: 11px; color: #555; padding: 3px 8px; background: #f0f0f0; border-radius: 3px; margin-left: auto; }
.mobile-preview { display: flex; justify-content: center; align-items: center; gap: 24px; height: 100%; padding: 20px; background: #efeeeb; }
.mobile-preview img { width: auto; height: 100%; aspect-ratio: 390 / 844; border-radius: 10px; box-shadow: 0 4px 18px #00000010; }
.skills { padding-block: 38px 42px; border-top: 1px solid var(--ink); }
.skill-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 48px; }
.skill-grid h3 { font-size: 23px; letter-spacing: -.02em; }
.skill-grid p { margin-top: 8px; color: var(--muted); font-size: 15px; }
.skill-grid ul { display: flex; flex-wrap: wrap; gap: 8px 18px; margin-top: 16px; list-style: none; padding: 0; }
.skill-grid li { font-size: 14px; }
@media(max-width:600px) { .skills { padding-block: 28px; }.skill-grid { grid-template-columns: 1fr; gap: 28px; }.mobile-preview { padding: 12px; gap: 12px; }.mobile-preview img { border-radius: 6px; } }
.project-heading { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px 20px; margin-top: 19px; }.project-heading h3 { font-size: 25px; line-height: 1.2; letter-spacing: -.025em; }.project-heading h3 a:hover { text-decoration: underline; text-underline-offset: 5px; }.project-period { flex-shrink: 0; font-family: 'JetBrains Mono',monospace; font-size: 11px; color: var(--muted); }
.project-description { margin-top: 10px; font-size: 16px; color: #505050; }.project-meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px 20px; margin-top: 12px; color: var(--muted); font-size: 12px; }
.more-work { padding-block: 38px 36px; border-top: 1px solid var(--ink); }
.other-projects { display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px; padding-bottom: 12px; }.other-projects a { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 6px 20px; padding-block: 14px; border-top: 1px solid var(--rule); font-size: 15px; }.other-projects a:hover>span:first-child { text-decoration: underline; text-underline-offset: 4px; }.other-category { font-size: 11px; color: var(--muted); }
.experience { padding-block: 38px 42px; border-top: 1px solid var(--ink); }.experience .plain-link { font-size: 14px; }
.job { display: grid; grid-template-columns: .8fr 1.4fr .75fr; gap: 40px; padding-block: 24px; border-top: 1px solid var(--rule); }.job h3 { font-size: 24px; letter-spacing: -.03em; }.job-role { font-size: 12px; color: var(--muted); margin-top: 4px; }.job-description { font-size: 16px; color: #505050; }.job-date { font-family: 'JetBrains Mono',monospace; font-size: 11px; line-height: 1.8; color: var(--muted); text-align: right; }
.stack { display: grid; grid-template-columns: .8fr 2.15fr; gap: 40px; border-top: 1px solid var(--rule); padding-top: 24px; }.stack h3 { font-size: 24px; letter-spacing: -.03em; }.stack p { font-size: 16px; color: #505050; }
.contact { background: #191919; color: #fff; }.contact-layout { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; padding-block: 46px 40px; }.contact .eyebrow { color: #b6b6b6; }.contact h2 { font-size: clamp(30px,4vw,52px); line-height: 1.15; letter-spacing: -.04em; margin-block: 16px 20px; }.contact-email { font-size: clamp(20px,2.3vw,30px); letter-spacing: -.02em; text-decoration: underline !important; text-underline-offset: 6px; text-decoration-thickness: 1px !important; }.contact-links { display: flex; flex-direction: column; align-items: start; gap: 12px; font-size: 15px; }.colophon { border-top: 1px solid #444; display: flex; justify-content: space-between; gap: 20px; padding-block: 18px; font-size: 12px; color: #b6b6b6; }
@keyframes letter-in { from { transform: translateY(110%) rotate(5deg); } to { transform: none; } }
@keyframes image-open { from { clip-path: inset(42% 0 42%); transform: scale(1.045); } to { clip-path: inset(0); transform: scale(1); } }
@media(max-width:1100px) { .hero { grid-template-columns: 1fr 270px; gap: 50px; }.job { grid-template-columns: .8fr 1.6fr; gap: 12px 30px; }.job-date { grid-column: 2; text-align: left; }.stack { grid-template-columns: .8fr 1.6fr; gap: 30px; } }
@media(max-width:800px) { .page-width { width: calc(100% - 40px); }.portfolio { --header-height: 74px; }.hero { grid-template-columns: 1fr 180px; gap: 28px; padding-block: 36px 42px; }h1 { font-size: clamp(56px,9.5vw,84px); }.hero-description { font-size: 18px; }.hero-actions { gap: 18px; }.project-grid { gap: 32px 24px; }.section-heading h2 { font-size: 28px; }.project-heading h3 { font-size: 22px; }.project-description { font-size: 15px; }.project-meta>span { width: 100%; }.job { gap: 14px 24px; }.job-description { font-size: 15px; }.contact-layout { gap: 32px; }.other-projects { grid-template-columns: 1fr; } }
@media(max-width:600px) { .hero { grid-template-columns: 1fr; gap: 26px; }.hero-copy { position: relative; }h1 { font-size: clamp(66px,15vw,90px); }.hero-description { font-size: 18px; max-width: 35ch; }.portrait { width: 100%; }.portrait-crop { width: 100%; aspect-ratio: 1.14; }.portrait img { object-position: 50% 44%; }.hero-facts { font-size: 13px; margin-top: 20px; }.solid-link { padding: 12px 17px; }.hero-actions { gap: 16px; font-size: 14px; }.work,.more-work,.experience { padding-block: 28px; }.section-heading { margin-bottom: 24px; }.project-grid { grid-template-columns: 1fr; gap: 30px; }.project-heading { margin-top: 15px; }.project-preview { aspect-ratio: 1.8; }.project-meta>span { width: auto; }.job { grid-template-columns: 1fr; gap: 12px; padding-block: 22px; }.job-date { grid-column: 1; }.stack { grid-template-columns: 1fr; gap: 14px; }.contact-layout { grid-template-columns: 1fr; gap: 30px; padding-block: 32px; }.contact-links { flex-direction: row; flex-wrap: wrap; gap: 14px 24px; }.colophon { flex-wrap: wrap; gap: 10px 20px; font-size: 11px; }.colophon>span:nth-child(2) { display: none; } }
.reduce-motion *,.reduce-motion *::before,.reduce-motion *::after { animation: none !important; transition: none !important; }
@media(prefers-reduced-motion:reduce) { .portfolio *,.portfolio *::before,.portfolio *::after { animation: none !important; transition: none !important; } }
</style>
