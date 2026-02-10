"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[600px]">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fluid-section text-center font-normal"
        >
          want an invite?
          <br />
          have questions?
          <br />
          <em className="italic text-accent">need support?</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-10"
        >
          {submitted ? (
            <div className="text-center">
              <p className="fluid-body text-foreground">
                thanks! we&apos;ll be in touch 💛
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="w-full border-b border-foreground/15 bg-transparent px-0 py-3 text-base placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="w-full border-b border-foreground/15 bg-transparent px-0 py-3 text-base placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="message"
                  rows={4}
                  required
                  className="w-full resize-none border-b border-foreground/15 bg-transparent px-0 py-3 text-base placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none transition-colors"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-accent py-4 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-accent-hover"
                >
                  send it
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
