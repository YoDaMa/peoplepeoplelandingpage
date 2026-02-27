"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


const ease = [0.25, 0.1, 0.25, 1] as const;

const topicOptions = [
  { value: "say-hi", label: "Say Hi!" },
  { value: "app-invite", label: "Request an App Invite" },
  { value: "partnerships", label: "Talk about Partnerships" },
  { value: "support", label: "Get Support" },
];

const fieldBox =
  "rounded-xl bg-foreground/[0.03] px-4 py-3 text-base text-foreground transition-all outline-2 outline-transparent focus-within:outline-accent";

function ContactForm() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic") || "";
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState(
    topicOptions.some((o) => o.value === topicParam) ? topicParam : ""
  );
  const [emailError, setEmailError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("click", handleClick);
    }
    return () => document.removeEventListener("click", handleClick);
  }, [dropdownOpen]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic) return;
    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string) || "";
    if (!validateEmail(email)) {
      setEmailError("please enter a valid email address");
      return;
    }
    setEmailError("");
    setSubmitted(true);
  };

  const selectedLabel = topicOptions.find((o) => o.value === topic)?.label;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="py-16 text-center"
      >
        <p className="fluid-body text-foreground">
          thanks! we&apos;ll be in touch 💛
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Custom dropdown */}
      <div ref={dropdownRef} className="relative">
        <label className="mb-2 block text-sm font-medium text-foreground">
          what do you need help with?
        </label>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`${fieldBox} flex w-full items-center justify-between ${
            dropdownOpen ? "outline-accent" : ""
          }`}
        >
          <span className={selectedLabel ? "text-foreground" : "text-foreground/40"}>
            {selectedLabel || "Select an option"}
          </span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            className={`shrink-0 text-foreground/40 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-0 right-0 z-10 mt-2 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-foreground/5"
            >
              {topicOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setTopic(opt.value);
                    setDropdownOpen(false);
                  }}
                  className={`flex w-full items-center px-4 py-3 text-left text-sm transition-colors hover:bg-accent/20 ${
                    topic === opt.value
                      ? "bg-accent/10 font-medium text-foreground"
                      : "text-foreground/70"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          className={`${fieldBox} w-full placeholder:text-foreground/40 focus:outline-accent`}
        />
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            onChange={() => emailError && setEmailError("")}
            className={`${fieldBox} w-full placeholder:text-foreground/40 focus:outline-accent ${
              emailError ? "outline-red-400" : ""
            }`}
          />
          {emailError && (
            <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
          )}
        </div>
      </div>

      <textarea
        name="message"
        placeholder="message"
        rows={4}
        required
        className={`${fieldBox} w-full resize-none placeholder:text-foreground/40 focus:outline-accent`}
      />

      <button
        type="submit"
        className="w-full rounded-full border-2 border-foreground bg-white py-4 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-transparent hover:bg-accent"
      >
        send it
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
        <section className="px-6 pt-28 pb-8 md:px-10 md:pt-32 md:pb-10">
          <div className="mx-auto max-w-[600px] text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="text-3xl font-normal md:text-4xl"
            >
              get in touch with{" "}
              <em className="italic text-accent">people people.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="mx-auto mt-4 max-w-lg text-base text-muted"
            >
              do you have any questions or need more info? tell us what
              you&apos;re looking for and we&apos;ll get back to you as soon as
              we can.
            </motion.p>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mx-auto max-w-[600px]"
          >
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </motion.div>
        </section>
    </>
  );
}
