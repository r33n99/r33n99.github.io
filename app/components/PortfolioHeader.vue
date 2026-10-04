<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const emit = defineEmits<{ 'menu-change': [open: boolean] }>()
const { language, toggleLanguage } = useLanguage()
const ru = computed(() => language.value === 'ru')
const route = useRoute()
const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement>()
const mobileMenu = ref<HTMLElement>()
let savedOverflow = ''
const links = computed(() => [
  { href: '/#projects', label: ru.value ? 'Проекты' : 'Projects' },
  { href: '/#experience', label: ru.value ? 'Опыт' : 'Experience' },
  { href: '/#other-projects', label: ru.value ? 'Другие работы' : 'More work' },
  { href: '/#contact', label: ru.value ? 'Связаться' : 'Contact' },
])

function closeMenu() { menuOpen.value = false }
function trapMenuFocus(event: KeyboardEvent) {
  if (!menuOpen.value || event.key !== 'Tab') return
  const elements = [menuButton.value, ...Array.from(mobileMenu.value?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[]
  const first = elements[0]!
  const last = elements[elements.length - 1]!
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
}
watch(menuOpen, async open => {
  emit('menu-change', open)
  if (!import.meta.client) return
  if (open) {
    savedOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    await nextTick()
    if (menuOpen.value) mobileMenu.value?.querySelector('a')?.focus()
  } else {
    document.documentElement.style.overflow = savedOverflow
    menuButton.value?.focus({ preventScroll: true })
  }
})
watch(() => route.fullPath, closeMenu)
function onResize() { if (window.innerWidth > 800 && menuOpen.value) closeMenu() }
onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  if (menuOpen.value) document.documentElement.style.overflow = savedOverflow
})
</script>

<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }" @keydown.esc="closeMenu" @keydown="trapMenuFocus">
    <div class="header-inner">
      <NuxtLink to="/" class="wordmark" :inert="menuOpen || undefined" :aria-label="ru ? 'В начало' : 'Back to top'" @click="closeMenu">r33n<span>.</span></NuxtLink>
      <nav class="desktop-nav" :aria-label="ru ? 'Основная навигация' : 'Main navigation'">
        <NuxtLink v-for="link in links.filter(link => link.href !== '/#other-projects')" :key="link.href" :to="link.href">{{ link.label }}</NuxtLink>
      </nav>
      <button class="language" :inert="menuOpen || undefined" @click="toggleLanguage" :aria-label="ru ? 'Switch to English' : 'Переключить на русский'">{{ ru ? 'EN' : 'RU' }}</button>
      <button ref="menuButton" class="menu-toggle" :aria-label="menuOpen ? (ru ? 'Закрыть меню' : 'Close menu') : (ru ? 'Открыть меню' : 'Open menu')" :aria-expanded="menuOpen" aria-controls="portfolio-mobile-nav" @click="menuOpen = !menuOpen"><span/><span/></button>
    </div>
    <Transition name="menu">
      <nav v-if="menuOpen" ref="mobileMenu" id="portfolio-mobile-nav" class="mobile-nav" :aria-label="ru ? 'Мобильная навигация' : 'Mobile navigation'">
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href" @click="closeMenu">{{ link.label }}</NuxtLink>
        <a class="menu-telegram" href="https://t.me/r33n_dev" target="_blank" rel="noreferrer" @click="closeMenu">Telegram · @r33n_dev</a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.site-header { position: fixed; inset: 0 0 auto; height: var(--header-height,89px); background: var(--paper,#fff); color: var(--ink,#191919); border-bottom: 1px solid var(--rule,#e4e4e4); z-index: 50; font-family: Arial,Helvetica,sans-serif; }
.header-inner { width: min(100% - 96px,1440px); margin-inline: auto; position: relative; z-index: 2; height: 100%; display: flex; align-items: center; gap: 32px; }
a { color: inherit; text-decoration: none; }button { font: inherit; cursor: pointer; }:focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
.wordmark { font-size: 32px; font-weight: 700; letter-spacing: -2px; }.wordmark span { color: var(--muted,#646464); }
.desktop-nav { display: flex; margin-left: auto; gap: 32px; font-size: 15px; }.desktop-nav a { text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 5px; transition: text-decoration-color .25s; }.desktop-nav a:hover { text-decoration-color: currentColor; }
.language,.menu-toggle { border: 0; background: transparent; font-size: 14px; min-height: 44px; padding: 8px; }.menu-toggle,.mobile-nav { display: none; }
@media(max-width:800px) {
  .header-inner { width: calc(100% - 40px); gap: 14px; }.desktop-nav { display: none; }.language { margin-left: auto; }
  .menu-toggle { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; width: 44px; height: 44px; }.menu-toggle span { display: block; width: 24px; height: 2px; background: currentColor; transition: transform .3s var(--ease,cubic-bezier(.22,1,.36,1)); }
  .menu-open .menu-toggle span:first-child { transform: translateY(4px) rotate(45deg); }.menu-open .menu-toggle span:last-child { transform: translateY(-4px) rotate(-45deg); }
  .mobile-nav { position: fixed; inset: 0; height: 100dvh; z-index: 1; display: flex; flex-direction: column; justify-content: center; gap: 20px; background: var(--paper,#fff); padding: calc(var(--header-height,74px) + 24px) 28px 32px; overflow-y: auto; }.mobile-nav>a { font-size: clamp(30px,7vw,48px); line-height: 1.2; letter-spacing: -.035em; }.mobile-nav .menu-telegram { font-size: 16px; letter-spacing: 0; margin-top: auto; }.mobile-nav>a:first-child { margin-top: auto; }
  .menu-enter-active,.menu-leave-active { transition: clip-path .45s var(--ease,cubic-bezier(.22,1,.36,1)); }.menu-enter-from,.menu-leave-to { clip-path: inset(0 0 100%); }
}
@media(prefers-reduced-motion:reduce) { *,*::before,*::after { transition: none !important; } }
</style>
