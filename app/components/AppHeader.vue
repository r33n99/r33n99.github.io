<script setup lang="ts">
interface HeaderText {
  about: string
  experience: string
  projects: string
  landings: string
  stack: string
  contact: string
  menuTitle: string
  menu: string
  close: string
}

const { language } = useLanguage()
const isMenuOpen = ref(false)

const texts: Record<'ru' | 'en', HeaderText> = {
  ru: {
    about: 'Обо мне',
    experience: 'Опыт',
    projects: 'Проекты',
    landings: 'Лендинги',
    stack: 'Навыки',
    contact: 'Связаться',
    menuTitle: 'Меню',
    menu: 'Открыть меню',
    close: 'Закрыть меню',
  },
  en: {
    about: 'About',
    experience: 'Experience',
    projects: 'Work',
    landings: 'Landings',
    stack: 'Skills',
    contact: 'Get in touch',
    menuTitle: 'Menu',
    menu: 'Open menu',
    close: 'Close menu',
  },
}

const t = computed(() => texts[language.value])

const links = computed(() => [
  { href: '/#about', label: t.value.about },
  { href: '/#experience', label: t.value.experience },
  { href: '/#projects', label: t.value.projects },
  { href: '/#landings', label: t.value.landings },
  { href: '/#stack', label: t.value.stack },
])

function closeMenu(): void {
  isMenuOpen.value = false
}

watch(isMenuOpen, (open) => {
  if (import.meta.client) {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.documentElement.style.overflow = ''
  }
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b-3 border-ink bg-bg">
    <div class="flex items-center justify-between gap-7 px-[var(--pad-x)] py-3.5 lg:py-4">
      <NuxtLink to="/" class="flex flex-col gap-[3px]" @click="closeMenu">
        <span class="font-hand text-[28px] font-bold leading-none lg:text-[34px]">
          reen<span class="text-accent">.</span>cv
        </span>
        <!-- Motion B: подчёркивание дорисовывается слева направо при загрузке -->
        <span class="ink-draw h-1 rounded bg-accent" aria-hidden="true" />
      </NuxtLink>

      <nav class="hidden items-center gap-1.5 font-body text-[19px] leading-none lg:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="rounded-xl px-3 py-2 text-ink transition-[background-color,transform,color] duration-[var(--dur-hover)] ease-[var(--ease-comic)] hover:rotate-[-1.5deg] hover:bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-2.5 lg:flex">
        <ThemeToggle />
        <LanguageToggle />
        <a href="/#contact" class="btn btn-accent text-[22px]">{{ t.contact }}</a>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <ThemeToggle compact />
        <button
          type="button"
          class="grid size-11 cursor-pointer place-items-center rounded-[14px] border-3 border-ink bg-accent font-hand text-[22px] font-bold leading-none text-on-accent"
          :aria-label="isMenuOpen ? t.close : t.menu"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span aria-hidden="true">{{ isMenuOpen ? '✕' : '≡' }}</span>
        </button>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      id="mobile-menu"
      class="border-t-3 border-ink bg-bg px-[var(--pad-x)] pb-6 pt-5 lg:hidden"
    >
      <p class="label">{{ t.menuTitle }}</p>
      <nav class="mt-4 flex flex-col gap-2.5">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="panel panel-blob lift flex min-h-11 items-center px-5 py-3 font-hand text-2xl font-bold"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="/#contact"
          class="btn btn-accent mt-1 justify-start"
          @click="closeMenu"
        >
          {{ t.contact }}
        </a>
      </nav>
      <!-- В колонке flex тянул переключатель на всю ширину — прижимаем к контенту и центрируем -->
      <div class="mt-5 flex justify-center">
        <LanguageToggle />
      </div>
    </div>
  </header>
</template>
