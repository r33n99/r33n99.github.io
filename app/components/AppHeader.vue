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
  <header
    class="sticky top-0 z-50 w-full border-b-2 border-border bg-background"
  >
    <div
      class="flex items-center justify-between gap-8 px-[var(--pad-x)] py-4 lg:py-5"
    >
      <NuxtLink
        to="/"
        class="text-[17px] font-bold leading-none tracking-[-0.01em] lg:text-xl"
        @click="closeMenu"
      >
        reen<span class="text-primary">.</span>cv
      </NuxtLink>

      <nav class="hidden items-center gap-7 text-sm font-medium leading-none text-muted-foreground lg:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="transition-colors duration-150 ease-out hover:text-foreground"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <ThemeToggle />
        <LanguageToggle />
        <a href="/#contact" class="btn btn-accent text-sm">{{ t.contact }}</a>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <ThemeToggle compact />
        <button
          type="button"
          class="grid size-11 cursor-pointer place-items-center bg-primary text-lg font-semibold leading-none text-primary-foreground"
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
      class="border-t-2 border-border bg-background px-[var(--pad-x)] pb-6 pt-5 lg:hidden"
    >
      <p class="kicker">{{ t.menuTitle }}</p>
      <nav class="mt-4 flex flex-col border-t-2 border-border">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="flex min-h-11 items-center border-b-2 border-border py-3 text-base font-semibold transition-colors duration-150 ease-out hover:text-accent-quiet"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="/#contact"
          class="flex min-h-11 items-center border-b-2 border-border py-3 text-base font-semibold text-accent-quiet"
          @click="closeMenu"
        >
          {{ t.contact }}
        </a>
      </nav>
      <div class="mt-5">
        <LanguageToggle />
      </div>
    </div>
  </header>
</template>
