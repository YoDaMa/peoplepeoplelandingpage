"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
  return (
    <>
      <Navbar />
      <main>
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
              <a
                href="https://apps.apple.com/us/app/people-people/id6747403675"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-foreground/80"
              >
                Download the app
              </a>
              <a
                href="https://donate.mazloweb.com/donate/GYxQSvmhTRp8d9QkwUcoGS"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground/15 px-8 py-3.5 text-sm tracking-wide text-foreground transition-colors hover:border-foreground/40"
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
      </main>
      <Footer />
    </>
  );
}
