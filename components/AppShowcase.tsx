"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function MiniCaterpillarText({
  children,
  hovering,
}: {
  children: string;
  hovering: boolean;
}) {
  return (
    <span className="inline-flex">
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={
            hovering
              ? {
                  y: [0, -2, 0],
                  transition: { delay: i * 0.02, duration: 0.25, ease: "easeInOut" },
                }
              : { y: 0 }
          }
          className={char === " " ? "inline-block w-[0.25em]" : "inline-block"}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function MiniStoreButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-1.5 rounded-full border border-foreground/80 bg-white py-2 text-[10px] font-medium text-foreground transition-colors hover:bg-accent hover:border-accent"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {icon}
      <MiniCaterpillarText hovering={hovering}>{label}</MiniCaterpillarText>
      <span className="sr-only">{label}</span>
    </a>
  );
}

export default function AppShowcase() {
  return (
    <section className="py-16 md:py-24">
      {/* Full-width Community Photo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full overflow-hidden"
      >
        <Image
          src="/images/landing_page_1.jpg"
          alt="The People People community wearing Be A People Person merchandise"
          width={2400}
          height={800}
          className="h-auto w-full object-cover"
        />
      </motion.div>

      {/* Phone Mockup + Text */}
      <div className="px-6 pt-16 md:px-10 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex flex-col items-center"
        >
          {/* Phone Mockup */}
          <div className="relative w-full max-w-[260px]">
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

              {/* App Content */}
              <div className="flex flex-col items-center px-6 pt-8">
                <Image
                  src="/images/logos/icon-132.png"
                  alt="People People logo"
                  width={132}
                  height={132}
                  className="h-12 w-12 rounded-xl"
                />
                <div className="mt-4 text-center text-sm font-medium tracking-tight text-foreground">
                  people people
                </div>
                <div className="mt-1 text-center text-[11px] text-foreground/40">
                  a social app for actually being social
                </div>

                {/* Download Buttons */}
                <div className="mt-8 w-full space-y-2.5">
                  <MiniStoreButton
                    href="https://apps.apple.com/us/app/people-people/id6747403675"
                    label="Download for iOS"
                    icon={<svg width="10" height="12" viewBox="0 0 20 24" fill="none"><path d="M16.498 12.795c-.03-2.882 2.354-4.27 2.461-4.34-1.342-1.96-3.43-2.229-4.17-2.261-1.773-.18-3.467 1.047-4.369 1.047-.902 0-2.297-1.023-3.775-.994-1.942.029-3.735 1.131-4.735 2.872-2.023 3.508-.517 8.697 1.452 11.543.965 1.395 2.113 2.961 3.622 2.906 1.454-.058 2.005-.94 3.764-.94 1.76 0 2.254.94 3.793.91 1.565-.026 2.558-1.42 3.513-2.82 1.11-1.617 1.565-3.183 1.591-3.264-.035-.015-3.05-1.17-3.081-4.64l.034-.019zM13.635 4.043C14.435 3.07 14.973 1.73 14.826.37c-1.145.047-2.538.764-3.36 1.72-.737.856-1.384 2.225-1.21 3.537 1.278.1 2.583-.648 3.379-1.584z" fill="currentColor"/></svg>}
                  />
                  <MiniStoreButton
                    href="https://play.google.com/store/apps/details?id=app.peoplepeople"
                    label="Download for Android"
                    icon={<svg width="9" height="10" viewBox="0 0 20 22" fill="none"><path d="M0.654 0.474C0.39 0.752 0.238 1.192 0.238 1.774v18.452c0 0.582 0.152 1.022 0.416 1.3l0.068 0.066 10.34-10.34v-0.244L0.722 0.408 0.654 0.474z" fill="currentColor"/><path d="M14.508 14.698L11.062 11.252v-0.244l3.446-3.446 0.078 0.044 4.084 2.32c1.166 0.662 1.166 1.748 0 2.412l-4.084 2.32-0.078 0.04z" fill="currentColor"/><path d="M14.586 14.658L11.062 11.13 0.654 21.538c0.384 0.408 1.02 0.458 1.742 0.054l12.19-6.934" fill="currentColor"/><path d="M14.586 7.606L2.396 0.668C1.674 0.264 1.038 0.316 0.654 0.724l10.408 10.408 3.524-3.526z" fill="currentColor"/></svg>}
                  />
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

          <p className="mt-8 text-center text-sm tracking-wide text-muted">
            available now on iOS and Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}
