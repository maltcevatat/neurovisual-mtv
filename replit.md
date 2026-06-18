# Нейровизуал от MTV

Премиальный лендинг онлайн-курса по AI-визуалам от Татьяны (MTV). Пользователи узнают о программе, авторе и покупают курс.

## Run & Operate

- `pnpm --filter @workspace/neurovisual run dev` — запустить лендинг (порт 19149, preview `/`)
- `pnpm --filter @workspace/api-server run dev` — запустить API-сервер (порт 8080, preview `/api`)
- `pnpm run typecheck` — полная проверка типов по всем пакетам
- `pnpm run build` — typecheck + сборка всех пакетов

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7, Tailwind CSS v4, framer-motion v12
- Шрифты: Cormorant Garamond (заголовки), Inter 300/400 (тело)
- Роутинг: wouter
- UI: @radix-ui (accordion, tooltip, slot), lucide-react

## Where things live

- `artifacts/neurovisual/` — лендинг (единственный production-артефакт)
  - `src/pages/Home.tsx` — весь контент страницы (единый файл ~730 строк)
  - `src/App.tsx` — корень приложения с роутером
  - `src/index.css` — тема (CSS-переменные), импорт шрифтов
  - `public/` — статика: hero.mp4, tatyana.jpg, system-diagram.png, bonus1-4.png, opengraph.jpg
- `artifacts/api-server/` — заглушка Express API (только `/api/healthz`), не используется лендингом
- `artifacts/mockup-sandbox/` — внутренний инструмент для Canvas-прототипов, не production

## Architecture decisions

- Лендинг — чисто статический SPA без API-запросов: QueryClient убран, нет авторизации
- Тёмная тема единственная (нет переключателя): `:root` содержит все переменные, блок `.dark` удалён как дубликат
- framer-motion ease-кривые требуют `as [number, number, number, number]` в framer-motion v12 (TS2322)
- UI-компоненты: оставлены только 4 из shadcn/ui (accordion, button, card, tooltip) — остальные 50+ удалены вместе с пакетами

## Product

Одностраничный лендинг курса «Нейровизуал от MTV»:
- Hero с видео (hero.mp4) и анимированным заголовком
- 7 уроков в аккордеоне с описанием и результатом
- Карусель бонусов (4 слайда) с кастомной анимацией
- Секция «Об авторе» с фото Татьяны
- AI-система (diagram-изображение)
- Блок цены (2 790 ₽) с CTA-кнопками
- FAQ (6 вопросов)
- Финальный CTA + Footer

## User preferences

_Заполнять по мере работы._

## Gotchas

- `framer-motion` v12: `ease: number[]` вызывает TS2322 — используй `as [number, number, number, number]` для кубических кривых Bezier
- Hero-видео `autoPlay muted loop playsInline` — все 4 атрибута обязательны для автовоспроизведения в iOS Safari
- Изображения в `public/` не сжаты (tatyana.jpg = 4.7 МБ) — перед production-деплоем сжать через squoosh/imagemin

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
