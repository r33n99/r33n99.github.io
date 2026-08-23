<template>
  <main class="min-h-screen overflow-x-clip">
    <AppHeader />

    <section class="section-pad">
      <nav aria-label="Breadcrumb" class="text-sm text-muted-foreground">
        <NuxtLink to="/" class="transition-colors duration-150 ease-out hover:text-foreground">
          {{ t.home }}
        </NuxtLink>
        <span class="mx-2 text-border" aria-hidden="true">→</span>
        <NuxtLink to="/#projects" class="transition-colors duration-150 ease-out hover:text-foreground">
          {{ t.projects }}
        </NuxtLink>
        <span class="mx-2 text-border" aria-hidden="true">→</span>
        <span class="font-medium text-foreground">{{ title }}</span>
      </nav>

      <article class="mt-10">
        <div class="flex items-center justify-between">
          <span class="text-[13px] font-semibold leading-none tracking-[0.1em] text-accent-quiet nums">
            {{ entry.index }}
          </span>
          <span class="text-[13px] font-medium leading-none text-muted-foreground nums">{{ period }}</span>
        </div>

        <h1 class="mt-5 text-section font-semibold">{{ title }}</h1>

        <ul class="mt-7 flex flex-wrap gap-2">
          <li v-for="tag in entry.tags" :key="tag" class="tag normal-case tracking-[0.04em] text-foreground">
            {{ tag }}
          </li>
        </ul>

        <p class="mt-9 max-w-[72ch] text-[19px] leading-[1.5] text-muted-foreground">
          {{ description }}
        </p>

        <div v-if="entry.previewImage" class="mt-10 border-2 border-border bg-surface">
          <img
            :src="entry.previewImage"
            :alt="title"
            class="h-auto w-full object-cover grayscale"
            loading="lazy"
          >
        </div>

        <div v-if="entry.websiteUrl || entry.codeUrl" class="mt-10 flex flex-col gap-3 sm:flex-row">
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
            class="btn btn-outline"
          >
            {{ t.code }}
          </a>
        </div>

        <div class="mt-14">
          <div class="h-0.5 w-full bg-border" />
          <NuxtLink
            to="/#projects"
            class="flex min-h-11 items-center gap-2 py-5 text-lg font-semibold transition-colors duration-150 ease-out hover:text-accent-quiet"
          >
            <span aria-hidden="true" class="text-primary">←</span>
            {{ t.back }}
          </NuxtLink>
        </div>
      </article>
    </section>
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
