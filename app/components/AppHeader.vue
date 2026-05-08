<script setup lang="ts">
interface HeaderText {
  name: string
  about: string
  experience: string
  projects: string
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
    name: 'Ринат Ражапов',
    about: 'Обо мне',
    experience: 'Опыт',
    projects: 'Проекты',
    stack: 'Навыки',
    contact: 'Связаться',
    menuTitle: 'Меню',
    menu: 'Открыть меню',
    close: 'Закрыть меню',
  },
  en: {
    name: 'Rinat Razhapov',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Skills',
    contact: 'Contact',
    menuTitle: 'Menu',
    menu: 'Open menu',
    close: 'Close menu',
  },
}

const t = computed(() => texts[language.value])

function closeMenu(): void {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
    <div class="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 border-x border-border px-4 py-3 md:px-5">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-3 text-sm font-semibold tracking-tight" @click="closeMenu">
        <span class="truncate">reen<span class="text-red-500">.</span>cv</span>
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm text-muted-foreground lg:flex xl:gap-10">
        <a href="#about" class="header-nav-link">{{ t.about }}</a>
        <a href="#experience" class="header-nav-link">{{ t.experience }}</a>
        <a href="#projects" class="header-nav-link">{{ t.projects }}</a>
        <a href="#stack" class="header-nav-link">{{ t.stack }}</a>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <ThemeToggle />
        <LanguageToggle />
        <a
          href="#contact"
          class="border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-primary hover:text-primary-foreground"
        >
          {{ t.contact }}
        </a>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          class="grid size-10 place-items-center border border-border bg-muted/45 text-foreground transition hover:bg-muted/70"
          :aria-label="isMenuOpen ? t.close : t.menu"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="size-5" />
        </button>
      </div>
    </div>
  </header>

  <Teleport to="body">
    <div v-if="isMenuOpen" class="fixed inset-0 z-100 lg:hidden">
      <button class="absolute inset-0 bg-foreground/55 backdrop-blur-sm dark:bg-black/65" :aria-label="t.close" @click="closeMenu" />
      <div class="absolute inset-x-3 top-3 border border-border bg-background/98 p-4 shadow-lg">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-semibold text-muted-foreground">{{ t.menuTitle }}</p>
          <button
            type="button"
            class="grid size-10 place-items-center border border-border bg-muted/45"
            :aria-label="t.close"
            @click="closeMenu"
          >
            <Icon name="lucide:x" class="size-5" />
          </button>
        </div>

        <nav class="mt-4 grid gap-2 text-base font-semibold">
          <a href="#about" class="border border-border bg-muted/35 px-4 py-3 transition hover:bg-muted/65" @click="closeMenu">
            {{ t.about }}
          </a>
          <a href="#experience" class="border border-border bg-muted/35 px-4 py-3 transition hover:bg-muted/65" @click="closeMenu">
            {{ t.experience }}
          </a>
          <a href="#projects" class="border border-border bg-muted/35 px-4 py-3 transition hover:bg-muted/65" @click="closeMenu">
            {{ t.projects }}
          </a>
          <a href="#stack" class="border border-border bg-muted/35 px-4 py-3 transition hover:bg-muted/65" @click="closeMenu">
            {{ t.stack }}
          </a>
          <a href="#contact" class="border border-border bg-muted/35 px-4 py-3 transition hover:bg-muted/65" @click="closeMenu">
            {{ t.contact }}
          </a>
        </nav>

        <div class="mt-4 flex justify-end">
          <LanguageToggle />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.header-nav-link {
  position: relative;
  transition: color 0.2s ease;
}

.header-nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.35rem;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.28s ease;
}

.header-nav-link:hover {
  color: hsl(var(--foreground));
}

.header-nav-link:hover::after {
  transform: scaleX(1);
}

.header-nav-link:not(:hover)::after {
  transform-origin: right center;
}
</style>
