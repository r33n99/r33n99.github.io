// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@inspira-ui/plugins'],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      favicon: '/favicon.ico',
      title: 'Frontend Developer',
      link: [
        // Caveat — заголовки, Neucha — текст, JetBrains Mono — метки; @font-face в main.css.
        // Предзагружаем только кириллицу заголовков и текста — она нужна первому экрану
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/neucha-cyrillic.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/caveat-cyrillic.woff2', crossorigin: '' },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Frontend Developer c 3+ годами коммерческого опыта: Vue, Nuxt, TypeScript, сложная бизнес-логика, тестирование и Core Web Vitals.',
        },
        {
          name: 'theme-color',
          content: '#fbf3e4',
          media: '(prefers-color-scheme: light)',
        },
        {
          name: 'theme-color',
          content: '#1e1b19',
          media: '(prefers-color-scheme: dark)',
        },
        { property: 'og:title', content: 'Ринат Ражапов - Frontend Developer' },
        {
          property: 'og:description',
          content: 'Vue/Nuxt разработка, TravelTech/EventTech, TypeScript, тестирование и продуктовая frontend-архитектура.',
        },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
  nitro: {
    routeRules: {
      '/projects': { redirect: '/' },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/projects/dli-deluxe-limo-italy', '/projects/eventner', '/projects/inspiritaly', '/projects/travel-2025', '/projects/silkway-rally-account', '/projects/parcelpoint'],
    },
  },
}