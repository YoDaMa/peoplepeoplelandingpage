"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const ease = [0.25, 0.1, 0.25, 1] as const;

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease },
};

const fadeDelay = (delay: number) => ({
  ...fade,
  transition: { duration: 0.8, ease, delay },
});

const fadeImage = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 1, ease },
};

export default function About() {
  const [dlOpen, setDlOpen] = useState(false);
  const dlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dlRef.current && !dlRef.current.contains(e.target as Node)) {
        setDlOpen(false);
      }
    };
    if (dlOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [dlOpen]);

  return (
    <>
        {/* Hero */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-20 md:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="fluid-hero font-normal"
            >
              about{" "}
              <em className="italic text-accent">people people</em>
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
              a social app for <em className="italic">actually being social.</em>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="mt-16"
          >
            <Image
              src="/images/logos/wordmark-320x132.png"
              alt="People People"
              width={320}
              height={132}
              className="mx-auto h-8 w-auto"
            />
          </motion.div>
        </section>

        {/* About People People */}
        <section className="px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[700px]">
            <motion.h2
              {...fade}
              className="fluid-section font-normal text-center"
            >
              what we&apos;re building
            </motion.h2>

            <motion.div
              {...fadeDelay(0.15)}
              className="mt-16 space-y-8 text-base leading-[1.8] text-foreground/80"
            >
              <p>
                People People is a social app built on a simple belief: everyone
                deserves to love life and to have deep, meaningful friendships.
              </p>
              <p>
                We define a{" "}
                <em className="italic text-accent">&ldquo;people person&rdquo;</em>{" "}
                not as someone with endless social energy, but as someone who
                cherishes profound friendships and makes real efforts to keep them.
                That&apos;s who we&apos;re building for.
              </p>
              <p>
                Research keeps warning us about loneliness, digital disconnection,
                and growing polarization. We believe technology can do better. People
                People is a purpose-driven social platform designed for this very
                moment &mdash; to help people care for one another, not compete with
                one another.
              </p>
              <p>
                We operate as a{" "}
                <strong className="font-medium">
                  U.S. tax-exempt nonprofit under section 501(c)(3)
                </strong>{" "}
                of the IRS code (EIN: 33-1672806). Every dollar we receive goes
                directly toward product development, server costs, and growing our
                team. No shareholders. No ads. Just people helping people.
              </p>
            </motion.div>

            <motion.div
              {...fadeDelay(0.3)}
              className="mt-16 border-t border-foreground/10 pt-16 text-center"
            >
              <p className="fluid-body text-foreground">
                <em className="italic text-accent">
                  &ldquo;Friendships are essential ingredients to a long and happy
                  life, and we all deserve technology that helps us care better for
                  one another.&rdquo;
                </em>
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeDelay(0.2)}
              className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <div className="relative" ref={dlRef}>
                <button
                  onClick={() => setDlOpen(!dlOpen)}
                  className="flex cursor-pointer items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-accent hover:border-accent"
                >
                  Download the app
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform duration-200 ${dlOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {dlOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-1/2 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-foreground/5"
                    >
                      <a
                        href="https://apps.apple.com/us/app/people-people/id6747403675"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setDlOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-accent/20"
                      >
                        <svg width="16" height="19" viewBox="0 0 20 24" fill="none"><path d="M16.498 12.795c-.03-2.882 2.354-4.27 2.461-4.34-1.342-1.96-3.43-2.229-4.17-2.261-1.773-.18-3.467 1.047-4.369 1.047-.902 0-2.297-1.023-3.775-.994-1.942.029-3.735 1.131-4.735 2.872-2.023 3.508-.517 8.697 1.452 11.543.965 1.395 2.113 2.961 3.622 2.906 1.454-.058 2.005-.94 3.764-.94 1.76 0 2.254.94 3.793.91 1.565-.026 2.558-1.42 3.513-2.82 1.11-1.617 1.565-3.183 1.591-3.264-.035-.015-3.05-1.17-3.081-4.64l.034-.019zM13.635 4.043C14.435 3.07 14.973 1.73 14.826.37c-1.145.047-2.538.764-3.36 1.72-.737.856-1.384 2.225-1.21 3.537 1.278.1 2.583-.648 3.379-1.584z" fill="currentColor"/></svg>
                        Download for iOS
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=app.peoplepeople"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setDlOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-accent/20"
                      >
                        <svg width="14" height="16" viewBox="0 0 20 22" fill="none"><path d="M0.654 0.474C0.39 0.752 0.238 1.192 0.238 1.774v18.452c0 0.582 0.152 1.022 0.416 1.3l0.068 0.066 10.34-10.34v-0.244L0.722 0.408 0.654 0.474z" fill="currentColor"/><path d="M14.508 14.698L11.062 11.252v-0.244l3.446-3.446 0.078 0.044 4.084 2.32c1.166 0.662 1.166 1.748 0 2.412l-4.084 2.32-0.078 0.04z" fill="currentColor"/><path d="M14.586 14.658L11.062 11.13 0.654 21.538c0.384 0.408 1.02 0.458 1.742 0.054l12.19-6.934" fill="currentColor"/><path d="M14.586 7.606L2.396 0.668C1.674 0.264 1.038 0.316 0.654 0.724l10.408 10.408 3.524-3.526z" fill="currentColor"/></svg>
                        Download for Android
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                href="https://donate.mazloweb.com/donate/GYxQSvmhTRp8d9QkwUcoGS"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-foreground px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-accent hover:border-accent"
              >
                Support our mission
              </a>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-[200px] border-t border-foreground/10" />

        {/* About the Founder */}
        <section className="px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[700px]">
            <motion.h2
              {...fade}
              className="fluid-section font-normal text-center"
            >
              meet the founder
            </motion.h2>

            {/* Sergio intro photo */}
            <motion.div {...fadeImage} className="mt-16 overflow-hidden">
              <Image
                src="/images/about_page_1.jpg"
                alt="Sergio, founder of People People, laughing in a park"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
              />
            </motion.div>

            <motion.div
              {...fadeDelay(0.15)}
              className="mt-16 space-y-8 text-base leading-[1.8] text-foreground/80"
            >
              <p className="text-xl font-normal text-foreground">
                hi, I&apos;m Sergio! 👋
              </p>
              <p>
                I spent the last decade working in basketball analytics &mdash;
                studying patterns, building models, and trying to find signal in the
                noise. It was great work, but something kept pulling at me.
              </p>
              <p>
                I kept coming back to a question that felt bigger than basketball:
                why are so many of us lonely? Why does technology that&apos;s supposed
                to connect us so often leave us feeling more disconnected?
              </p>
            </motion.div>

            {/* Mid-section photos - two portrait images side by side */}
            <motion.div
              {...fadeImage}
              className="mt-12 grid grid-cols-2 gap-4"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/about_page_3.jpg"
                  alt="Sergio standing in a park wearing People People merchandise"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/images/about_page_4.jpg"
                  alt="Sergio doing a handstand in the city"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeDelay(0.1)}
              className="mt-12 space-y-8 text-base leading-[1.8] text-foreground/80"
            >
              <p>
                So I left my career, invested my life savings, and started building
                People People. Not because I had all the answers, but because I
                believed someone needed to try something different.
              </p>
              <p>
                The app is now live on the{" "}
                <a
                  href="https://apps.apple.com/us/app/people-people/id6747403675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-foreground"
                >
                  App Store
                </a>{" "}
                and{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=app.peoplepeople"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-foreground"
                >
                  Google Play
                </a>{" "}
                worldwide. Every day I wake up grateful that this idea became real,
                and I&apos;m just getting started.
              </p>
            </motion.div>

            {/* Closing photo */}
            <motion.div {...fadeImage} className="mt-12 overflow-hidden">
              <Image
                src="/images/about_page_2.jpg"
                alt="Sergio sitting in downtown Denver"
                width={600}
                height={1000}
                className="mx-auto h-auto w-full max-w-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              {...fadeDelay(0.1)}
              className="mt-12 space-y-8 text-base leading-[1.8] text-foreground/80"
            >
              <p>
                If you believe in what we&apos;re doing, the best thing you can do is{" "}
                <a
                  href="https://apps.apple.com/us/app/people-people/id6747403675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-foreground"
                >
                  create an account
                </a>
                ,{" "}
                <a
                  href="https://donate.mazloweb.com/donate/GYxQSvmhTRp8d9QkwUcoGS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-foreground"
                >
                  donate
                </a>{" "}
                (it&apos;s tax-deductible!), and tell someone you love that
                you&apos;re a{" "}
                <em className="italic text-accent">people person</em>.
              </p>
              <p>
                with love,
                <br />
                <strong className="font-medium">Sergio</strong>
              </p>
            </motion.div>
          </div>
        </section>
    </>
  );
}
