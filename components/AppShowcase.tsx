"use client";

import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center"
        >
          {/* Phone Mockup */}
          <div className="relative mx-auto w-full max-w-[320px]">
            {/* Phone Frame */}
            <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/90 bg-foreground/5">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-2">
                <span className="text-[10px] font-medium text-foreground/40">
                  9:41
                </span>
                <div className="flex items-center gap-1">
                  <div className="h-[3px] w-[3px] rounded-full bg-foreground/40" />
                  <div className="h-[3px] w-[3px] rounded-full bg-foreground/40" />
                  <div className="h-[3px] w-[3px] rounded-full bg-foreground/40" />
                </div>
              </div>

              {/* App Content Placeholder */}
              <div className="flex flex-col items-center px-6 pt-8">
                <div className="text-3xl">💛</div>
                <div className="mt-4 text-center text-sm font-medium tracking-tight text-foreground">
                  people people
                </div>
                <div className="mt-1 text-center text-[11px] text-foreground/40">
                  a social app for actually being social
                </div>

                {/* Mock UI Elements */}
                <div className="mt-8 w-full space-y-3">
                  <div className="h-10 w-full rounded-lg bg-accent/20" />
                  <div className="h-10 w-full rounded-lg bg-foreground/5" />
                  <div className="h-10 w-full rounded-lg bg-foreground/5" />
                </div>

                <div className="mt-8 w-full space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-foreground/10" />
                    <div className="flex-1">
                      <div className="h-2 w-20 rounded bg-foreground/10" />
                      <div className="mt-1 h-2 w-32 rounded bg-foreground/5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-foreground/10" />
                    <div className="flex-1">
                      <div className="h-2 w-24 rounded bg-foreground/10" />
                      <div className="mt-1 h-2 w-28 rounded bg-foreground/5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-foreground/10" />
                    <div className="flex-1">
                      <div className="h-2 w-16 rounded bg-foreground/10" />
                      <div className="mt-1 h-2 w-36 rounded bg-foreground/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-foreground/90" />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-16 text-center text-sm tracking-wide text-muted"
        >
          available now on iOS and Android
        </motion.p>
      </div>
    </section>
  );
}
