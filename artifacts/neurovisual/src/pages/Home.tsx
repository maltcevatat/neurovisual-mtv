import React from "react";
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
  Share2
} from "lucide-react";
import heroWoman from "@/assets/hero-woman.png";
import authorWoman from "@/assets/author-woman.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-sm tracking-wider uppercase">Нейровизуал от MTV</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#program" className="hover:text-foreground transition-colors">Программа</a>
            <a href="#for-whom" className="hover:text-foreground transition-colors">Для кого</a>
            <a href="#price" className="hover:text-foreground transition-colors">Стоимость</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <Button data-testid="button-nav-join" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Присоединиться
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        {/* 2. HERO SECTION */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black leading-none mb-2">
                  Нейровизуал
                </motion.h1>
                <motion.div variants={fadeUp} className="text-3xl md:text-5xl font-bold text-primary mb-6">
                  от MTV
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
                  AI-визуалы без хаоса сервисов
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                  За неделю вы найдёте, как создавать нейрофото, обложки, карусели и интенты для своих проектов — даже если вы не дизайнер.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Button data-testid="button-hero-start" size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                    Хочу начать <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-border/50 shadow-2xl">
                  <img 
                    src={heroWoman} 
                    alt="Professional woman using AI" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-10 bg-card/80 backdrop-blur border border-border p-4 rounded-xl shadow-xl flex items-center gap-3"
                >
                  <Wand2 className="text-primary h-6 w-6" />
                  <div className="text-sm font-medium">Generation Complete</div>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-10 bg-card/80 backdrop-blur border border-border p-4 rounded-xl shadow-xl flex items-center gap-3"
                >
                  <ImageIcon className="text-primary h-6 w-6" />
                  <div className="text-sm font-medium">Style Matched</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. "УЗНАЁТЕ СЕБЯ?" SECTION */}
        <section className="py-24 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Узнаёте себя?</h2>
              <p className="text-xl text-muted-foreground">Так обычно выглядит первый запрос с нейросетями, когда нет маршрута</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
              <Card className="bg-card border-border/50 shadow-lg">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-lg font-medium mb-4">"Сохраняю всё, но не понимаю почему красиво"</p>
                  <p className="text-sm text-muted-foreground italic">Откладываю на потом. Буду делать</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 shadow-lg">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-lg font-medium mb-4">"Картинка есть, но выглядит, не выглядит, как я хотела"</p>
                  <p className="text-sm text-muted-foreground italic">Смотрю тысячи туториалов по AI</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 shadow-lg">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-lg font-medium mb-4">"Ищу стиль, до я не понимаю, какой он есть"</p>
                  <p className="text-sm text-muted-foreground italic">В самом начале. Пока — нет... нет...</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="bg-card border-border/50 shadow-lg">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-lg font-medium mb-4">"Я не дизайнер, но хочу красивых проектов"</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 shadow-lg">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-lg font-medium mb-4">"Не понимаю, какой ответить для того"</p>
                  <p className="text-sm text-muted-foreground italic">Вот, вот, делай – вот оно не красиво...</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. DARK CTA CARD SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="bg-card border-primary/20 shadow-2xl shadow-primary/5 max-w-4xl mx-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
                <CardContent className="p-12 text-center relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Проблема не в вас, а в отсутствии маршрута.</h3>
                  <p className="text-xl text-muted-foreground mb-10">На курсе вы получаете не набор знаний, а готовую систему для результата.</p>
                  <Button data-testid="button-cta-route" size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                    Хочу маршрут <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* 5. "ОБ АВТОРЕ" SECTION */}
        <section className="py-24 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <Badge variant="outline" className="border-primary/50 text-primary mb-6 py-1 px-3">ОБ АВТОРЕ</Badge>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8">Привет, я Татьяна</motion.h2>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                  <motion.p variants={fadeUp}>
                    Я сама была в том же месте. Открывала доуты ведений, читала обзоры, пробовала — в всё равно не понимала, как выйти из этого цикла и как это применить.
                    <br/><br/>
                    В какой-то момент я перестала собирать инструменты и начала собирать систему.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Сейчас я понимаю, зачем нужен ChatGPT, зачем Яно, Krea, Ги. Nano Banana делает то, что нужно конкретной задаче. А Nano Banana делает то, что нужно всего несколько шагов, который выглядит здорово — даже если по виду никто не разбирается.
                  </motion.p>
                </div>

                <motion.div variants={fadeUp} className="flex gap-8 border-t border-border/50 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">6+ лет</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">в дизайне</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">3+ года</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">с нейросетями</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-border/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={authorWoman} 
                    alt="Татьяна" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. "КРАСИВЫЙ AI-ВИЗУАЛ" SECTION */}
        <section className="py-32 overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-24 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Красивый AI-визуал — это не один удачный промпт</h2>
              <p className="text-xl text-muted-foreground">Это система этапов, которые собирают результат.</p>
            </motion.div>

            {/* CSS Orbit Diagram */}
            <div className="relative w-full max-w-[800px] aspect-square mx-auto my-20">
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-[10%] rounded-full border border-primary/30" />
              <div className="absolute inset-[20%] rounded-full border border-primary/40 shadow-[0_0_60px_-15px_var(--color-primary)]" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-card rounded-full border border-primary/50 flex items-center justify-center p-8 text-center shadow-2xl z-10">
                <p className="font-semibold text-lg">Не один промпт. А система.<br/><span className="text-primary mt-2 block">Красивый визуал собирается поэтапно.</span></p>
              </div>

              {/* 7 Steps placed around the circle */}
              {[
                { num: "01", title: "Ком", desc: "(Расшифр. попромпт: задача, в нашей цепочке)" },
                { num: "02", title: "Смысл", desc: "(Формулируем смысл и идею для нашей аудитории)" },
                { num: "03", title: "Промпт", desc: "(Превращаем смысл в промпт для нейросети)" },
                { num: "04", title: "Инструмент", desc: "(Выбираем нейросеть для задачи)" },
                { num: "05", title: "Результат", desc: "(Доводим, улучшаем, и сохраняем результат)" },
                { num: "06", title: "Дизайн", desc: "(Упаковываем в красивый и понятный дизайн)" },
                { num: "07", title: "Готовый материал", desc: "(Финальный материал для вашей задачи)" },
              ].map((step, i) => {
                const angle = (i * (360 / 7)) - 90; // Start at top
                const radius = 380; // Distance from center
                const rad = angle * (Math.PI / 180);
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 w-64 bg-card/90 backdrop-blur p-4 rounded-xl border border-border shadow-lg"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <div className="text-primary font-bold text-sm mb-1">{step.num} {step.title}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{step.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. "7 УРОКОВ" SECTION */}
        <section id="program" className="py-24 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">7 уроков — от первого промпта до готового материала</h2>
              <p className="text-xl text-muted-foreground">Весь инструментарий нейросетей в хаотичных видео, а здесь только применение AI решений, которые дадут реальный результат.</p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                "Урок 1. ChatGPT как личный AI-советник",
                "Урок 2. Midjourney — Яблоко",
                "Урок 3. Нейрофотосессия через Pinterest — Higgsfield",
                "Урок 4. Реалистичная фото — Nano Banana",
                "Урок 5. Мифрайн — самостоятельность, акцент, редактор",
                "Урок 6. Сцена → Canva, Figma и голос",
                "Урок 7. Сцена → Canva, Figma и голос"
              ].map((lesson, i) => (
                <AccordionItem key={i} value={`lesson-${i}`} className="bg-card border border-border/50 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline text-left text-lg font-medium py-6">
                    {lesson}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    В этом уроке мы подробно разберем все аспекты работы с инструментом, создадим первые результаты и научимся применять их на практике.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 8. BONUSES SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border/50 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-10">
                    <h3 className="text-2xl font-bold mb-4">PDF-гайды</h3>
                    <p className="text-muted-foreground mb-8">Подробные инструкции и схемы работы, которые всегда под рукой.</p>
                  </div>
                  <div className="h-64 bg-secondary/50 mx-10 rounded-t-2xl border-t border-x border-border/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    <FileText className="w-24 h-24 text-primary/50" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-10">
                    <h3 className="text-2xl font-bold mb-4">Библиотека промптов</h3>
                    <p className="text-muted-foreground mb-8">Готовые проверенные запросы для разных задач и стилей.</p>
                  </div>
                  <div className="h-64 bg-secondary/50 mx-10 rounded-t-2xl border-t border-x border-border/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    <Target className="w-24 h-24 text-primary/50" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 9. "ВАМ ПОНРАВИТСЯ" SECTION */}
        <section id="for-whom" className="py-24 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Вам понравится, если вы:</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <MonitorPlay className="w-8 h-8" />, text: "Хотите получать красивые нейрофото и видео, при этом тратить минимум времени" },
                { icon: <Lightbulb className="w-8 h-8" />, text: "Не хотите учиться каждому сервису отдельно, хотите получить систему управления AI инструментами" },
                { icon: <Sparkles className="w-8 h-8" />, text: "Хотите создать личный бренд и начать делать, создания своего AI бренда самостоятельно" },
                { icon: <Award className="w-8 h-8" />, text: "Вы работаете с контентом и хотите выйти на новый уровень в качественных результатах с AI инструментами" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. TWO-COLUMN SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg">Вы точно к нам, если хотите освоить применение AI, чтобы создавать нейрофото, видео и обложки для своих задач — без ограничений</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg">Вы реализуете: личный бренд и личного создания, создавая свой AI контент самостоятельно. Без лишних расходов.</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg">Вы работаете с клиентами и хотите добавить нейросети как сервис или инструмент в работу. AI это не просто</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg">Вы четкий разработчик и верите в будущее, не нашел пути пока в качественных и продуманных информациях.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. "ЧТО ЖДЕТ ВАС" SECTION (accordion) */}
        <section className="py-24 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-primary/50 text-primary py-1 px-3">ЧТО ЖДЕТ ВАС</Badge>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline text-left text-lg font-medium py-6">
                  AI не заменит вас - он заменит тех, кто не умеет его использовать.
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  Но только, если вы действительно умеете — не просто пишите промпт, а получаете результат. Этот курс именно об этом — системный подход, который работает.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-card border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline text-left text-lg font-medium py-6">
                  И для этого вам не нужно покупать дорогие подписки на все AI сервисы.
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  На курсе вы сможете разобраться, что именно подходит под ваши задачи. Там одни, чтобы к этому придти — нужно время и много нервов. Этот курс сокращает этот путь.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-card border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline text-left text-lg font-medium py-6">
                  Если вы умеете ChatGPT — вы ещё не умеете работать с нейросетями.
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  Хаос инструментов не дает результата — дает система. Один раз разобраться один раз — и вы начинаете получать результат каждый раз.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 12. BONUSES SECTION (3 cards) */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-primary/50 text-primary py-1 px-3">К КАЖДОМУ УРОКУ</Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border/50 shadow-lg hover:border-primary/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Формат: живое обучение</h3>
                  <p className="text-muted-foreground">Вы учитесь по уровням: 7 уроков, которые идут в соответствии</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 shadow-lg hover:border-primary/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Закрытый комьюнити</h3>
                  <p className="text-muted-foreground">Чат-группа с другими участниками для вопросов</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 shadow-lg hover:border-primary/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Личный доступ</h3>
                  <p className="text-muted-foreground">Открытый доступ к курсу, который можно выйти на Notion или Google</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 13. "КАК ЭТО УСТРОЕНО" SECTION */}
        <section className="py-24 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Как это устроено</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ваш путь к мастерству в AI-нейтрализации через четкую и понятную систему.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: <PlayCircle />, title: "Смотреть урок", desc: "в понятном виде на не темы, а объясняет все нюансы и делится" },
                { icon: <FileText />, title: "Открыть конспект", desc: "Здесь, промпты, подсказки, схемы, созданные именно задачи. Не переводишь видео" },
                { icon: <Target />, title: "Выполнить задание", desc: "Каждый урок заканчивается на практической задаче. Без практики нет навыка" },
                { icon: <MessageCircle />, title: "Задать вопрос", desc: "в личном открытом чате дать ответить в практике ответы. Только один по одному" },
                { icon: <Award />, title: "Получить результат", desc: "по полному курсу провела реальный результат который по сути" }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-card border border-border/50 rounded-2xl p-6 h-full shadow-lg relative z-10">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-12 left-[80%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. PRICING SECTION */}
        <section id="price" className="py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card border border-border/50 rounded-3xl p-2 sm:p-4">
              <div className="p-8 lg:p-12">
                <Badge variant="outline" className="border-border text-muted-foreground mb-6">ПОЛНЫЙ ДОСТУП</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Курс «Нейровизуал»</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Безлимитный доступ ко всем урокам, конспектам, бонусам и обновлениям курса. Личная обратная связь от автора на каждом этапе обучения.
                </p>
                <ul className="space-y-4">
                  {[
                    "Все учебные модули",
                    "Личная поддержка автора",
                    "Библиотека промптов",
                    "Обновления навсегда"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background rounded-2xl border border-primary/30 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
                
                <div className="text-sm font-semibold text-primary mb-4 tracking-wider">СТОИМОСТЬ УЧАСТИЯ</div>
                <div className="text-5xl lg:text-6xl font-black mb-8">2790 ₽</div>
                
                <Button data-testid="button-pricing-buy" className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-lg font-bold mb-6 shadow-[0_0_30px_-5px_var(--color-primary)]">
                  ХОЧУ В КУРС <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                
                <p className="text-center text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" /> 49 Безлимитный доступ навсегда
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 15. FAQ SECTION */}
        <section id="faq" className="py-24 bg-card/30 border-t border-border/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground">Ответы на то, что чаще всего волнуют будущих участников.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                "Нужно ли разбираться в дизайне или нейросетях?",
                "Нужно ли покупать платные подписки на сервисы?",
                "Я уже пробовала нейросети. Будет ли мне это интересно?",
                "А если у меня не получится?",
                "Как долго будет доступ к курсу?",
                "Это курс про картинки или про что-то больше?"
              ].map((q, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline text-left text-lg font-medium py-6">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    Мы подготовили курс таким образом, чтобы он был полезен и понятен как новичкам, так и тем, кто уже имеет базовый опыт. Все необходимые инструкции и пояснения включены в уроки.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 16. FINAL CTA SECTION */}
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-br from-primary to-primary/60 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Начните с понятного маршрута</h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Нейросети не станут проще от того, что вы посмотрите ещё один обзор. Они станут понятными, когда появится система: что выбрать, как поставить задачу, как довести до результата. Именно это даёт курс «Нейровизуал от MTV» — за неделю, в своём темпе, с результатами в руках.
                </p>
                <div className="text-2xl font-bold mb-10">
                  2 790 ₽ — Безлимитный доступ · Обратная связь от автора
                </div>
                <Button data-testid="button-final-cta" size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 px-10 py-8 text-xl font-bold shadow-2xl mb-8">
                  Присоединиться к курсу <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <p className="text-sm text-white/70 font-bold tracking-widest uppercase">
                  ОТ ИДЕИ — К РЕЗУЛЬТАТУ, КОТОРЫЙ МОЖНО ИСПОЛЬЗОВАТЬ
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 17. FOOTER */}
      <footer className="bg-card/50 border-t border-border/50 pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="font-bold text-lg tracking-wider uppercase mb-4">Нейровизуал от MTV</div>
              <p className="text-muted-foreground leading-relaxed">
                Курс по созданию AI-визуалов: от концепции и промпта до готового материала.
              </p>
            </div>
            <div className="flex flex-col gap-4 font-medium">
              <a href="#" className="hover:text-primary transition-colors">Уроки</a>
              <a href="#" className="hover:text-primary transition-colors">Конспекты</a>
              <a href="#" className="hover:text-primary transition-colors">Бонусы</a>
              <a href="#" className="hover:text-primary transition-colors">Практика</a>
            </div>
            <div className="flex flex-col items-start md:items-end gap-6">
              <Button data-testid="button-footer-join" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Присоединиться <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-4 text-muted-foreground">
                <button className="hover:text-foreground transition-colors p-2"><Globe className="w-5 h-5" /></button>
                <button className="hover:text-foreground transition-colors p-2"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            © 2024 NeuroVisual AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
