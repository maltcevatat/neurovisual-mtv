import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import PaymentModal from "@/components/PaymentModal";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  PlayCircle,
  FileText,
  Target,
  MessageCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Zap,
  Camera,
  Layers,
} from "lucide-react";

/* ─── ANIMATIONS ────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── HELPERS ───────────────────────────────────────────── */

function scrollToPrice() {
  document.getElementById("price")?.scrollIntoView({ behavior: "smooth" });
}

/* ─── DATA ──────────────────────────────────────────────── */

const painCards = [
  { main: "«Сохраняю всё, но не начинаю»", sub: "Ссылки есть, а результата нет." },
  { main: "«Картинка есть, но выкладывать стыдно»", sub: "Смотрю тысячи туториалов по AI." },
  { main: "«Идея есть, но я не понимаю, как её сделать»", sub: "В голове красиво, на экране — не то." },
  { main: "«Я не дизайнер, но хочу красиво»", sub: "Без команды и сложных программ." },
  { main: "«Не понимаю, какая нейросеть для чего»", sub: "Фото, текст, дизайн — всё вразнобой." },
];

const lessons = [
  {
    title: "Урок 1. ChatGPT как личный AI-дизайнер",
    body: "Многие используют ChatGPT только для текстов. Здесь разбираем его как визуальный инструмент: как объяснить нейросети задачу, поменять фон, собрать продуктовую карточку, сделать иллюстрацию и не застрять на пустом листе.",
    result: "После урока вы понимаете, как ставить визуальную задачу простым языком и получать результат, который можно дорабатывать, а не выбрасывать.",
  },
  {
    title: "Урок 2. Нейрофотосессия с вашим лицом — Krea",
    body: "Создаём персональный AI-аватар и учимся делать фото с вашим лицом: разные образы, стили, настроения — для контента, обложек, личного бренда.",
    result: "После урока у вас есть аватар и первые нейрофото. Больше не нужно ждать удачного кадра или платить за фотосессию каждый раз.",
  },
  {
    title: "Урок 3. Нейрофотосессия через Pinterest — Higgsfield",
    body: "Нашли образ в Pinterest и хотите такой же, но со своим лицом. Разбираем, как это работает через Higgsfield: референс → ваш образ → красивый результат.",
    result: "После урока вы умеете брать визуальную идею из любого источника и воплощать её в своём образе.",
  },
  {
    title: "Урок 4. Редактирование фото — Nano Banana",
    body: "Генерация — только начало. Здесь разбираем, как менять конкретные детали без пересоздания всего с нуля: фон, одежда, причёска, элементы, свет — точечно, с сохранением лица и остальных деталей.",
    result: "После урока вы перестаёте принимать «ну вот что получилось» и начинаете доводить визуал до нужного результата.",
  },
  {
    title: "Урок 5. Midjourney — художественность, видео, редактура",
    body: "Самый атмосферный инструмент курса. Разбираем, как создавать сцены, управлять стилем и вариативностью, редактировать кадр и оживлять изображение в видео.",
    result: "После урока вы понимаете, когда нужен Midjourney и как получить из него не случайную красоту, а управляемый результат.",
  },
  {
    title: "Урок 6. Именная книга для ребёнка — полный AI-кейс",
    body: "Урок про то, как работает AI-first мышление на практике. Берём реальный проект: персонаж, сценарий, иллюстрации, вёрстка, печать — всё с помощью связки инструментов курса.",
    result: "После урока вы видите, как AI превращает личную идею в осязаемый продукт — и это меняет отношение к возможностям инструментов навсегда.",
  },
  {
    title: "Урок 7. Как связывать AI-чаты с другими сервисами — Canva, Figma и не только",
    body: "Один инструмент редко решает задачу целиком. В этом уроке разбираем, как выстраивать связку: AI-чат генерирует идею и структуру, Canva или Figma собирают финальный дизайн. Показываю это на примере Instagram-карусели — от первой мысли до готовых слайдов.",
    result: "После урока вы понимаете, как разные сервисы работают вместе, и перестаёте искать одну кнопку, которая сделает всё сама.",
  },
];

const bonuses = [
  {
    img: "/bonus1.jpg",
    title: "Конспекты к каждому уроку",
    desc: "Шаги, промпты, подсказки. Можно открыть и повторить, не пересматривая видео.",
  },
  {
    img: "/bonus2.jpg",
    title: "Библиотека промптов для нейрофотосессий",
    desc: "Готовые формулы для образов, стилей, сцен и подбора референсов.",
  },
  {
    img: "/bonus3.jpg",
    title: "Карта действий для Midjourney",
    desc: "Что нажимать под задачу и что менять, если результат не тот.",
  },
  {
    img: "/bonus4.jpg",
    title: "Бонусный урок: бесшовные карусели",
    desc: "Как сделать визуальный объект, который перетекает между слайдами.",
  },
];

const results = [
  { icon: <Camera className="w-4 h-4" />, text: "Нейрофото с вашим лицом — для аватара, контента, личного бренда" },
  { icon: <Layers className="w-4 h-4" />, text: "Обложки, которые выглядят как сделанные дизайнером" },
  { icon: <Zap className="w-4 h-4" />, text: "Карусель от идеи до готовых слайдов" },
  { icon: <Zap className="w-4 h-4" />, text: "Отредактированные фото без следов «дешёвого AI»" },
  { icon: <Camera className="w-4 h-4" />, text: "Художественные визуалы в Midjourney — управляемо, не случайно" },
  { icon: <Award className="w-4 h-4" />, text: "Именная книга для ребёнка — реальный осязаемый продукт" },
  { icon: <Target className="w-4 h-4" />, text: "Понимание системы, которое работает для любых будущих задач" },
];

const forWhom = [
  { emoji: "👩‍👧", text: "Вы мама в декрете и хотите освоить что-то своё — современное, красивое, с реальным результатом в руках и возможностью зарабатывать после." },
  { emoji: "📱", text: "Вы ведёте блог или развиваете личный бренд и хотите делать визуалы сами, стабильно и красиво, без постоянной помощи дизайнера." },
  { emoji: "🚀", text: "Вы создаёте свой продукт или курс и вам нужна упаковка: обложки, материалы, презентации, промо — быстрее и без команды." },
  { emoji: "✍️", text: "Вы работаете с контентом и хотите добавить AI-визуалы в свою услугу или ускорить производство." },
  { emoji: "🔍", text: "Вы давно хотели разобраться в нейросетях, но каждый раз тонули в обзорах и ничего не начинали." },
];

const howSteps = [
  { icon: <PlayCircle className="w-5 h-5" />, title: "Смотрите урок", desc: "Я показываю всё на экране и объясняю логику, а не только кнопки." },
  { icon: <FileText className="w-5 h-5" />, title: "Открываете конспект", desc: "Шаги, промпты, подсказки — можно повторить без пересмотра видео." },
  { icon: <Target className="w-5 h-5" />, title: "Пробуете сразу", desc: "Каждый урок заканчивается конкретным действием: что сделать прямо сейчас." },
  { icon: <MessageCircle className="w-5 h-5" />, title: "Задаёте вопросы", desc: "Я лично отвечаю и помогаю разобраться, если что-то пошло не так." },
  { icon: <Award className="w-5 h-5" />, title: "Получаете результат", desc: "Не галочку «просмотрено», а реальный материал, который можно использовать." },
];

const faqs = [
  {
    q: "Нужно ли разбираться в дизайне или нейросетях?",
    a: "Нет. Курс построен для тех, кто начинает с нуля или разобрался в паре инструментов, но не понимает, как собрать из них систему.",
  },
  {
    q: "Нужно ли покупать платные подписки на сервисы?",
    a: "Часть инструментов работает в бесплатных тарифах. Где нужна платная версия — объясняю, что именно даёт доступ и можно ли обойтись без него на старте.",
  },
  {
    q: "Я уже пробовала нейросети. Будет ли мне это интересно?",
    a: "Да, если вы пробовали, но не понимаете, как получать стабильный результат. Курс не про «нажать кнопку» — он про систему и редактуру, которых обычно не хватает.",
  },
  {
    q: "А если у меня не получится?",
    a: "Я снимала этот курс с мыслью о человеке, который в первый раз открывает нейросеть. В материалах есть карты решений — что менять, если результат не тот. И я лично отвечаю на вопросы, так что застрять надолго не получится.",
  },
  {
    q: "Как долго будет доступ к курсу?",
    a: "Бессрочно. Вы покупаете один раз и возвращаетесь к материалам столько раз, сколько нужно.",
  },
  {
    q: "Почему 2 790 ₽, а не бесплатно?",
    a: "Одна нейрофотосессия у фотографа стоит от 5 000 ₽. Курс окупается после первого же урока — вы больше не будете платить за фотосессии для контента. Плюс бессрочный доступ и личная поддержка.",
  },
  {
    q: "Это курс про картинки или про что-то большее?",
    a: "Про систему визуального мышления. Картинки — результат. Важнее то, что вы начинаете понимать, как из идеи получается готовый материал — и это работает для любой задачи, которая появится после курса.",
  },
];

/* ─── CAROUSEL ──────────────────────────────────────────── */

function BonusCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + bonuses.length) % bonuses.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  const variants: Variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.25 } }),
  };

  return (
    <div className="relative max-w-3xl mx-auto select-none">
      {/* Desktop arrows — outside the card */}
      <button
        data-testid="carousel-prev"
        onClick={() => go(-1)}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-9 h-9 items-center justify-center rounded-full border border-white/12 text-muted-foreground hover:text-foreground hover:border-white/30 transition-all"
        aria-label="Назад"
      >
        <ChevronLeft className="w-4 h-4 stroke-[1.2]" />
      </button>
      <button
        data-testid="carousel-next"
        onClick={() => go(1)}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-9 h-9 items-center justify-center rounded-full border border-white/12 text-muted-foreground hover:text-foreground hover:border-white/30 transition-all"
        aria-label="Вперёд"
      >
        <ChevronRight className="w-4 h-4 stroke-[1.2]" />
      </button>

      {/* Card */}
      <div className="overflow-hidden rounded-3xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid md:grid-cols-2 gap-0 bg-card/50 border border-white/6"
            style={{ borderRadius: "1.5rem" }}
          >
            <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
              <img src={bonuses[current].img} alt={bonuses[current].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/60 font-light mb-5">
                {String(current + 1).padStart(2, "0")} / {String(bonuses.length).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-[1.6rem] font-light leading-[1.15] mb-4">
                {bonuses[current].title}
              </h3>
              <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                {bonuses[current].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile arrows + dots row */}
      <div className="flex items-center justify-between mt-6 md:justify-center md:gap-0">
        <button
          onClick={() => go(-1)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/12 text-muted-foreground hover:text-foreground hover:border-white/30 transition-all"
          aria-label="Назад"
        >
          <ChevronLeft className="w-4 h-4 stroke-[1.2]" />
        </button>

        <div className="flex items-center justify-center gap-2">
          {bonuses.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Слайд ${i + 1}`} className="p-1">
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "22px" : "6px",
                  height: "6px",
                  background: i === current ? "hsl(var(--primary))" : "hsl(0 0% 100% / 0.18)",
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => go(1)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/12 text-muted-foreground hover:text-foreground hover:border-white/30 transition-all"
          aria-label="Вперёд"
        >
          <ChevronRight className="w-4 h-4 stroke-[1.2]" />
        </button>
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="text-sm tracking-[0.18em] uppercase text-foreground/80 font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
            Нейровизуал от MTV
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-[13px] font-light text-muted-foreground">
            <a href="#program" className="hover:text-foreground transition-colors">Программа</a>
            <a href="#for-whom" className="hover:text-foreground transition-colors">Для кого</a>
            <a href="#price" className="hover:text-foreground transition-colors">Стоимость</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              data-testid="button-nav-join"
              onClick={openModal}
              className="rounded-full bg-primary/90 hover:bg-primary text-white px-5 py-2 text-[13px] font-normal h-auto"
            >
              Купить курс
            </Button>
            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-1">
                {[
                  { href: "#program", label: "Программа" },
                  { href: "#for-whom", label: "Для кого" },
                  { href: "#price", label: "Стоимость" },
                  { href: "#faq", label: "FAQ" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-[15px] font-light text-muted-foreground hover:text-foreground transition-colors border-b border-white/5 last:border-0"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center" src="/hero.mp4" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />

          <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-xl">
              <motion.p variants={fadeUp} className="text-[12px] tracking-[0.22em] uppercase text-primary/80 mb-5 font-light">
                AI-визуалы без хаоса сервисов
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light leading-[1.03] tracking-[-0.03em] text-white mb-2">
                Нейровизуал
              </motion.h1>
              <motion.div variants={fadeUp} className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light leading-[1.03] tracking-[-0.03em] text-primary/90 mb-7">
                от MTV
              </motion.div>
              <motion.p variants={fadeUp} className="text-[15px] text-white/65 font-light leading-relaxed mb-8 max-w-md">
                За 7 уроков — нейрофото с вашим лицом, именная книга для ребёнка, карусели и AI-визуалы — для себя, для блога, для заработка.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Button
                  data-testid="button-hero-start"
                  onClick={scrollToPrice}
                  className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3 text-[14px] font-normal h-auto group"
                >
                  Войти в AI-будущее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── УЗНАЁТЕ СЕБЯ? ── */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center mb-16">
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light mb-4">Узнаёте себя?</h2>
              <p className="text-[14px] text-muted-foreground font-light max-w-md mx-auto">Так обычно выглядит первый опыт с нейросетями, когда нет маршрута</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-4">
              {painCards.slice(0, 3).map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="bg-card/60 border-white/6 rounded-2xl h-full hover:border-primary/20 transition-colors duration-300">
                    <CardContent className="p-7 flex flex-col gap-3 h-full">
                      <p className="font-serif text-[1.15rem] font-light leading-snug text-foreground/90">{card.main}</p>
                      <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{card.sub}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-4 max-w-[672px] mx-auto">
              {painCards.slice(3).map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="bg-card/60 border-white/6 rounded-2xl h-full hover:border-primary/20 transition-colors duration-300">
                    <CardContent className="p-7 flex flex-col gap-3 h-full">
                      <p className="font-serif text-[1.15rem] font-light leading-snug text-foreground/90">{card.main}</p>
                      <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{card.sub}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── ПРОБЛЕМА НЕ В ВАС ── */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden"
              style={{ background: "linear-gradient(135deg, hsl(263 60% 14%) 0%, hsl(240 25% 8%) 60%, hsl(263 50% 10%) 100%)", border: "1px solid hsl(263 60% 30% / 0.3)" }}
            >
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/15 blur-[80px] pointer-events-none" />
              <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
                <p className="text-[11px] tracking-[0.24em] uppercase text-primary/60 font-light mb-8">Важно понять</p>
                <h3 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.12] tracking-[-0.02em] mb-6 text-white">
                  Проблема не в вас,<br />а в отсутствии маршрута.
                </h3>
                <p className="text-[15px] text-white/50 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                  На курсе вы получаете не набор знаний, а готовую систему — что выбрать, как поставить задачу и как довести до результата.
                </p>
                <Button
                  data-testid="button-cta-route"
                  onClick={scrollToPrice}
                  className="rounded-full bg-primary/90 hover:bg-primary text-white px-8 py-3 h-auto text-[14px] font-normal group"
                >
                  Хочу маршрут <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 7 УРОКОВ ── */}
        <section id="program" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">Программа</p>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] font-light mb-5 leading-[1.12]">
                7 уроков — от первого промпта<br />до готового материала
              </h2>
              <p className="text-[14px] text-muted-foreground font-light max-w-lg mx-auto">
                Каждый урок закрывает отдельную задачу и добавляет инструмент в вашу рабочую связку.
              </p>
            </motion.div>

            <Accordion type="single" collapsible defaultValue="lesson-0" className="w-full space-y-3">
              {lessons.map((lesson, i) => (
                <AccordionItem key={i} value={`lesson-${i}`} className="bg-card/50 border border-white/6 rounded-xl px-6 hover:border-primary/20 transition-colors">
                  <AccordionTrigger className="hover:no-underline text-left text-[15px] font-light py-5 text-foreground/90">
                    {lesson.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-[13px] text-muted-foreground font-light leading-relaxed mb-4">{lesson.body}</p>
                    <div className="flex items-start gap-2 p-4 rounded-xl bg-primary/6 border border-primary/15">
                      <span className="text-primary/60 mt-0.5 flex-shrink-0">→</span>
                      <p className="text-[13px] text-foreground/70 font-light leading-relaxed italic">{lesson.result}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA after program */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
              <Button
                onClick={scrollToPrice}
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3 text-[14px] font-normal h-auto group"
              >
                Хочу эти 7 уроков <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <p className="text-[12px] text-muted-foreground font-light mt-3">2 790 ₽ · бессрочный доступ</p>
            </motion.div>
          </div>
        </section>

        {/* ── AI СИСТЕМА ── */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6 mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light mb-4">
                Красивый AI-визуал — это не один удачный промпт
              </h2>
              <p className="text-[14px] text-muted-foreground font-light">Это система этапов, которые собирают результат. Курс даёт вам всю цепочку.</p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="w-full">
            <img src="/system-diagram.jpg" alt="Система AI-визуала: 7 этапов" className="w-full block" style={{ maxHeight: "640px", objectFit: "cover", objectPosition: "center" }} />
          </motion.div>
        </section>

        {/* ── КАРУСЕЛЬ БОНУСОВ ── */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">Бонусы</p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.12]">
                К урокам — всё, чтобы не застрять в процессе
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <BonusCarousel />
            </motion.div>
          </div>
        </section>

        {/* ── ВАШ РЕЗУЛЬТАТ ПОСЛЕ КУРСА ── */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">Что вы получите</p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-[1.1]">
                Конкретные результаты,<br />которые можно использовать сразу
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-3">
              {results.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/25 hover:bg-card/60 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary/70 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-[14px] font-light text-foreground/85 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── КУРС ДЛЯ ВАС, ЕСЛИ ── */}
        <section id="for-whom" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">Для кого</p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-[1.1]">
                Курс для вас, если:
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-3">
              {forWhom.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/15 transition-colors group"
                >
                  <span className="text-[1.4rem] flex-shrink-0 leading-none mt-0.5">{item.emoji}</span>
                  <p className="text-[14px] font-light text-foreground/80 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── ЧЕСТНО: КУРС НЕ ДЛЯ ВСЕХ ── */}
        <section className="pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative rounded-[2rem] overflow-hidden p-10 md:p-16"
              style={{ background: "linear-gradient(135deg, hsl(240 22% 10%) 0%, hsl(240 18% 7%) 100%)", border: "1px solid hsl(0 0% 100% / 0.06)" }}
            >
              <p className="text-[11px] tracking-[0.22em] uppercase text-foreground/40 font-light mb-6">Честно</p>
              <h3 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-light mb-8 leading-[1.15]">
                Курс не для всех
              </h3>
              <div className="space-y-4 text-[14px] text-muted-foreground font-light leading-[1.8] max-w-2xl">
                <p>
                  Нейросети правда ускоряют работу — но они не заменяют идею, вкус и желание что-то сделать. Если вы хотите просто получить список сервисов и ничего не делать, этот курс не для вас.
                </p>
                <p>
                  Но если вы готовы смотреть, повторять и пробовать на своих задачах — всё получится. Я видела, как люди без дизайнерского опыта и технического бэкграунда начинали делать материалы, которыми гордились.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ОБ АВТОРЕ ── */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.div variants={fadeUp}>
                  <span className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light">Об авторе</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] font-light mt-4 mb-10 leading-[1.08]">
                  Привет,<br />я Татьяна
                </motion.h2>
                <div className="space-y-4 text-[14px] text-muted-foreground font-light leading-[1.8] mb-12">
                  <motion.p variants={fadeUp}>
                    Я сама долго была в этом хаосе. Открывала десять вкладок, читала обзоры, сохраняла промпты — и всё равно не понимала, как из всего этого собрать что-то красивое и применимое.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    В какой-то момент я перестала собирать инструменты и начала собирать систему.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Сейчас я понимаю, зачем нужен ChatGPT, а зачем Krea. Где Midjourney даёт то, что не даст ни один другой сервис. Как Nano Banana спасает фото, которое уже почти готово. И как из всего этого собрать визуал, который выглядит дорого — даже если ты не дизайнер.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Этот курс — то, что я хотела найти сама, когда только начинала разбираться.
                  </motion.p>
                </div>
                <motion.div variants={fadeUp} className="flex gap-10 pt-8 border-t border-white/8">
                  <div>
                    <div className="font-serif text-[2.2rem] font-light text-primary mb-1">6+</div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-light">лет в дизайне</div>
                  </div>
                  <div>
                    <div className="font-serif text-[2.2rem] font-light text-primary mb-1">3+</div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-light">года с нейросетями</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                className="relative"
              >
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img src="/tatyana.jpg" alt="Татьяна" className="object-cover w-full h-full grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── КАК ЭТО УСТРОЕНО ── */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">Формат</p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-light mb-4">Как это устроено</h2>
              <p className="text-[14px] text-muted-foreground font-light">Всё в своём темпе — но с чёткой структурой и поддержкой</p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4">
              {howSteps.map((step, i) => (
                <div key={i} className="bg-card/40 border border-white/6 rounded-2xl p-6 h-full hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 text-primary/80 rounded-xl flex items-center justify-center mb-5">
                    {step.icon}
                  </div>
                  <div className="text-[11px] text-primary/50 tracking-[0.16em] uppercase mb-2 font-light">0{i + 1}</div>
                  <h3 className="font-serif text-[1.05rem] font-light mb-2 text-foreground/90">{step.title}</h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── СТОИМОСТЬ ── */}
        <section id="price" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">

            {/* Anchoring comparison */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-8">Стоимость</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light mb-10 leading-[1.12]">
                Один раз — и навсегда в арсенале
              </h2>
              {/* Price comparison strip */}
              <div className="inline-flex items-stretch gap-0 rounded-2xl overflow-hidden border border-white/8 mb-4">
                <div className="px-6 py-4 text-center border-r border-white/8">
                  <p className="text-[11px] text-muted-foreground mb-1 font-light">Фотосессия</p>
                  <p className="text-[1.1rem] font-light text-foreground/30 line-through">8 000 ₽</p>
                </div>
                <div className="px-6 py-4 text-center border-r border-white/8">
                  <p className="text-[11px] text-muted-foreground mb-1 font-light">Дизайнер / час</p>
                  <p className="text-[1.1rem] font-light text-foreground/30 line-through">3 000 ₽</p>
                </div>
                <div className="px-6 py-4 text-center bg-primary/10">
                  <p className="text-[11px] text-primary/70 mb-1 font-light">Этот курс</p>
                  <p className="text-[1.1rem] font-light text-primary">2 790 ₽</p>
                </div>
              </div>
              <p className="text-[12px] text-muted-foreground font-light">Окупается после первого урока — вы больше не платите за фотосессии для контента</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="grid md:grid-cols-2 gap-0 bg-card/40 border border-white/6 rounded-3xl overflow-hidden">
                <div className="p-10 md:p-14">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground font-light mb-6 block">Полный доступ</span>
                  <h2 className="font-serif text-[2.2rem] font-light mb-5 leading-[1.1]">Курс «Нейровизуал»</h2>
                  <p className="text-[13px] text-muted-foreground font-light mb-8 leading-relaxed">
                    Бессрочный доступ ко всем урокам, конспектам, бонусам и обновлениям курса. Обратная связь от меня лично.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "7 видеоуроков — от промпта до готового материала",
                      "4 бонуса: конспекты, промпты, карта Midjourney, урок о каруселях",
                      "Личная поддержка автора",
                      "Бессрочный доступ + все будущие обновления",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                        <span className="text-[13px] font-light text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card/60 border-t md:border-t-0 md:border-l border-white/6 p-10 md:p-14 flex flex-col justify-center">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-5">Стоимость участия</div>
                  <div className="font-serif text-[clamp(3rem,6vw,4.5rem)] font-light tracking-[-0.02em] mb-2 leading-none">2 790 ₽</div>
                  <p className="text-[12px] text-muted-foreground font-light mb-8">Единоразово · без подписок</p>
                  <Button
                    data-testid="button-pricing-buy"
                    onClick={openModal}
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white py-4 text-[14px] font-normal h-auto mb-4 shadow-[0_8px_40px_-8px_hsl(263_75%_60%/0.5)]"
                  >
                    Хочу в курс <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-center text-[12px] text-muted-foreground font-light flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> Безопасная оплата · доступ сразу после оплаты
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">FAQ</p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-light mb-4">Отвечаю на главные вопросы</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card/50 border border-white/6 rounded-xl px-6 hover:border-primary/20 transition-colors">
                  <AccordionTrigger className="hover:no-underline text-left text-[15px] font-light py-5 text-foreground/90">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[13px] text-muted-foreground pb-5 leading-relaxed font-light">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
              <Button
                onClick={openModal}
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3 text-[14px] font-normal h-auto group"
              >
                Хочу в курс <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ── ФИНАЛЬНЫЙ CTA ── */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden text-center px-8 md:px-16 py-20 md:py-28"
              style={{ background: "linear-gradient(135deg, hsl(263 70% 20%) 0%, hsl(263 60% 35%) 50%, hsl(280 65% 28%) 100%)" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(263_80%_60%/0.25),transparent_70%)]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-serif text-[clamp(2.4rem,6vw,4.2rem)] font-light leading-[1.08] tracking-[-0.02em] text-white mb-6">
                  Начните с понятного маршрута
                </h2>
                <p className="text-[14px] text-white/65 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                  Нейросети не станут проще от ещё одного обзора. Они станут понятнее, когда появится система: что выбрать, как поставить задачу, как довести до результата. Именно это даёт курс.
                </p>
                <div className="text-[13px] text-white/50 font-light mb-6">
                  2 790 ₽ · бессрочный доступ · поддержка автора
                </div>
                <Button
                  data-testid="button-final-cta"
                  onClick={openModal}
                  className="rounded-full bg-white text-background hover:bg-white/90 px-10 py-4 text-[14px] font-normal h-auto shadow-2xl group"
                >
                  Хочу в курс <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <p className="text-[11px] text-white/35 font-light tracking-[0.18em] uppercase mt-6">
                  Доступ сразу после оплаты
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 pt-14 pb-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="text-[13px] tracking-[0.18em] uppercase text-foreground/70 mb-4 font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
                Нейровизуал от MTV
              </div>
              <p className="text-[13px] text-muted-foreground font-light leading-relaxed mb-4">
                Курс по созданию AI-визуалов: от концепции и промпта до готового материала.
              </p>
              <p className="text-[12px] text-muted-foreground/60 font-light leading-relaxed">
                Самозанятая Мальцева Татьяна Владимировна<br />
                ИНН 183403617282
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground/50 font-light mb-1">Навигация</p>
              {[
                { label: "Программа", href: "#program" },
                { label: "Для кого", href: "#for-whom" },
                { label: "Стоимость", href: "#price" },
                { label: "FAQ", href: "#faq" },
              ].map(({ label, href }) => (
                <a key={href} href={href} className="text-[13px] font-light text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground/50 font-light mb-1">Документы</p>
              {[
                { label: "Публичная оферта", href: "/offer" },
                { label: "Политика обработки персональных данных", href: "/privacy-policy" },
                { label: "Согласие на обработку ПД", href: "/personal-data-consent" },
                { label: "Согласие на рассылку", href: "/marketing-consent" },
              ].map(({ label, href }) => (
                <a key={href} href={href} className="text-[13px] font-light text-muted-foreground hover:text-foreground transition-colors leading-snug">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-start md:items-end gap-5">
              <Button
                data-testid="button-footer-join"
                onClick={openModal}
                className="rounded-full bg-primary/90 hover:bg-primary text-white px-6 py-2 h-auto text-[13px] font-normal"
              >
                Купить курс <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
              <p className="text-[12px] text-muted-foreground font-light">2 790 ₽ · бессрочный доступ</p>
              <a
                href="mailto:maltceva-tat@mail.ru"
                className="text-[13px] font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                maltceva-tat@mail.ru
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-muted-foreground font-light">
            <span>© 2026 Нейровизуал от MTV. Все права защищены.</span>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/offer" className="hover:text-foreground transition-colors">Оферта</a>
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">Политика ПД</a>
              <a href="/personal-data-consent" className="hover:text-foreground transition-colors">Согласие на ОПД</a>
              <a href="/marketing-consent" className="hover:text-foreground transition-colors">Рассылка</a>
            </div>
          </div>
        </div>
      </footer>

      <PaymentModal open={showModal} onClose={closeModal} />
    </div>
  );
}
