import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Image as ImageIcon,
  Wand2,
  MonitorPlay,
  Lightbulb,
  Sparkles,
  BookOpen,
  Users,
  Lock,
  PlayCircle,
  FileText,
  Target,
  MessageCircle,
  Award,
  Globe,
  Share2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const painCards = [
  {
    main: "«Сохраняю всё, но не начинаю»",
    sub: "Ссылки есть, а результата нет.",
  },
  {
    main: "«Картинка есть, но выкладывать стыдно»",
    sub: "Смотрю тысячи туториалов по AI.",
  },
  {
    main: "«Идея есть, но я не понимаю, как её сделать»",
    sub: "В голове красиво, на экране — не то.",
  },
  {
    main: "«Я не дизайнер, но хочу красиво»",
    sub: "Без команды и сложных программ.",
  },
  {
    main: "«Не понимаю, какая нейросеть для чего»",
    sub: "Фото, текст, дизайн — всё вразнобой.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-[60px] flex items-center justify-between">
          <div
            className="text-sm tracking-[0.18em] uppercase text-foreground/80"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, letterSpacing: "0.16em" }}
          >
            Нейровизуал от MTV
          </div>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-light text-muted-foreground tracking-wide">
            <a href="#program" className="hover:text-foreground transition-colors duration-200">Программа</a>
            <a href="#for-whom" className="hover:text-foreground transition-colors duration-200">Для кого</a>
            <a href="#price" className="hover:text-foreground transition-colors duration-200">Стоимость</a>
            <a href="#faq" className="hover:text-foreground transition-colors duration-200">FAQ</a>
          </div>
          <Button
            data-testid="button-nav-join"
            className="rounded-full bg-primary/90 hover:bg-primary text-white px-5 py-2 text-[13px] font-normal tracking-wide h-auto"
          >
            Присоединиться
          </Button>
        </div>
      </nav>

      <main>
        {/* ── HERO — VIDEO BANNER ── */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          {/* video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.mp4"
          />
          {/* layered gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />

          <div className="relative z-10 container mx-auto px-6 pb-28 pt-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-[12px] tracking-[0.22em] uppercase text-primary/80 mb-5 font-light"
              >
                AI-визуалы без хаоса сервисов
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-serif text-[clamp(3.2rem,8vw,6rem)] font-light leading-[1.03] tracking-[-0.03em] text-white mb-2"
              >
                Нейровизуал
              </motion.h1>
              <motion.div
                variants={fadeUp}
                className="font-serif text-[clamp(3.2rem,8vw,6rem)] font-light leading-[1.03] tracking-[-0.03em] text-primary/90 mb-8"
              >
                от MTV
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="text-[15px] text-white/60 font-light leading-relaxed mb-10 max-w-md"
              >
                За неделю вы найдёте, как создавать нейрофото, обложки, карусели и интенты для своих проектов — даже если вы не дизайнер.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button
                  data-testid="button-hero-start"
                  className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3 text-[14px] font-normal tracking-wide h-auto group"
                >
                  Хочу начать
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── УЗНАЁТЕ СЕБЯ? ── */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-20"
            >
              <h2 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-light mb-4">Узнаёте себя?</h2>
              <p className="text-[14px] text-muted-foreground font-light max-w-md mx-auto">
                Так обычно выглядит первый опыт с нейросетями, когда нет маршрута
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-4"
            >
              {painCards.slice(0, 3).map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="bg-card/60 border-white/6 rounded-2xl h-full hover:border-primary/20 transition-colors duration-300">
                    <CardContent className="p-7 flex flex-col gap-3 h-full">
                      <p className="font-serif text-[1.15rem] font-light leading-snug text-foreground/90">
                        {card.main}
                      </p>
                      <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                        {card.sub}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-4 max-w-[672px] mx-auto"
            >
              {painCards.slice(3).map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="bg-card/60 border-white/6 rounded-2xl h-full hover:border-primary/20 transition-colors duration-300">
                    <CardContent className="p-7 flex flex-col gap-3 h-full">
                      <p className="font-serif text-[1.15rem] font-light leading-snug text-foreground/90">
                        {card.main}
                      </p>
                      <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                        {card.sub}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── ПРОБЛЕМА НЕ В ВАС ── */}
        <section className="py-8 pb-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(263 60% 14%) 0%, hsl(240 25% 8%) 60%, hsl(263 50% 10%) 100%)",
                border: "1px solid hsl(263 60% 30% / 0.3)",
              }}
            >
              {/* subtle glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/15 blur-[80px] pointer-events-none" />
              <div className="relative z-10 px-12 py-20 text-center">
                <p className="text-[11px] tracking-[0.24em] uppercase text-primary/60 font-light mb-8">Важно понять</p>
                <h3 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.12] tracking-[-0.02em] mb-6 text-white">
                  Проблема не в вас,<br />а в отсутствии маршрута.
                </h3>
                <p className="text-[15px] text-white/50 font-light max-w-xl mx-auto mb-12 leading-relaxed">
                  На курсе вы получаете не набор знаний, а готовую систему для результата.
                </p>
                <Button
                  data-testid="button-cta-route"
                  className="rounded-full bg-primary/90 hover:bg-primary text-white px-8 py-3 h-auto text-[14px] font-normal tracking-wide group"
                >
                  Хочу маршрут
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ОБ АВТОРЕ ── */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp}>
                  <span className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light">
                    Об авторе
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-light mt-4 mb-10 leading-[1.08]"
                >
                  Привет,<br />я Татьяна
                </motion.h2>

                <div className="space-y-5 text-[14px] text-muted-foreground font-light leading-[1.8] mb-12">
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

                <motion.div
                  variants={fadeUp}
                  className="flex gap-10 pt-8 border-t border-white/8"
                >
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
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img
                    src="/tatyana.jpg"
                    alt="Татьяна"
                    className="object-cover w-full h-full grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── КРАСИВЫЙ AI-ВИЗУАЛ — SYSTEM DIAGRAM IMAGE ── */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light mb-4">
                Красивый AI-визуал — это не один удачный промпт
              </h2>
              <p className="text-[14px] text-muted-foreground font-light">
                Это система этапов, которые собирают результат.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="w-full"
          >
            <img
              src="/system-diagram.png"
              alt="Система AI-визуала: 7 этапов"
              className="w-full object-cover block"
              style={{ maxHeight: "680px", objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>
        </section>

        {/* ── 7 УРОКОВ ── */}
        <section id="program" className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] font-light mb-5 leading-[1.12]">
                7 уроков — от первого промпта<br />до готового материала
              </h2>
              <p className="text-[14px] text-muted-foreground font-light max-w-lg mx-auto">
                Не хаотичные видео, а только применение AI-решений, которые дадут реальный результат.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                "Урок 1. ChatGPT как личный AI-советник",
                "Урок 2. Midjourney — Яблоко",
                "Урок 3. Нейрофотосессия через Pinterest — Higgsfield",
                "Урок 4. Реалистичная фото — Nano Banana",
                "Урок 5. Мифрайн — самостоятельность, акцент, редактор",
                "Урок 6. Сцена → Canva, Figma и голос",
                "Урок 7. Готовый материал и финальная подача",
              ].map((lesson, i) => (
                <AccordionItem
                  key={i}
                  value={`lesson-${i}`}
                  className="bg-card/50 border border-white/6 rounded-xl px-6 hover:border-primary/20 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline text-left text-[15px] font-light py-5 text-foreground/90">
                    {lesson}
                  </AccordionTrigger>
                  <AccordionContent className="text-[13px] text-muted-foreground pb-5 leading-relaxed font-light">
                    В этом уроке мы подробно разберём все аспекты работы с инструментом, создадим первые результаты и научимся применять их на практике.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── БОНУСЫ (PDF + библиотека) ── */}
        <section className="py-16 pb-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-white/6 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors">
                <CardContent className="p-10">
                  <h3 className="font-serif text-[1.8rem] font-light mb-3">PDF-гайды</h3>
                  <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                    Подробные инструкции и схемы работы, которые всегда под рукой.
                  </p>
                  <div className="mt-10 h-40 rounded-xl bg-white/3 border border-white/6 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-primary/30" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/6 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors">
                <CardContent className="p-10">
                  <h3 className="font-serif text-[1.8rem] font-light mb-3">Библиотека промптов</h3>
                  <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                    Готовые проверенные запросы для разных задач и стилей.
                  </p>
                  <div className="mt-10 h-40 rounded-xl bg-white/3 border border-white/6 flex items-center justify-center">
                    <Target className="w-16 h-16 text-primary/30" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── ВАМ ПОНРАВИТСЯ ── */}
        <section id="for-whom" className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-20"
            >
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light text-center leading-[1.1]">
                Вам понравится, если вы:
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: <MonitorPlay className="w-5 h-5" />, text: "Хотите получать красивые нейрофото и видео, тратя минимум времени" },
                { icon: <Lightbulb className="w-5 h-5" />, text: "Не хотите учиться каждому сервису отдельно — хотите систему" },
                { icon: <Sparkles className="w-5 h-5" />, text: "Хотите создать личный бренд и делать AI-контент самостоятельно" },
                { icon: <Award className="w-5 h-5" />, text: "Работаете с контентом и хотите выйти на новый уровень" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col gap-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary/80 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── ДЛЯ ВАС, ЕСЛИ ── */}
        <section className="py-16 pb-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Вы хотите освоить применение AI, чтобы создавать нейрофото, видео и обложки для своих задач — без ограничений.",
                "Вы хотите реализовать личный бренд, создавая AI-контент самостоятельно. Без лишних расходов.",
                "Вы работаете с клиентами и хотите добавить нейросети как инструмент в работу.",
                "Вы верите в будущее AI и хотите использовать его качественно и осознанно.",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-7 rounded-2xl bg-card/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                  <p className="text-[13px] font-light text-foreground/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ЧТО ЖДЁТ ВАС ── */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light">
                Что ждёт вас
              </span>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="i1" className="bg-card/50 border border-white/6 rounded-xl px-6 hover:border-primary/20 transition-colors">
                <AccordionTrigger className="hover:no-underline text-left text-[15px] font-light py-5 text-foreground/90">
                  AI не заменит вас — он заменит тех, кто не умеет его использовать.
                </AccordionTrigger>
                <AccordionContent className="text-[13px] text-muted-foreground pb-5 leading-relaxed font-light">
                  Но только если вы действительно умеете — не просто пишете промпт, а получаете результат. Этот курс именно об этом — системный подход, который работает.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="i2" className="bg-card/50 border border-white/6 rounded-xl px-6 hover:border-primary/20 transition-colors">
                <AccordionTrigger className="hover:no-underline text-left text-[15px] font-light py-5 text-foreground/90">
                  И для этого вам не нужно покупать дорогие подписки на все AI-сервисы.
                </AccordionTrigger>
                <AccordionContent className="text-[13px] text-muted-foreground pb-5 leading-relaxed font-light">
                  На курсе вы разберётесь, что именно подходит под ваши задачи. Чтобы дойти до этого самостоятельно — нужно время и много нервов. Этот курс сокращает этот путь.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="i3" className="bg-card/50 border border-white/6 rounded-xl px-6 hover:border-primary/20 transition-colors">
                <AccordionTrigger className="hover:no-underline text-left text-[15px] font-light py-5 text-foreground/90">
                  Если вы умеете ChatGPT — вы ещё не умеете работать с нейросетями.
                </AccordionTrigger>
                <AccordionContent className="text-[13px] text-muted-foreground pb-5 leading-relaxed font-light">
                  Хаос инструментов не даёт результата — даёт система. Один раз разобраться — и вы начинаете получать результат каждый раз.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* ── БОНУСЫ (3 карточки) ── */}
        <section className="py-16 pb-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light">
                Бонусы
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: <BookOpen className="w-5 h-5" />, title: "Живое обучение", desc: "Вы учитесь по уровням: 7 уроков, которые идут последовательно и дополняют друг друга." },
                { icon: <Users className="w-5 h-5" />, title: "Закрытый комьюнити", desc: "Чат-группа с другими участниками для вопросов и поддержки." },
                { icon: <Lock className="w-5 h-5" />, title: "Личный доступ", desc: "Безлимитный доступ к курсу навсегда — в своём темпе." },
              ].map((card, i) => (
                <Card key={i} className="bg-card/50 border-white/6 rounded-2xl hover:border-primary/20 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-10 h-10 bg-primary/10 text-primary/80 rounded-xl flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <h3 className="font-serif text-[1.3rem] font-light mb-3">{card.title}</h3>
                    <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── КАК ЭТО УСТРОЕНО ── */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-20"
            >
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light mb-4">Как это устроено</h2>
              <p className="text-[14px] text-muted-foreground font-light max-w-sm mx-auto">
                Ваш путь к мастерству в AI-визуале через чёткую и понятную систему.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { icon: <PlayCircle className="w-5 h-5" />, title: "Смотреть урок", desc: "Понятно объясняем нюансы — не теория, а практика" },
                { icon: <FileText className="w-5 h-5" />, title: "Открыть конспект", desc: "Промпты, подсказки и схемы. Не нужно пересматривать видео" },
                { icon: <Target className="w-5 h-5" />, title: "Выполнить задание", desc: "Каждый урок заканчивается практикой. Без неё нет навыка" },
                { icon: <MessageCircle className="w-5 h-5" />, title: "Задать вопрос", desc: "Личная обратная связь от автора на каждом этапе" },
                { icon: <Award className="w-5 h-5" />, title: "Получить результат", desc: "Реальный визуал, который можно использовать" },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-card/40 border border-white/6 rounded-2xl p-6 h-full hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 text-primary/80 rounded-xl flex items-center justify-center mb-5">
                      {step.icon}
                    </div>
                    <div className="text-[11px] text-primary/50 tracking-[0.16em] uppercase mb-2 font-light">
                      0{i + 1}
                    </div>
                    <h3 className="font-serif text-[1.05rem] font-light mb-2 text-foreground/90">
                      {step.title}
                    </h3>
                    <p className="text-[12px] text-muted-foreground leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── СТОИМОСТЬ ── */}
        <section id="price" className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-1 bg-card/40 border border-white/6 rounded-3xl overflow-hidden">
              <div className="p-12 lg:p-16">
                <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground font-light mb-6 block">
                  Полный доступ
                </span>
                <h2 className="font-serif text-[2.4rem] font-light mb-6 leading-[1.1]">
                  Курс «Нейровизуал»
                </h2>
                <p className="text-[13px] text-muted-foreground font-light mb-10 leading-relaxed">
                  Безлимитный доступ ко всем урокам, конспектам, бонусам и обновлениям курса. Личная обратная связь от автора на каждом этапе обучения.
                </p>
                <ul className="space-y-4">
                  {[
                    "Все учебные модули",
                    "Личная поддержка автора",
                    "Библиотека промптов",
                    "Обновления навсегда",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <span className="text-[13px] font-light text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card/60 border-l border-white/6 p-12 lg:p-16 flex flex-col justify-center">
                <div className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-6">
                  Стоимость участия
                </div>
                <div className="font-serif text-[clamp(3rem,6vw,4.5rem)] font-light tracking-[-0.02em] mb-8 leading-none">
                  2790 ₽
                </div>
                <Button
                  data-testid="button-pricing-buy"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white py-4 text-[14px] font-normal tracking-wide h-auto mb-5 shadow-[0_8px_40px_-8px_hsl(263_75%_60%/0.5)]"
                >
                  Хочу в курс <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-center text-[12px] text-muted-foreground font-light flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" /> Безлимитный доступ навсегда
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light mb-4">Частые вопросы</h2>
              <p className="text-[14px] text-muted-foreground font-light">
                Ответы на то, что чаще всего волнует будущих участников.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                "Нужно ли разбираться в дизайне или нейросетях?",
                "Нужно ли покупать платные подписки на сервисы?",
                "Я уже пробовала нейросети. Будет ли мне это интересно?",
                "А если у меня не получится?",
                "Как долго будет доступ к курсу?",
                "Это курс про картинки или про что-то большее?",
              ].map((q, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card/50 border border-white/6 rounded-xl px-6 hover:border-primary/20 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline text-left text-[15px] font-light py-5 text-foreground/90">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[13px] text-muted-foreground pb-5 leading-relaxed font-light">
                    Мы подготовили курс так, чтобы он был полезен и понятен как новичкам, так и тем, кто уже имеет базовый опыт. Все необходимые инструкции и пояснения включены в уроки.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── ФИНАЛЬНЫЙ CTA ── */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden text-center px-10 py-24"
              style={{
                background: "linear-gradient(135deg, hsl(263 70% 20%) 0%, hsl(263 60% 35%) 50%, hsl(280 65% 28%) 100%)",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(263_80%_60%/0.25),transparent_70%)]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-serif text-[clamp(2.6rem,6vw,4.4rem)] font-light leading-[1.08] tracking-[-0.02em] text-white mb-8">
                  Начните с понятного маршрута
                </h2>
                <p className="text-[14px] text-white/65 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                  Нейросети не станут проще от того, что вы посмотрите ещё один обзор. Они станут понятными, когда появится система: что выбрать, как поставить задачу, как довести до результата. Именно это даёт курс «Нейровизуал от MTV» — за неделю, в своём темпе, с результатами в руках.
                </p>
                <div className="text-[13px] text-white/50 font-light mb-8">
                  2 790 ₽ — Безлимитный доступ · Обратная связь от автора
                </div>
                <Button
                  data-testid="button-final-cta"
                  className="rounded-full bg-white text-background hover:bg-white/90 px-10 py-4 text-[14px] font-normal tracking-wide h-auto shadow-2xl group"
                >
                  Присоединиться к курсу
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <p className="text-[10px] text-white/35 font-light tracking-[0.22em] uppercase mt-8">
                  От идеи — к результату, который можно использовать
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 pt-16 pb-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div
                className="text-[13px] tracking-[0.18em] uppercase text-foreground/70 mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                Нейровизуал от MTV
              </div>
              <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                Курс по созданию AI-визуалов: от концепции и промпта до готового материала.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {["Уроки", "Конспекты", "Бонусы", "Практика"].map((link) => (
                <a key={link} href="#" className="text-[13px] font-light text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-start md:items-end gap-6">
              <Button
                data-testid="button-footer-join"
                className="rounded-full bg-primary/90 hover:bg-primary text-white px-6 py-2 h-auto text-[13px] font-normal tracking-wide"
              >
                Присоединиться <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
              <div className="flex gap-3 text-muted-foreground">
                <button className="hover:text-foreground transition-colors p-1.5"><Globe className="w-4 h-4" /></button>
                <button className="hover:text-foreground transition-colors p-1.5"><Share2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-[12px] text-muted-foreground font-light">
            © 2024 NeuroVisual AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
