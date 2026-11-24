"""Generate the two text-based A4 résumés with ReportLab."""

import argparse
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate


ROOT = Path(__file__).resolve().parents[1]
ROLE = "Middle Fullstack Developer"
CONTACTS = (
    ("rinni499@gmail.com", "mailto:rinni499@gmail.com"),
    ("t.me/r33n_dev", "https://t.me/r33n_dev"),
    ("github.com/r33n99", "https://github.com/r33n99"),
    ("r33n99.github.io", "https://r33n99.github.io"),
)
RESUMES = {
    "ru": {
        "name": "Ринат Ражапов",
        "location": "Бишкек, Кыргызстан | Удалённо, гибрид или офис в Бишкеке",
        "summary_heading": "Профиль",
        "summary": "Разработчик с 4+ годами опыта. Создаю веб-приложения на React и Next.js, проектирую REST API на Node.js и NestJS, моделирую данные в PostgreSQL. Работал над бронированием, динамическими тарифами и интеграциями с платёжными сервисами и CRM.",
        "skills_heading": "Технические навыки",
        "skills": (
            ("Основной стек", "React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL"),
            ("Backend", "REST API, Prisma, Drizzle ORM, Fastify, Express, Supabase, WebSocket"),
            ("Дополнительно", "Vue, Nuxt, Capacitor, Android, Gemini API, Docker, CI/CD, Vitest, Playwright"),
        ),
        "experience_heading": "Опыт работы",
        "experience": (
            ("Tomiko / JOSEI | Fullstack Developer, проект на заказ | 2026", (
                "Разработал монорепозиторий с публичным сайтом на Next.js, React-админкой и REST API на NestJS. Вынес общие типы и схемы валидации Zod в отдельный пакет.",
                "Реализовал управление каталогом на Prisma и PostgreSQL, сессии в httpOnly cookie, обработку изображений и обновление кэша сайта после правок в админке. Подготовил Docker Compose и скрипты резервного копирования.",
            )),
            ("TrustyOne | Frontend Developer | Апрель 2024 - февраль 2026", (
                "Проектировал архитектуру приложений TravelTech и EventTech. Для DLI реализовал многошаговое бронирование, динамический расчёт тарифа и поддержку нескольких брендов в общей кодовой базе.",
                "Согласовывал API-контракты с backend-командой для бронирований, оплаты Stripe и передачи данных в Zoho CRM. Настраивал проверки с Vitest и Playwright и автодеплой в CI/CD.",
            )),
            ("Paleo Studio | Frontend Developer | Ноябрь 2022 - январь 2024", (
                "Разрабатывал панели операторов ParcelPoint: статусы отправлений, формы и валидация. Для Silkway Rally создавал личный кабинет с интерфейсами по ролям, таблицами и графиками на Vue и Vuetify.",
            )),
            ("Фриланс | Frontend Developer | Июнь 2021 - август 2022", (
                "Разрабатывал клиентские приложения на React, Next.js и TypeScript. Настраивал SSR и маршрутизацию, интегрировал REST API и реализовывал формы с валидацией.",
            )),
        ),
        "projects_heading": "Избранные проекты",
        "projects": (
            ("СамоКеттик", "https://github.com/r33n99/samokettik", "Демо шеринга самокатов на React, Fastify и PostgreSQL. Атомарное бронирование, обработка поездок, фоновый worker и обновления через WebSocket."),
            ("TaskFlow", "https://github.com/r33n99/taskflow", "Командный канбан на Next.js и PostgreSQL. REST API, проверка членства на доске и пакетное сохранение порядка карточек."),
            ("Вдвоём", "https://r33n99.github.io/projects/vdvoem", "Android-приложение на Capacitor с геолокацией и локальными уведомлениями. Общие данные пары в Supabase с политиками RLS."),
            ("2GIS Lead CRM", "https://github.com/r33n99/2gis-lead-crm", "Автоматизация работы с лидами, WhatsApp через Green API и запись клиентов через Gemini function calling в демо-боте."),
        ),
        "languages": "Языки: русский - родной, английский - A2",
    },
    "en": {
        "name": "Rinat Razhapov",
        "location": "Bishkek, Kyrgyzstan | Remote, hybrid or on-site in Bishkek",
        "summary_heading": "Professional Summary",
        "summary": "Developer with 4+ years of experience. I build web applications with React and Next.js, design REST APIs with Node.js and NestJS, and model data in PostgreSQL. My work includes booking flows, dynamic pricing, and payment and CRM integrations.",
        "skills_heading": "Technical Skills",
        "skills": (
            ("Core stack", "React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL"),
            ("Backend", "REST APIs, Prisma, Drizzle ORM, Fastify, Express, Supabase, WebSocket"),
            ("Additional", "Vue, Nuxt, Capacitor, Android, Gemini API, Docker, CI/CD, Vitest, Playwright"),
        ),
        "experience_heading": "Work Experience",
        "experience": (
            ("Tomiko / JOSEI | Fullstack Developer, contract project | 2026", (
                "Built a monorepo with a Next.js public site, a React admin panel and a NestJS REST API. Shared TypeScript types and Zod validation schemas across applications.",
                "Implemented catalog management with Prisma and PostgreSQL, httpOnly cookie sessions, image processing and site cache revalidation after admin edits. Prepared Docker Compose configuration and backup scripts.",
            )),
            ("TrustyOne | Frontend Developer | April 2024 - February 2026", (
                "Designed application architecture for TravelTech and EventTech projects. Implemented multi-step booking, dynamic pricing and multi-brand support in a shared codebase for DLI.",
                "Defined API contracts with the backend team for bookings, Stripe payments and Zoho CRM data. Configured Vitest and Playwright checks and automated deployments in CI/CD.",
            )),
            ("Paleo Studio | Frontend Developer | November 2022 - January 2024", (
                "Built ParcelPoint operator dashboards for shipment status management, forms and validation. Developed role-based views, tables and charts for the Silkway Rally account portal using Vue and Vuetify.",
            )),
            ("Freelance | Frontend Developer | June 2021 - August 2022", (
                "Built client applications with React, Next.js and TypeScript. Configured SSR and routing, integrated REST APIs and implemented form validation.",
            )),
        ),
        "projects_heading": "Selected Projects",
        "projects": (
            ("Samokettik", "https://github.com/r33n99/samokettik", "Scooter sharing demo with React, Fastify and PostgreSQL. Atomic bookings, ride lifecycle, a background worker and WebSocket updates."),
            ("TaskFlow", "https://github.com/r33n99/taskflow", "Team Kanban board with Next.js and PostgreSQL. REST API, board membership checks and batch updates to card order."),
            ("Vdvoem", "https://r33n99.github.io/projects/vdvoem", "Capacitor Android app with geolocation and local notifications. Supabase row-level security protects shared data."),
            ("2GIS Lead CRM", "https://github.com/r33n99/2gis-lead-crm", "Lead workflow automation, WhatsApp via Green API and a demo bot that books appointments with Gemini function calling."),
        ),
        "languages": "Languages: Russian (native), English (A2)",
    },
}


def link(label, url):
    return f'<link href="{escape(url)}">{escape(label)}</link>'


def build_resume(language, content):
    body = ParagraphStyle(
        "Body", fontName="Resume", fontSize=10.5, leading=13.4,
        textColor=colors.HexColor("#20252B"), spaceAfter=3,
    )
    name = ParagraphStyle("Name", parent=body, fontName="ResumeBold", fontSize=27, leading=30)
    role = ParagraphStyle("Role", parent=body, fontSize=14, leading=18, spaceAfter=5)
    heading = ParagraphStyle(
        "Heading", parent=body, fontName="ResumeBold", fontSize=12, leading=15,
        spaceBefore=6, keepWithNext=True,
    )
    position = ParagraphStyle(
        "Position", parent=body, fontName="ResumeBold", spaceBefore=3, keepWithNext=True,
    )
    bullet = ParagraphStyle("Bullet", parent=body, leftIndent=11, firstLineIndent=-11)
    story = [
        Paragraph(escape(content["name"]), name),
        Paragraph(ROLE, role),
        Paragraph(escape(content["location"]), body),
        Paragraph(" | ".join(link(label, url) for label, url in CONTACTS), body),
        Paragraph(content["summary_heading"], heading),
        Paragraph(escape(content["summary"]), body),
        Paragraph(content["skills_heading"], heading),
    ]
    for label, value in content["skills"]:
        story.append(Paragraph(f"<b>{escape(label)}:</b> {escape(value)}", body))
    story.append(Paragraph(content["experience_heading"], heading))
    for label, responsibilities in content["experience"]:
        story.append(Paragraph(escape(label), position))
        for responsibility in responsibilities:
            story.append(Paragraph(f"- {escape(responsibility)}", bullet))
    story.append(Paragraph(content["projects_heading"], heading))
    for label, url, description in content["projects"]:
        story.append(Paragraph(f"<b>{link(label, url)}</b>: {escape(description)}", body))
    story.append(Paragraph(escape(content["languages"]), body))

    document = SimpleDocTemplate(
        str(ROOT / "public" / "cv" / f"cv-{language}.pdf"),
        pagesize=A4, leftMargin=42, rightMargin=42, topMargin=31, bottomMargin=31,
        title=f'{content["name"]} | {ROLE}', author=content["name"], subject=ROLE,
        lang=language, invariant=True,
    )
    document.build(story)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("regular_font", type=Path, help="Regular TrueType font covering Latin and Cyrillic")
    parser.add_argument("bold_font", type=Path, help="Matching bold TrueType font")
    args = parser.parse_args()
    pdfmetrics.registerFont(TTFont("Resume", str(args.regular_font)))
    pdfmetrics.registerFont(TTFont("ResumeBold", str(args.bold_font)))
    pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold")
    for locale, resume in RESUMES.items():
        build_resume(locale, resume)
