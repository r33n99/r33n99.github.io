<script setup lang="ts">
interface HeaderText {
  name: string
  work: string
  stack: string
  process: string
  contact: string
  menu: string
  close: string
}

const { language } = useLanguage()
const isMenuOpen = ref(false)

const texts: Record<'ru' | 'en', HeaderText> = {
  ru: {
    name: 'Ринат Ражапов',
    work: 'Опыт',
    stack: 'Навыки',
    process: 'Сильные стороны',
    contact: 'Связаться',
    menu: 'Открыть меню',
    close: 'Закрыть меню',
  },
  en: {
    name: 'Rinat Razhapov',
    work: 'Experience',
    stack: 'Skills',
    process: 'Strengths',
    contact: 'Contact',
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
  <header class="sticky top-[clamp(0.75rem,1.2vw,1.5rem)] z-50 mx-auto flex w-[92vw] items-center justify-between rounded-full border border-white/10 bg-background/60 px-[clamp(0.75rem,1vw,1.4rem)] py-[clamp(0.55rem,0.75vw,0.95rem)] shadow-2xl shadow-black/20 backdrop-blur-xl">
    <NuxtLink to="/" class="flex items-center gap-3 text-[clamp(0.82rem,0.78vw,1rem)] font-semibold tracking-tight" @click="closeMenu">
      <AppAvatar :alt="t.name" />
      <span class="hidden sm:inline">{{ t.name }}</span>
    </NuxtLink>

    <nav class="hidden items-center gap-[clamp(1.25rem,1.6vw,2.5rem)] text-[clamp(0.82rem,0.78vw,1rem)] text-muted-foreground md:flex">
      <a href="#work" class="transition hover:text-foreground">{{ t.work }}</a>
      <a href="#stack" class="transition hover:text-foreground">{{ t.stack }}</a>
      <a href="#process" class="transition hover:text-foreground">{{ t.process }}</a>
    </nav>

    <div class="hidden items-center gap-2 md:flex">
      <LanguageToggle />
      <a href="#contact" class="rounded-full bg-foreground px-[clamp(0.9rem,1vw,1.4rem)] py-[clamp(0.55rem,0.7vw,0.9rem)] text-[clamp(0.8rem,0.76vw,0.98rem)] font-semibold text-background transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
        {{ t.contact }}
      </a>
    </div>

    <button
      type="button"
      class="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:bg-white/8 md:hidden"
      :aria-label="isMenuOpen ? t.close : t.menu"
      :aria-expanded="isMenuOpen"
      @click="isMenuOpen = !isMenuOpen"
    >
      <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="size-5" />
    </button>
  </header>

  <Teleport to="body">
    <div v-if="isMenuOpen" class="fixed inset-0 z-100 md:hidden">
      <button class="absolute inset-0 bg-black/70 backdrop-blur-sm" :aria-label="t.close" @click="closeMenu" />
      <div class="absolute inset-x-4 top-4 rounded-4xl border border-white/10 bg-background/95 p-4 shadow-2xl shadow-black/40">
        <div class="flex items-center justify-between gap-3">
          <NuxtLink to="/" class="flex items-center gap-3 font-semibold" @click="closeMenu">
            <AppAvatar size-class="size-10" :alt="t.name" />
            <span>{{ t.name }}</span>
          </NuxtLink>
          <button type="button" class="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5" :aria-label="t.close" @click="closeMenu">
            <Icon name="lucide:x" class="size-5" />
          </button>
        </div>

        <nav class="mt-6 grid gap-2 text-lg font-semibold">
          <a href="#work" class="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 transition hover:bg-white/8" @click="closeMenu">{{ t.work }}</a>
          <a href="#stack" class="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 transition hover:bg-white/8" @click="closeMenu">{{ t.stack }}</a>
          <a href="#process" class="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 transition hover:bg-white/8" @click="closeMenu">{{ t.process }}</a>
          <a href="#contact" class="rounded-2xl border border-white/10 bg-primary px-4 py-3 text-primary-foreground transition hover:bg-primary/90" @click="closeMenu">{{ t.contact }}</a>
        </nav>

        <div class="mt-4 flex justify-end">
          <LanguageToggle />
        </div>
      </div>
    </div>
  </Teleport>
</template>
