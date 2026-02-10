"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-10">
      <div className="mx-auto max-w-[1200px] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fluid-hero font-normal"
        >
          hey there,
          <br />
          <em className="italic text-accent">people person</em>! 💛
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="fluid-body mx-auto mt-8 max-w-2xl text-muted"
        >
          we&apos;re a social app for{" "}
          <em className="italic">actually being social.</em>
        </motion.p>

        {/* Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://apps.apple.com/us/app/people-people/id6747403675"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-foreground/10 px-6 py-3 transition-all hover:border-foreground/30"
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              className="text-foreground"
            >
              <path
                d="M16.498 12.795c-.03-2.882 2.354-4.27 2.461-4.34-1.342-1.96-3.43-2.229-4.17-2.261-1.773-.18-3.467 1.047-4.369 1.047-.902 0-2.297-1.023-3.775-.994-1.942.029-3.735 1.131-4.735 2.872-2.023 3.508-.517 8.697 1.452 11.543.965 1.395 2.113 2.961 3.622 2.906 1.454-.058 2.005-.94 3.764-.94 1.76 0 2.254.94 3.793.91 1.565-.026 2.558-1.42 3.513-2.82 1.11-1.617 1.565-3.183 1.591-3.264-.035-.015-3.05-1.17-3.081-4.64l.034-.019zM13.635 4.043C14.435 3.07 14.973 1.73 14.826.37c-1.145.047-2.538.764-3.36 1.72-.737.856-1.384 2.225-1.21 3.537 1.278.1 2.583-.648 3.379-1.584z"
                fill="currentColor"
              />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-none text-foreground/50">
                Download on the
              </div>
              <div className="text-sm font-medium leading-tight">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=app.peoplepeople"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-foreground/10 px-6 py-3 transition-all hover:border-foreground/30"
          >
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              className="text-foreground"
            >
              <path
                d="M0.654 0.474C0.39 0.752 0.238 1.192 0.238 1.774v18.452c0 0.582 0.152 1.022 0.416 1.3l0.068 0.066 10.34-10.34v-0.244L0.722 0.408 0.654 0.474z"
                fill="currentColor"
              />
              <path
                d="M14.508 14.698L11.062 11.252v-0.244l3.446-3.446 0.078 0.044 4.084 2.32c1.166 0.662 1.166 1.748 0 2.412l-4.084 2.32-0.078 0.04z"
                fill="currentColor"
              />
              <path
                d="M14.586 14.658L11.062 11.13 0.654 21.538c0.384 0.408 1.02 0.458 1.742 0.054l12.19-6.934"
                fill="currentColor"
              />
              <path
                d="M14.586 7.606L2.396 0.668C1.674 0.264 1.038 0.316 0.654 0.724l10.408 10.408 3.524-3.526z"
                fill="currentColor"
              />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-none text-foreground/50">
                Get it on
              </div>
              <div className="text-sm font-medium leading-tight">
                Google Play
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-foreground/20"
        />
      </motion.div>
    </section>
  );
}
