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
            'Разрабатываю веб-приложения, мобильные приложения и SaaS-сервисы на Vue, React и TypeScript. 4+ года опыта.',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
          media: '(prefers-color-scheme: light)',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
          media: '(prefers-color-scheme: dark)',
        },
        { property: 'og:title', content: 'Ринат Ражапов - Frontend Developer' },
        {
          property: 'og:description',
          content: 'Веб-приложения, мобильные приложения и SaaS. Vue, Nuxt, React, Next.js и TypeScript.',
        },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
  nitro: {
    routeRules: {
      '/projects': { redirect: '/' },
      '/concept': { redirect: '/' },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/projects/dli-deluxe-limo-italy', '/projects/eventner', '/projects/inspiritaly', '/projects/travel-2025', '/projects/silkway-rally-account', '/projects/parcelpoint'],
    },
  },
}
