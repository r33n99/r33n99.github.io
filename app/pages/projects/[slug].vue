<template>
  <main class="min-h-screen overflow-x-clip">
    <AppHeader />

    <section class="section-shell">
      <div class="section-container py-16 md:py-20 xl:py-24">
        <nav
          aria-label="Breadcrumb"
          class="mb-10 text-sm text-muted-foreground md:mb-12"
        >
          <NuxtLink
            to="/"
            class="transition hover:text-foreground"
          >
            {{ t.home }}
          </NuxtLink>
          <span class="mx-2 text-border">→</span>
          <span>{{ t.projects }}</span>
          <span class="mx-2 text-border">→</span>
          <span class="font-medium text-foreground">{{ title }}</span>
        </nav>

        <article class="border border-border bg-background p-6 md:p-10 xl:p-12">
          <p class="text-sm font-semibold text-muted-foreground">{{ entry.index }}</p>
          <h1 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl xl:text-5xl">
            {{ title }}
          </h1>
          <p class="mt-3 text-sm text-muted-foreground md:text-base">
            {{ period }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tag in entry.tags"
              :key="tag"
              class="border border-border bg-muted/40 px-3 py-1 text-sm text-muted-foreground"
            >
              {{ tag }}
            </span>
          </div>
          <p class="mt-8 max-w-[72ch] text-base leading-[1.65] text-muted-foreground md:text-lg">
            {{ description }}
          </p>
          <div class="mt-8 overflow-hidden border border-border bg-muted/20">
            <img
              :src="entry.previewImage"
              :alt="title"
              class="h-auto w-full object-cover"
              loading="lazy"
            >
          </div>
          <a
            :href="entry.websiteUrl"
            target="_blank"
            rel="noreferrer"
            class="mt-8 inline-flex border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 md:text-base"
          >
            {{ t.openSite }}
          </a>
        </article>
      </div>
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

const copy: Record<Language, { home: string; projects: string; openSite: string; notFound: string }> = {
  ru: {
    home: 'Главная',
    projects: 'Проекты',
    openSite: 'Открыть сайт',
    notFound: 'Проект не найден',
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    openSite: 'Open website',
    notFound: 'Project not found',
  },
}

const found = getBySlug(slug)

if (!found) {
  throw createError({ statusCode: 404, statusMessage: copy[language.value].notFound })
}

const entry = found

const t = computed(() => copy[language.value])

const title = computed(() =>
  language.value === 'ru' ? entry.titleRu : entry.titleEn,
)

const period = computed(() =>
  language.value === 'ru' ? entry.periodRu : entry.periodEn,
)

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
