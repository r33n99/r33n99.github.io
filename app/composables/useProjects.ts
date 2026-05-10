export interface ProjectEntry {
  slug: string
  index: string
  titleRu: string
  titleEn: string
  introRu: string
  introEn: string
  descriptionRu: string
  descriptionEn: string
  periodRu: string
  periodEn: string
  previewImage: string
  websiteUrl: string
  tags: string[]
  codeUrl: string
}

const projectsData: ProjectEntry[] = [
  {
    slug: 'dli-deluxe-limo-italy',
    index: '01',
    titleRu: 'DLI / Deluxe Limo Italy',
    titleEn: 'DLI / Deluxe Limo Italy',
    introRu:
      'TravelTech: бронирование трансферов и туров, тарифы, Stripe и Zoho CRM.',
    introEn: 'TravelTech: transfers and tours booking, pricing, Stripe and Zoho CRM.',
    descriptionRu:
      'Платформа бронирования трансферов и туров: многошаговый booking flow, динамический расчёт тарифов, интеграции Stripe и Zoho CRM, стабильные API-контракты с backend. Фокус на конверсии и предсказуемости релизов.',
    descriptionEn:
      'Booking platform for transfers and tours: multi-step booking flow, dynamic pricing, Stripe and Zoho CRM integrations, stable API contracts with backend. Focus on conversion and predictable releases.',
    periodRu: '2024 — 2026',
    periodEn: '2024 — 2026',
    previewImage: '/images/projects/dli.png',
    websiteUrl: 'https://booking.deluxelimoitaly.com/',
    tags: ['Booking Flow', 'Stripe', 'Zoho CRM'],
    codeUrl: 'https://github.com/r33n99/booking.deluxelimoitaly',
  },
  {
    slug: 'eventner',
    index: '02',
    titleRu: 'Eventner',
    titleEn: 'Eventner',
    introRu: 'EventTech-маркетплейс площадок: каталог, фильтры, SEO.',
    introEn: 'Event venue marketplace: catalog, filters, SEO.',
    descriptionRu:
      'Маркетплейс площадок: каталог, фильтры, поиск, карточки площадок, сценарии бронирования и SEO-страницы для органического трафика.',
    descriptionEn:
      'Venue marketplace: listings, filters, search, venue pages, booking flows and SEO-focused pages for organic traffic.',
    periodRu: '2024 — 2025',
    periodEn: '2024 — 2025',
    previewImage: '/images/projects/eventner.png',
    websiteUrl: 'https://eventner.ru/',
    tags: ['Nuxt', 'Marketplace', 'SEO', 'UX'],
    codeUrl: 'https://github.com/r33n99/eventner',
  },
  {
    slug: 'inspiritaly',
    index: '03',
    titleRu: 'Inspiritaly',
    titleEn: 'Inspiritaly',
    introRu: 'Туры и experiences: каталог, checkout, личный кабинет, CWV.',
    introEn: 'Tours and experiences: catalog, checkout, account, CWV.',
    descriptionRu:
      'Платформа туров: каталоги, карточки туров, корзина, checkout, личный кабинет, оптимизация Core Web Vitals и медиа.',
    descriptionEn:
      'Tours platform: catalogs, tour pages, cart, checkout, account area, Core Web Vitals and media performance.',
    periodRu: '2025 — 2026',
    periodEn: '2025 — 2026',
    previewImage: '/images/projects/insp.png',
    websiteUrl: 'https://www.inspiritaly.com/',
    tags: ['Nuxt', 'Checkout', 'SSR/ISR', 'Core Web Vitals'],
    codeUrl: 'https://github.com/r33n99/inspiritaly',
  },
  {
    slug: 'travel-2025',
    index: '04',
    titleRu: 'Travel 2025',
    titleEn: 'Travel 2025',
    introRu: 'Форум: карта, активности, квесты, mobile-first.',
    introEn: 'Forum: map, activities, quests, mobile-first.',
    descriptionRu:
      'Mobile-first платформа международного туристического форума: интерактивная карта, активности, каталоги участников, квесты и персональные маршруты.',
    descriptionEn:
      'Mobile-first international tourism forum: interactive map, activities, participant catalogs, quests and personalized routes.',
    periodRu: '2024',
    periodEn: '2024',
    previewImage: '/images/projects/travel.png',
    websiteUrl: 'https://rustravelforum.com/visit/registration/',
    tags: ['EventTech', 'Mapbox', 'Mobile-first', 'Performance'],
    codeUrl: 'https://github.com/r33n99/travel-advisor-2025',
  },
  {
    slug: 'silkway-rally-account',
    index: '05',
    titleRu: 'Silkway Rally',
    titleEn: 'Silkway Rally',
    introRu: 'Админка и клиент: таблицы, графики, роли.',
    introEn: 'Admin and client apps: tables, charts, roles.',
    descriptionRu:
      'Разработаны админка и клиентское приложение: интерактивные таблицы и графики, сложная UI-логика и адаптивные сценарии для разных ролей.',
    descriptionEn:
      'Built both admin and client applications: interactive tables and charts, complex UI state, and adaptive flows for different roles.',
    periodRu: '2022',
    periodEn: '2022',
    previewImage: '',
    websiteUrl: '',
    tags: ['Vue 2', 'Vuetify', 'Charts', 'Dashboard'],
    codeUrl: 'https://gitlab.com/r33n99/silkroad-client',
  },
  {
    slug: 'parcelpoint',
    index: '06',
    titleRu: 'ParcelPoint',
    titleEn: 'ParcelPoint',
    introRu: 'Логистика: админка и клиент, панели операторов, формы.',
    introEn: 'Logistics: admin and client apps, operator panels, forms.',
    descriptionRu:
      'Разработаны админка и клиентское приложение ParcelPoint: рабочие панели операторов, управление статусами, формы и валидации, стабильность релизов.',
    descriptionEn:
      'Built both admin and client ParcelPoint apps: operator dashboards, status management, complex forms and validation, release stability.',
    periodRu: '2023',
    periodEn: '2023',
    previewImage: '',
    websiteUrl: '',
    tags: ['Vue 2', 'Operations UI', 'Forms', 'Release Stability'],
    codeUrl: 'https://gitlab.com/r33n99/parcelpoint-client',
  },
  {
    slug: 'kipish-bar',
    index: '07',
    titleRu: 'Kipish bar',
    titleEn: 'Kipish bar',
    introRu: 'Сайт бара: дизайн, UX, интеграции с внешними сервисами.',
    introEn: 'Bar website: design, UX, integrations with external services.',
    descriptionRu:
      'Разработан сайт бара Kipish: дизайн, UX, интеграции с внешними сервисами.',
    descriptionEn:
      'Built the Kipish bar website: design, UX, integrations with external services.',
    periodRu: '2024',
    periodEn: '2024',
    previewImage: '/images/projects/kipish.png',
    websiteUrl: 'https://kipish.kg/',
    tags: ['Vue 2', 'Vuetify', 'UX', 'Integrations'],
    codeUrl: 'https://gitlab.com/r33n99/kipish-client',
  }
]

export function useProjects(): {
  projects: Readonly<ProjectEntry[]>
  getBySlug: (slug: string) => ProjectEntry | undefined
} {
  function getBySlug(slug: string): ProjectEntry | undefined {
    return projectsData.find((p) => p.slug === slug)
  }

  return {
    projects: projectsData,
    getBySlug,
  }
}
