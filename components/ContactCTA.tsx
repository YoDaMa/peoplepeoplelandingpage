"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const topics = [
  { label: "Say Hi!", topic: "say-hi" },
  { label: "Request an App Invite", topic: "app-invite" },
  { label: "Talk about Partnerships", topic: "partnerships" },
  { label: "Get Support", topic: "support" },
];

export default function ContactCTA() {
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {topics.map((item, i) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href={`/contact?topic=${item.topic}`}
                className="inline-block rounded-full border-2 border-foreground px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-accent hover:border-accent"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
