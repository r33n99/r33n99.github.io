<template>
  <main class="halftone relative min-h-screen overflow-x-clip">
    <AppHeader />

    <RevealOnScroll as="section" class="section-pad">
      <nav aria-label="Breadcrumb" class="font-mono text-[13px] text-dim">
        <NuxtLink to="/" class="transition-colors duration-[var(--dur-hover)] ease-[var(--ease-comic)] hover:text-accent-text">
          {{ t.home }}
        </NuxtLink>
        <span class="mx-2" aria-hidden="true">→</span>
        <NuxtLink to="/#projects" class="transition-colors duration-[var(--dur-hover)] ease-[var(--ease-comic)] hover:text-accent-text">
          {{ t.projects }}
        </NuxtLink>
        <span class="mx-2" aria-hidden="true">→</span>
        <span class="text-ink">{{ title }}</span>
      </nav>

      <article class="rise panel panel-blob mt-8 max-w-[1920px] px-8 py-8 sm:px-11 sm:py-10">
        <div class="flex items-center justify-between gap-4">
          <span class="chip-num size-12 text-base">{{ entry.index }}</span>
          <span class="font-mono text-sm leading-none text-dim">{{ period }}</span>
        </div>

        <h1 class="mt-5 font-hand text-heading">{{ title }}</h1>

        <ul class="mt-6 flex flex-wrap gap-2.5">
          <li v-for="tag in entry.tags" :key="tag" class="tag tag-quiet">{{ tag }}</li>
        </ul>

        <p class="mt-7 max-w-[62ch] text-lead text-dim">{{ description }}</p>

        <div v-if="entry.previewImage" class="mt-8 overflow-hidden rounded-2xl border-3 border-ink">
          <img :src="entry.previewImage" :alt="title" class="h-auto w-full object-cover" loading="lazy">
        </div>

        <div v-if="entry.websiteUrl || entry.codeUrl" class="mt-8 flex flex-wrap gap-3.5">
          <a
            v-if="entry.websiteUrl"
            :href="entry.websiteUrl"
            target="_blank"
            rel="noreferrer"
            class="btn btn-accent"
          >
            {{ t.openSite }}
          </a>
          <a
            v-if="entry.codeUrl"
            :href="entry.codeUrl"
            target="_blank"
            rel="noreferrer"
            class="btn btn-paper"
          >
            {{ t.code }}
          </a>
        </div>
      </article>

      <NuxtLink to="/#projects" class="btn btn-paper mt-8">
        <span aria-hidden="true">←</span>
        {{ t.back }}
      </NuxtLink>
    </RevealOnScroll>
  </main>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'nuxt/app'

type Language = 'ru' | 'en'

const route = useRoute()
const { language } = useLanguage()
const { getBySlug } = useProjects()

const slugParam = route.params.slug
const slug = typeof slugParam === 'string' ? slugParam : slugParam?.[0] ?? ''

const copy: Record<
  Language,
  { home: string; projects: string; openSite: string; notFound: string; code: string; back: string }
> = {
  ru: {
    home: 'Главная',
    projects: 'Проекты',
    openSite: 'Открыть сайт',
    notFound: 'Проект не найден',
    code: 'Код',
    back: 'Ко всем проектам',
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    openSite: 'Open website',
    notFound: 'Project not found',
    code: 'Code',
    back: 'Back to all projects',
  },
}

const found = getBySlug(slug)

if (!found) {
  throw createError({ statusCode: 404, statusMessage: copy[language.value].notFound })
}

const entry = found

const t = computed(() => copy[language.value])

const title = computed(() => (language.value === 'ru' ? entry.titleRu : entry.titleEn))

const period = computed(() => (language.value === 'ru' ? entry.periodRu : entry.periodEn))

const description = computed(() =>
  language.value === 'ru' ? entry.descriptionRu : entry.descriptionEn,
)

useHead(() => ({
  htmlAttrs: {
    lang: language.value,
  },
}))

useSeoMeta({
  title: computed(() => title.value),
  description: computed(() => description.value),
})
</script>
