"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section
      id="mission"
      className="flex min-h-[70vh] items-center justify-center px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[900px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fluid-section font-normal"
        >
          we&apos;re also a{" "}
          <em className="italic text-accent">nonprofit</em> fighting to help
          you live a{" "}
          <em className="italic text-accent">long, happy life.</em>
        </motion.p>

        <motion.a
          href="/about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="link-underline mt-12 inline-block text-sm tracking-wide text-muted transition-colors hover:text-foreground"
        >
          read the letter from our founder →
        </motion.a>
      </div>
    </section>
  );
}
