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
  - `src/pages/Home.tsx` — весь контент главной страницы
  - `src/pages/Thanks.tsx` — страница после успешной оплаты `/thanks`
  - `src/pages/Offer.tsx` — публичная оферта `/offer`
  - `src/pages/PrivacyPolicy.tsx` — политика ОПД `/privacy-policy`
  - `src/pages/PersonalDataConsent.tsx` — согласие на ОПД `/personal-data-consent`
  - `src/pages/MarketingConsent.tsx` — согласие на рассылку `/marketing-consent`
  - `src/components/PaymentModal.tsx` — модальное окно оплаты (framer-motion + portal)
  - `src/components/LegalPage.tsx` — общий шаблон юр. страниц
  - `src/App.tsx` — корень приложения с роутером (все маршруты)
  - `src/index.css` — тема (CSS-переменные), импорт шрифтов
  - `public/` — статика: hero.mp4, tatyana.jpg, system-diagram.jpg, bonus1-4.jpg, opengraph.jpg
  - `.env` — переменные окружения (VITE_PRODAMUS_PAYMENT_URL, VITE_TELEGRAM_INVITE_URL)
- `artifacts/api-server/` — заглушка Express API (только `/api/healthz`), не используется лендингом
- `artifacts/mockup-sandbox/` — внутренний инструмент для Canvas-прототипов, не production

## Architecture decisions

- Лендинг — чисто статический SPA без API-запросов: QueryClient убран, нет авторизации
- Тёмная тема единственная (нет переключателя): `:root` содержит все переменные, блок `.dark` удалён как дубликат
- framer-motion ease-кривые требуют `as [number, number, number, number]` в framer-motion v12 (TS2322)
- UI-компоненты: оставлены только 4 из shadcn/ui (accordion, button, card, tooltip) — остальные 50+ удалены вместе с пакетами
- PaymentModal использует createPortal (react-dom) — не @radix-ui/react-dialog (не установлен)
- Все CTA-кнопки оплаты открывают PaymentModal; промежуточные CTA (hero, «Хочу маршрут») — scroll to #price

## Payment flow

1. Кнопки «Купить курс» / «Хочу в курс» → открывают `PaymentModal`
2. Модал: Имя (required), Email (required), Telegram (optional)
3. Чекбоксы: согласие на ОПД (обязательный) + согласие на рассылку (опциональный)
4. Кнопка «Перейти к оплате» disabled пока форма невалидна
5. При submit: если `VITE_PRODAMUS_PAYMENT_URL` заполнен — открывает Продамус в новой вкладке; иначе показывает сообщение с maltceva-tat@mail.ru
6. После оплаты Продамус редиректит на `/thanks`

## Environment variables

Нужно заполнить в `.env` или через Replit Secrets:
- `VITE_PRODAMUS_PAYMENT_URL` — URL платёжной страницы Продамус (например `https://mtvai.payform.ru/`)
- `VITE_TELEGRAM_INVITE_URL` — ссылка-приглашение в закрытый Telegram-канал (показывается на `/thanks`)

## Legal pages

Все документы от 19 июня 2026 г., г. Ижевск. Оператор: самозанятая Мальцева Татьяна Владимировна, ИНН 183403617282, maltceva-tat@mail.ru, mtvai.ru:
- `/offer` — Публичная оферта (20 разделов, цена 2 790 ₽)
- `/privacy-policy` — Политика обработки персональных данных
- `/personal-data-consent` — Согласие на обработку ПД
- `/marketing-consent` — Согласие на получение рассылки

## Product

Одностраничный лендинг курса «Нейровизуал от MTV»:
- Hero с видео (hero.mp4) и анимированным заголовком
- 7 уроков в аккордеоне с описанием и результатом
- Карусель бонусов (4 слайда) с кастомной анимацией
- Секция «Об авторе» с фото Татьяны
- AI-система (diagram-изображение)
- Блок цены (2 790 ₽) с CTA-кнопками
- FAQ (7 вопросов)
- Финальный CTA + Footer с юр. документами

## User preferences

_Заполнять по мере работы._

## Gotchas

- `framer-motion` v12: `ease: number[]` вызывает TS2322 — используй `as [number, number, number, number]` для кубических кривых Bezier
- Hero-видео `autoPlay muted loop playsInline` — все 4 атрибута обязательны для автовоспроизведения в iOS Safari
- Изображения в `public/` не сжаты до production (tatyana.jpg = ~188KB после сжатия, остальные ~100KB)
- VITE_ переменные читаются только в dev из `.env`; в production нужно выставить их через Replit Secrets (Deployments)
- PaymentModal: нет @radix-ui/react-dialog — использовать createPortal + AnimatePresence из framer-motion

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
