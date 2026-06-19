import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
}

const PAYMENT_URL = import.meta.env.VITE_PRODAMUS_PAYMENT_URL as string | undefined;

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function Checkbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center transition-all border ${
        checked ? "bg-primary border-primary" : "bg-white/5 border-white/20 hover:border-white/35"
      }`}
    >
      {checked && (
        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
          <path
            d="M1.5 5l2.5 2.5 4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[12px] text-muted-foreground font-light mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-primary/60 ml-1">*</span>}
        {!required && (
          <span className="text-muted-foreground/40 ml-1">(необязательно)</span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-[12px] text-red-400/80 mt-1.5 font-light">{error}</p>
      )}
    </div>
  );
}

export default function PaymentModal({ open, onClose }: PaymentModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [consentPersonal, setConsentPersonal] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    consent?: string;
  }>({});
  const [showNoPayment, setShowNoPayment] = useState(false);

  const canProceed =
    name.trim().length > 0 && isValidEmail(email) && consentPersonal;

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const validate = () => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Укажите ваше имя";
    if (!email.trim()) errs.email = "Укажите email";
    else if (!isValidEmail(email))
      errs.email = "Введите корректный email, например: you@mail.ru";
    if (!consentPersonal)
      errs.consent = "Необходимо согласие на обработку персональных данных";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (PAYMENT_URL) {
      window.open(PAYMENT_URL, "_blank", "noopener,noreferrer");
      resetAndClose();
    } else {
      setShowNoPayment(true);
    }
  };

  const resetAndClose = useCallback(() => {
    setName("");
    setEmail("");
    setTelegram("");
    setConsentPersonal(false);
    setConsentMarketing(false);
    setErrors({});
    setShowNoPayment(false);
    onClose();
  }, [onClose]);

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-[14px] font-light bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all";

  const content = (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={resetAndClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1] as [
                number,
                number,
                number,
                number
              ],
            }}
            className="relative z-10 w-full max-w-md max-h-[92dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative rounded-[1.75rem] overflow-hidden"
              style={{
                background: "hsl(240 22% 7%)",
                border: "1px solid hsl(263 60% 30% / 0.25)",
                boxShadow:
                  "0 40px 100px -16px hsl(263 75% 20% / 0.55), 0 0 0 1px hsl(0 0% 100% / 0.04)",
              }}
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 rounded-full bg-primary/20 blur-[50px] pointer-events-none" />

              <div className="relative p-7 md:p-9">
                <button
                  onClick={resetAndClose}
                  className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-white/8 transition-all"
                  aria-label="Закрыть"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="mb-7">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-primary/70 font-light mb-3">
                    Оформление доступа
                  </p>
                  <h2 className="font-serif text-[1.65rem] font-light leading-[1.1] text-foreground">
                    Курс «Нейровизуал от MTV»
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-serif text-[1.4rem] font-light text-primary">
                      2 790 ₽
                    </span>
                    <span className="text-[12px] text-muted-foreground font-light">
                      · бессрочный доступ
                    </span>
                  </div>
                </div>

                {showNoPayment ? (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 rounded-full bg-primary/12 flex items-center justify-center mx-auto mb-5">
                      <Lock className="w-5 h-5 text-primary/70" />
                    </div>
                    <p className="text-[15px] text-foreground/85 font-light leading-relaxed mb-2">
                      Оплата скоро будет подключена.
                    </p>
                    <p className="text-[14px] text-muted-foreground font-light leading-relaxed">
                      Если хотите забронировать место — напишите на{" "}
                      <a
                        href="mailto:maltceva-tat@mail.ru"
                        className="text-primary hover:underline"
                      >
                        maltceva-tat@mail.ru
                      </a>
                    </p>
                    <button
                      onClick={resetAndClose}
                      className="mt-6 text-[13px] text-muted-foreground hover:text-foreground transition-colors font-light"
                    >
                      Закрыть
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-4 mb-5">
                      <Field label="Имя" required error={errors.name}>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name)
                              setErrors((p) => ({ ...p, name: undefined }));
                          }}
                          placeholder="Ваше имя"
                          className={inputClass}
                          autoComplete="given-name"
                        />
                      </Field>

                      <Field label="Email" required error={errors.email}>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email)
                              setErrors((p) => ({ ...p, email: undefined }));
                          }}
                          placeholder="your@email.ru"
                          className={inputClass}
                          autoComplete="email"
                        />
                      </Field>

                      <Field label="Telegram username">
                        <input
                          type="text"
                          value={telegram}
                          onChange={(e) => setTelegram(e.target.value)}
                          placeholder="@username"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="space-y-3 mb-6 border-t border-white/6 pt-5">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={consentPersonal}
                          onChange={(v) => {
                            setConsentPersonal(v);
                            if (errors.consent)
                              setErrors((p) => ({ ...p, consent: undefined }));
                          }}
                        />
                        <span className="text-[12px] text-muted-foreground font-light leading-relaxed">
                          Я соглашаюсь на обработку персональных данных и
                          принимаю{" "}
                          <a
                            href="/personal-data-consent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
                          >
                            Согласие на обработку персональных данных
                          </a>{" "}
                          и{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
                          >
                            Политику обработки персональных данных
                          </a>
                          .{" "}
                          <span className="text-primary/60">*</span>
                        </span>
                      </div>
                      {errors.consent && (
                        <p className="text-[12px] text-red-400/80 font-light pl-7">
                          {errors.consent}
                        </p>
                      )}

                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={consentMarketing}
                          onChange={setConsentMarketing}
                        />
                        <span className="text-[12px] text-muted-foreground font-light leading-relaxed">
                          Я соглашаюсь получать информационные и рекламные
                          материалы о продуктах, услугах и предложениях.{" "}
                          <a
                            href="/marketing-consent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
                          >
                            Согласие на рассылку
                          </a>
                        </span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={!canProceed}
                      className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white py-3.5 text-[14px] font-normal h-auto shadow-[0_8px_40px_-8px_hsl(263_75%_60%/0.45)] disabled:opacity-35 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                    >
                      Перейти к оплате{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-center text-[11px] text-muted-foreground font-light flex items-center justify-center gap-1.5 mt-3">
                      <Lock className="w-3 h-3" /> Безопасная оплата · доступ
                      сразу после оплаты
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
