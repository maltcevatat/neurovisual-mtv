import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface Section {
  heading?: string;
  paragraphs: string[];
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  date?: string;
  sections: Section[];
}

export default function LegalPage({ title, subtitle, date, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors font-light">
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Link>
          <span className="text-[13px] tracking-[0.15em] uppercase text-foreground/60 font-light" style={{ fontFamily: "Inter, sans-serif" }}>
            Нейровизуал от MTV
          </span>
        </div>
      </nav>

      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12">
            {subtitle && (
              <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-[1.1] mb-4">
              {title}
            </h1>
            {date && (
              <p className="text-[13px] text-muted-foreground font-light">
                {date}
              </p>
            )}
          </div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-serif text-[1.1rem] font-light text-foreground/90 mb-3 leading-snug">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-3">
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-[14px] text-muted-foreground font-light leading-[1.8]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/6">
            <p className="text-[13px] text-muted-foreground font-light">
              Оператор: самозанятая Мальцева Татьяна Владимировна · ИНН 183403617282 ·{" "}
              <a href="mailto:maltceva-tat@mail.ru" className="text-primary/70 hover:text-primary transition-colors">
                maltceva-tat@mail.ru
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
