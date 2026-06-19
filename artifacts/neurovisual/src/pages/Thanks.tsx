import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const TELEGRAM_URL = import.meta.env.VITE_TELEGRAM_INVITE_URL as string | undefined;

export default function Thanks() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="text-[13px] tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground/80 font-light transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
            Нейровизуал от MTV
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="w-full max-w-lg text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-8 h-8 text-primary/80" />
          </div>

          <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">
            Оплата прошла успешно
          </p>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-[1.1] mb-6">
            Добро пожаловать<br />в курс!
          </h1>
          <p className="text-[15px] text-muted-foreground font-light leading-relaxed mb-10 max-w-md mx-auto">
            Доступ к курсу «Нейровизуал от MTV» отправлен на вашу почту. Войдите в закрытый Telegram-канал, чтобы начать обучение прямо сейчас.
          </p>

          {TELEGRAM_URL ? (
            <Button
              onClick={() => window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer")}
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3.5 text-[14px] font-normal h-auto group mb-6 shadow-[0_8px_40px_-8px_hsl(263_75%_60%/0.45)]"
            >
              Войти в Telegram-канал{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          ) : (
            <div className="rounded-2xl border border-white/8 bg-card/40 px-7 py-6 mb-6 max-w-sm mx-auto">
              <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                Ссылка на закрытый Telegram-канал появится здесь после подключения доступа.
              </p>
            </div>
          )}

          <div className="flex items-start gap-3 rounded-2xl bg-card/30 border border-white/6 px-6 py-4 max-w-sm mx-auto text-left">
            <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
              Не пришло письмо? Проверьте папку <strong className="text-foreground/70 font-normal">Спам</strong> или{" "}
              <strong className="text-foreground/70 font-normal">Промоакции</strong>. Если письма нет — напишите на{" "}
              <a href="mailto:maltceva-tat@mail.ru" className="text-primary/80 hover:text-primary transition-colors">
                maltceva-tat@mail.ru
              </a>
            </p>
          </div>

          <Link href="/" className="block mt-8 text-[13px] text-muted-foreground hover:text-foreground transition-colors font-light">
            Вернуться на главную
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
