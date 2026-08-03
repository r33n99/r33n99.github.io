export interface ProjectEntry {
  slug: string
  index: string
  category: 'work' | 'pet' | 'landing'
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
    category: 'work',
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
    category: 'work',
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
    category: 'work',
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
    category: 'work',
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
    category: 'work',
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
    category: 'work',
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
    category: 'work',
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
  },
  {
    slug: 'lago-transfer',
    index: '08',
    category: 'work',
    titleRu: 'Lago Transfer',
    titleEn: 'Lago Transfer',
    introRu: 'Сервис бронирования трансферов: Next.js 15, React 19, Zustand.',
    introEn: 'Transfer booking service: Next.js 15, React 19, Zustand.',
    descriptionRu:
      'Современная платформа для бронирования трансферов, построенная на Next.js 15 и React 19. Включает сложную валидацию через Zod, управление состоянием с помощью Zustand и Unit-тестирование на Vitest.',
    descriptionEn:
      'A modern transfer booking platform built with Next.js 15 and React 19. Features complex Zod validation, Zustand state management, and Vitest unit testing.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '/images/projects/lago.png',
    websiteUrl: '',
    tags: ['Next.js 15', 'React 19', 'Zustand', 'Vitest'],
    codeUrl: 'https://github.com/r33n99/lago-transfer',
  },
  {
    slug: 'nova-shop',
    index: '09',
    category: 'work',
    titleRu: 'Nova Shop',
    titleEn: 'Nova Shop',
    introRu: 'Интернет-магазин: React 19, Vite, Ant Design, Zustand.',
    introEn: 'E-commerce website: React 19, Vite, Ant Design, Zustand.',
    descriptionRu:
      'Полнофункциональный интернет-магазин, построенный на самом свежем стеке: React 19 и Vite. Реализован современный интерфейс на Ant Design, управление состоянием через Zustand и роутинг на React Router 7. Особое внимание уделено качеству кода и производительности с использованием Oxlint.',
    descriptionEn:
      'Full-featured e-commerce application built on the latest stack: React 19 and Vite. Implements a modern UI with Ant Design, state management via Zustand, and routing with React Router 7. Special focus on code quality and performance using Oxlint.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '/images/projects/nova.png',
    websiteUrl: '',
    tags: ['React 19', 'Ant Design', 'Zustand', 'Vite'],
    codeUrl: 'https://github.com/r33n99/nova-shop',
  },
  {
    slug: 'hh-auto-apply-extension',
    index: '01',
    category: 'pet',
    titleRu: 'HH Auto Apply Extension',
    titleEn: 'HH Auto Apply Extension',
    introRu: 'Расширение для браузера: автоотклик на вакансии hh.ru с AI-письмами.',
    introEn: 'Browser extension: auto-apply to hh.ru with AI-generated cover letters.',
    descriptionRu:
      'Расширение для браузера, автоматизирующее отклики на вакансии на hh.ru: находит подходящие вакансии в выдаче и отправляет отклики без ручного повторения одних и тех же действий. Интеграция с Gemini API генерирует персональное сопроводительное письмо под каждую вакансию на основе резюме и текста объявления, а также поддерживает чат с AI прямо в расширении.',
    descriptionEn:
      'A browser extension that automates applying to jobs on hh.ru: it walks through the search results and submits applications so you don\'t have to repeat the same manual steps. It integrates with the Gemini API to generate a tailored cover letter for each vacancy based on the resume and job description, and includes an in-extension AI chat.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '',
    websiteUrl: '',
    tags: ['Browser Extension', 'JavaScript', 'Automation', 'Gemini API'],
    codeUrl: 'https://github.com/r33n99/hh-auto-apply-extansion',
  },
  {
    slug: 'figma-2-vue',
    index: '02',
    category: 'pet',
    titleRu: 'Figma 2 Vue',
    titleEn: 'Figma 2 Vue',
    introRu: 'Конвертер дизайнов Figma в Vue-компоненты с помощью AI.',
    introEn: 'AI-assisted converter that turns Figma designs into Vue components.',
    descriptionRu:
      'Инструмент для конвертации макетов из Figma в готовые Vue-компоненты: забирает структуру дизайна через Figma API и с помощью Gemini генерирует разметку и стили компонента, сокращая ручную вёрстку.',
    descriptionEn:
      'A tool that converts Figma designs into ready-to-use Vue components: it pulls the design structure via the Figma API and uses Gemini to generate the component markup and styles, cutting down manual layout work.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '',
    websiteUrl: '',
    tags: ['Vue', 'Figma API', 'Gemini API', 'Codegen'],
    codeUrl: 'https://github.com/r33n99/figma-2-vue',
  },
  {
    slug: '2gis-lead-crm',
    index: '03',
    category: 'pet',
    titleRu: '2GIS Lead CRM',
    titleEn: '2GIS Lead CRM',
    introRu: 'CRM для лидов из 2ГИС с AI-автоответами в WhatsApp.',
    introEn: 'Lead CRM for 2GIS with AI auto-replies in WhatsApp.',
    descriptionRu:
      'CRM-система для парсинга и обработки лидов из 2ГИС: структурированное хранение контактов организаций, статусы обработки и удобный интерфейс для работы с базой лидов. Интегрирован Gemini API: AI ведёт переписку с лидом в WhatsApp от лица заданной персоны, подставляет контекст лида (ниша, адрес, история сообщений) и генерирует ответ по системному промпту, настраиваемому в UI.',
    descriptionEn:
      'A CRM system for parsing and managing leads from 2GIS: structured storage of organization contacts, lead status tracking, and a convenient interface for working with the lead database. It integrates the Gemini API: the AI replies to leads in WhatsApp on behalf of a configured persona, using the lead\'s context (niche, address, message history) and a system prompt editable from the UI.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '',
    websiteUrl: '',
    tags: ['CRM', 'Parsing', 'Vue', 'Gemini API', 'WhatsApp'],
    codeUrl: 'https://github.com/r33n99/2gis-lead-crm',
  },
  {
    slug: 'visteria-flower-studio',
    index: '01',
    category: 'landing',
    titleRu: 'Visteria — цветочная мастерская',
    titleEn: 'Visteria — flower studio',
    introRu: 'Лендинг цветочной мастерской: тёмная тема, анимации, заказ в WhatsApp.',
    introEn: 'Flower studio landing: dark theme, animations, ordering via WhatsApp.',
    descriptionRu:
      'Одностраничный лендинг цветочной мастерской в Бишкеке. Вёрстка без фреймворков — чистые HTML, CSS и JavaScript. Крупная типографика заголовка залита изображением через background-clip, фон и слои двигаются с параллаксом при скролле, по экрану летят лепестки, секции появляются на IntersectionObserver, у кнопок — ripple и shimmer. Структура: hero, «О нас» со статистикой, «Как заказать» в три шага и контакты с прямым переходом в WhatsApp. Полностью адаптивный: под мобильные переопределяются отступы, размеры шрифтов и раскладка строк.',
    descriptionEn:
      'A single-page landing for a flower studio in Bishkek. Built with no frameworks — plain HTML, CSS and JavaScript. The oversized display heading is filled with an image via background-clip, background layers move with scroll parallax, petals drift across the screen, sections reveal through IntersectionObserver, and buttons have ripple and shimmer effects. Structure: hero, an About block with stats, a three-step "How to order" section, and contacts with a direct WhatsApp link. Fully responsive: spacing, font sizes and row layout are overridden for mobile.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '/images/projects/landing-1.png',
    websiteUrl: 'https://visteria-landing.vercel.app/',
    tags: ['HTML', 'CSS', 'Vanilla JS', 'Parallax', 'Animations'],
    codeUrl: '',
  },
  {
    slug: 'noir-restaurant',
    index: '02',
    category: 'landing',
    titleRu: 'NOIR — ресторан',
    titleEn: 'NOIR — restaurant',
    introRu: 'Лендинг ресторана: прелоадер, горизонтальный скролл блюд, меню и бронь.',
    introEn: 'Restaurant landing: preloader, horizontal dish scroll, menu and booking.',
    descriptionRu:
      'Лендинг вечернего ресторана в чёрно-белой эстетике, без фреймворков — HTML, CSS и JavaScript. Начинается с прелоадера со счётчиком загрузки и раскрытием по clip-path. Дальше — hero на полный экран с параллаксом, посимвольная анимация заголовков, секция фирменных блюд с горизонтальным скроллом, привязанным к вертикальному, «атмосфера» с раскрывающимся кадром на закреплённой секции, меню с переключением категорий, блок о шефе и форма бронирования. Хедер сжимается при скролле, на мобильных — полноэкранное меню-оверлей.',
    descriptionEn:
      'A landing page for a late-night restaurant in a black-and-white aesthetic, no frameworks — HTML, CSS and JavaScript. It opens with a preloader with a loading counter and a clip-path reveal. Then: a full-screen hero with parallax, per-character heading animations, a signature dishes section with horizontal scroll driven by vertical scrolling, an "atmosphere" pinned section with an expanding frame, a menu with category switching, a chef block and a reservation form. The header shrinks on scroll, and mobile gets a full-screen overlay menu.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '/images/projects/landing-2.png',
    websiteUrl: 'https://noir-landing-brown.vercel.app/',
    tags: ['HTML', 'CSS', 'Vanilla JS', 'Scroll-driven', 'Responsive'],
    codeUrl: '',
  },
  {
    slug: 'nord-atelier',
    index: '03',
    category: 'landing',
    titleRu: 'Ателье Норд — архитектура и интерьер',
    titleEn: 'Nord Atelier — architecture and interiors',
    introRu: 'Лендинг архитектурного бюро: сдержанная типографика и закреплённая галерея.',
    introEn: 'Architecture studio landing: restrained typography and a pinned gallery.',
    descriptionRu:
      'Лендинг архитектурного бюро из Санкт-Петербурга: светлая бежевая палитра, крупная антиква и много воздуха. Сделан на чистых HTML, CSS и JavaScript. Изображения въезжают из-под маски при появлении в зоне видимости, внутри кадров работает параллакс, галерея материалов собрана на закреплённой секции с горизонтальной прокруткой по мере скролла. Разделы: hero, о бюро, избранные интерьеры разной высоты, галерея «Материал и свет» и контактный блок.',
    descriptionEn:
      'A landing page for an architecture studio from Saint Petersburg: a light beige palette, large serif type and plenty of whitespace. Built with plain HTML, CSS and JavaScript. Images slide up from behind a mask as they enter the viewport, frames have inner parallax, and the materials gallery is a pinned section that scrolls horizontally as you scroll down. Sections: hero, about the studio, selected interiors at varying heights, the "Material and light" gallery and a contact block.',
    periodRu: '2026',
    periodEn: '2026',
    previewImage: '/images/projects/landing-3.png',
    websiteUrl: 'https://nord-landing-iota.vercel.app/',
    tags: ['HTML', 'CSS', 'Vanilla JS', 'Scroll Reveal', 'Typography'],
    codeUrl: '',
  },
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
