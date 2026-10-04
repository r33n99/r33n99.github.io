<script setup lang="ts">
import { computed, ref } from 'vue'
import PortfolioHeader from '~/components/PortfolioHeader.vue'

const route = useRoute()
const { language } = useLanguage()
const { getBySlug, projects } = useProjects()
const ru = computed(() => language.value === 'ru')
const menuOpen = ref(false)
const slugParam = route.params.slug
const slug = typeof slugParam === 'string' ? slugParam : slugParam?.[0] ?? ''
const found = getBySlug(slug)
if (!found) throw createError({ statusCode: 404, statusMessage: 'Project not found' })
const entry = found
const title = computed(() => ru.value ? entry.titleRu : entry.titleEn)
const period = computed(() => ru.value ? entry.periodRu : entry.periodEn)
const intro = computed(() => ru.value ? entry.introRu : entry.introEn)
const description = computed(() => ru.value ? entry.descriptionRu : entry.descriptionEn)
const images = entry.previewImages?.length ? entry.previewImages : entry.previewImage ? [entry.previewImage] : []
const nextProject = projects[(projects.findIndex(project => project.slug === entry.slug) + 1) % projects.length]!

useHead(() => ({ htmlAttrs: { lang: language.value } }))
useSeoMeta({ title, description })
</script>

<template>
  <main class="project-page">
    <a class="skip-link" href="#project-content">{{ ru ? 'Перейти к проекту' : 'Skip to project' }}</a>
    <PortfolioHeader @menu-change="menuOpen = $event" />
    <article id="project-content" class="page-width" :inert="menuOpen || undefined">
      <div class="project-breadcrumb">
        <NuxtLink to="/#other-projects">← {{ ru ? 'Все проекты' : 'All projects' }}</NuxtLink>
        <span>{{ period }}</span>
      </div>
      <header class="project-intro">
        <p v-if="entry.status === 'in-progress'" class="project-status">{{ ru ? 'В разработке' : 'In development' }}</p>
        <h1>{{ title }}</h1>
        <p class="intro-text">{{ intro }}</p>
        <div v-if="entry.websiteUrl || entry.codeUrl" class="project-actions">
          <a v-if="entry.websiteUrl" :href="entry.websiteUrl" target="_blank" rel="noreferrer" class="solid-link">{{ ru ? (entry.previewLayout === 'mobile' ? 'Открыть приложение' : 'Открыть сайт') : (entry.previewLayout === 'mobile' ? 'Open app' : 'Visit website') }} <span aria-hidden="true">↗</span></a>
          <a v-if="entry.codeUrl" :href="entry.codeUrl" target="_blank" rel="noreferrer" class="text-link">{{ ru ? 'Код проекта' : 'Source code' }} <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <div v-if="images.length" class="project-gallery" :class="{ 'mobile-gallery': entry.previewLayout === 'mobile' }">
        <figure v-for="(image, index) in images" :key="image">
          <img :src="image" :alt="`${title} — ${ru ? 'экран' : 'screen'} ${index + 1}`" :loading="index === 0 ? 'eager' : 'lazy'" :fetchpriority="index === 0 ? 'high' : undefined">
        </figure>
      </div>
      <section class="project-details">
        <div class="project-about"><h2>{{ ru ? 'О проекте' : 'About the project' }}</h2><p>{{ description }}</p></div>
        <div class="project-stack"><h2>{{ ru ? 'Технологии' : 'Technologies' }}</h2><ul><li v-for="tag in entry.tags" :key="tag">{{ tag }}</li></ul></div>
      </section>
      <nav class="project-navigation" :aria-label="ru ? 'Другие проекты' : 'More projects'">
        <NuxtLink to="/#other-projects" class="all-projects">← {{ ru ? 'Ко всем проектам' : 'Back to all projects' }}</NuxtLink>
        <NuxtLink :to="`/projects/${nextProject.slug}`" class="next-project"><span>{{ ru ? 'Следующий проект' : 'Next project' }}</span><strong>{{ ru ? nextProject.titleRu : nextProject.titleEn }} <span aria-hidden="true">→</span></strong></NuxtLink>
      </nav>
    </article>
    <footer class="project-footer" :inert="menuOpen || undefined">
      <div class="page-width"><NuxtLink to="/#contact">{{ ru ? 'Обсудим вашу задачу.' : 'Let’s talk about your project.' }}</NuxtLink><a href="https://t.me/r33n_dev" target="_blank" rel="noreferrer">Telegram ↗</a></div>
    </footer>
  </main>
</template>

<style scoped>
.project-page { --paper: #fff; --ink: #191919; --muted: #646464; --rule: #e4e4e4; --ease: cubic-bezier(.22,1,.36,1); --header-height: 89px; min-height: 100vh; padding-top: var(--header-height); color-scheme: light; background: var(--paper); color: var(--ink); font: 400 17px/1.5 Arial,Helvetica,sans-serif; }
.project-page h1,.project-page h2,.project-page strong { font-family: Arial,Helvetica,sans-serif; font-weight: 500; text-wrap: initial; }
.project-page a { color: inherit; text-decoration: none; }.project-page :focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
.page-width { width: min(100% - 96px,1440px); margin-inline: auto; }
.skip-link { position: absolute; top: -100px; padding: 12px; background: white; z-index: 99; }.skip-link:focus { top: 12px; }#project-content { scroll-margin-top: calc(var(--header-height) + 20px); }
.project-breadcrumb { display: flex; justify-content: space-between; gap: 24px; padding-block: 30px; font-size: 14px; color: var(--muted); }.project-breadcrumb a:hover { color: var(--ink); }.project-breadcrumb>span { font-family: 'JetBrains Mono',monospace; font-size: 12px; }
.project-intro { padding-block: 20px 42px; max-width: 1040px; }.project-status { width: fit-content; margin-bottom: 16px; font-size: 12px; color: var(--muted); padding: 4px 9px; background: #f0f0f0; border-radius: 3px; }
h1 { font-size: clamp(44px,6.5vw,88px); line-height: 1.06; letter-spacing: -.045em; overflow-wrap: anywhere; }
.intro-text { max-width: 60ch; margin-top: 24px; font-size: clamp(18px,2vw,24px); line-height: 1.5; letter-spacing: -.02em; color: #505050; }
.project-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 24px; margin-top: 28px; font-size: 15px; }.solid-link { display: inline-flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 48px; padding: 12px 21px; background: var(--ink); color: white !important; border-radius: 3px; transition: transform .3s var(--ease),background .25s; }.solid-link:hover { background: #3b3b3b; transform: translateY(-3px); }.text-link { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; text-decoration: underline !important; text-underline-offset: 5px; }
.project-gallery { overflow: hidden; background: #f1f1f1; border-radius: 3px; }.project-gallery figure { margin: 0; }.project-gallery img { display: block; width: 100%; height: auto; }.mobile-gallery { display: flex; align-items: start; justify-content: center; gap: 24px; padding: 36px; background: #efeeeb; }.mobile-gallery figure { width: min(28%,300px); }.mobile-gallery img { border-radius: 12px; box-shadow: 0 4px 18px #00000010; }
.project-details { display: grid; grid-template-columns: 1.6fr .8fr; gap: 80px; padding-block: 48px; margin-top: 40px; border-top: 1px solid var(--ink); }.project-details h2 { font-size: 28px; line-height: 1.2; letter-spacing: -.035em; margin-bottom: 22px; }.project-about p { max-width: 68ch; font-size: 18px; line-height: 1.75; color: #505050; }.project-stack ul { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; }.project-stack li { padding: 7px 11px; border: 1px solid var(--rule); border-radius: 3px; font-size: 13px; }
.project-navigation { display: flex; align-items: center; justify-content: space-between; gap: 40px; border-top: 1px solid var(--rule); padding-block: 32px 40px; }.all-projects { font-size: 14px; }.next-project { display: flex; flex-direction: column; align-items: end; gap: 8px; max-width: 60%; text-align: right; }.next-project>span { font-size: 12px; color: var(--muted); }.next-project strong { font-size: 22px; letter-spacing: -.025em; }.project-navigation a:hover strong,.all-projects:hover { text-decoration: underline; text-underline-offset: 5px; }
.project-footer { background: var(--ink); color: white; }.project-footer>div { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-block: 32px; }.project-footer a:first-child { font-size: 28px; letter-spacing: -.035em; }.project-footer a:last-child { font-size: 15px; text-decoration: underline; text-underline-offset: 5px; }
@media(max-width:800px) { .project-page { --header-height: 74px; }.page-width { width: calc(100% - 40px); }.project-intro { padding-block: 8px 30px; }.project-details { gap: 36px; }.mobile-gallery { padding: 20px; gap: 16px; }.project-footer a:first-child { font-size: 24px; } }
@media(max-width:600px) { .project-breadcrumb { padding-block: 24px; font-size: 13px; }.project-breadcrumb>span { font-size: 10px; text-align: right; }h1 { font-size: clamp(38px,10vw,60px); }.intro-text { margin-top: 18px; }.project-actions { margin-top: 22px; font-size: 14px; gap: 16px; }.project-details { grid-template-columns: 1fr; gap: 28px; padding-block: 28px; margin-top: 28px; }.project-details h2 { font-size: 25px; margin-bottom: 16px; }.project-about p { font-size: 16px; line-height: 1.7; }.mobile-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 16px; }.mobile-gallery figure { width: 100%; }.mobile-gallery img { border-radius: 6px; }.project-navigation { align-items: start; flex-direction: column; gap: 24px; padding-block: 24px 32px; }.next-project { align-items: start; max-width: 100%; text-align: left; }.project-footer>div { flex-wrap: wrap; padding-block: 28px; } }
@media(prefers-reduced-motion:reduce) { *,*::before,*::after { transition: none !important; } }
</style>
