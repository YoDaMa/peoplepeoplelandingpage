"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

/* ── community data ─────────────────────────────────────────────── */

const merchCrew = [
  "Emily Peruski",
  "Will Gisler",
  "Maddie Sehrt",
  "Caitlyn Lopacinski",
  "Catalina Santamaria & Andrew Abikhaled",
  "Garrett Shuffield",
  "Rachel Czapp",
  "Kaley Fitzpatrick",
  "Rollie Rocha",
  "Steven Johnson",
  "Claire Smith",
  "Martin Torres",
  "Alex Quam",
  "Hiroki Witt",
  "August Kuhn & Victoria Milosek",
  "Fish Stark",
  "Robert Villatoro",
  "Anonymous",
  "Anonymous",
  "Anonymous",
];

const podParticipants = [
  "Inly Álvarez",
  "Justin Onwenu",
  "Hanaa Ismail",
  "Cara Funke",
  "Shruthi Velidi",
  "Alexa Prpich",
  "Thomas Guaty",
];

const bizDev = [
  "Inly Álvarez",
  "Will Wright",
  "Julia Marugán",
];

const donors = [
  "Hiroki Witt",
  "Daniel Warren",
  "Teresita Maz",
];

const appDevs = [
  "Alec Ruiz de Castilla",
  "Josh Johnson",
];

/* ── reusable section component ─────────────────────────────────── */

function CommunitySection({
  tag,
  title,
  description,
  names,
  delay = 0,
}: {
  tag: string;
  title: string;
  description: string;
  names: string[];
  delay?: number;
}) {
  return (
    <motion.div {...fadeDelay(delay)}>
      {/* Tag */}
      <span className="mx-auto block w-fit rounded-full border border-accent bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent-hover">
        {tag}
      </span>

      <h3 className="mt-4 text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h3>

      <p className="mt-3 text-center text-sm leading-relaxed text-muted">
        {description}
      </p>

      {/* Name grid */}
      <div className="mt-6 flex flex-wrap gap-2">
        {names.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="rounded-full bg-foreground/[0.04] px-4 py-2 text-sm text-foreground/80 transition-colors duration-200 hover:bg-accent/20 hover:text-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── page ────────────────────────────────────────────────────────── */

export default function Community() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-32 pb-16 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="fluid-hero font-normal"
          >
            our{" "}
            <em className="italic text-accent">community</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="fluid-body mx-auto mt-6 max-w-2xl text-muted"
          >
            people people doesn&apos;t happen without{" "}
            <em className="italic">people</em>. these are the humans
            who&apos;ve believed in what we&apos;re building from the very
            beginning&thinsp;&mdash;&thinsp;donating, developing, repping the
            merch, and showing up for each other.
          </motion.p>
        </div>
      </section>

      {/* Community photo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
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

      {/* Community sections */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[700px] space-y-16">
          <CommunitySection
            tag="merch crew"
            title="repping people people"
            description="these folks were the first to rock our gear and spread the word. every hoodie, tee, and hat is a little act of belief."
            names={merchCrew}
            delay={0}
          />

          <div className="mx-auto max-w-[200px] border-t border-foreground/5" />

          <CommunitySection
            tag="pod alumni"
            title="pod participants"
            description="pods are small groups that meet regularly to build real friendships. these people said yes to vulnerability and showed up."
            names={podParticipants}
            delay={0.05}
          />

          <div className="mx-auto max-w-[200px] border-t border-foreground/5" />

          <CommunitySection
            tag="business development"
            title="growing the mission"
            description="helping people people reach more people through partnerships, strategy, and hustle."
            names={bizDev}
            delay={0.05}
          />

          <div className="mx-auto max-w-[200px] border-t border-foreground/5" />

          <CommunitySection
            tag="donors"
            title="founding supporters"
            description="early believers who put their money where their heart is. every donation is tax-deductible and goes directly to building the app."
            names={donors}
            delay={0.05}
          />

          <div className="mx-auto max-w-[200px] border-t border-foreground/5" />

          <CommunitySection
            tag="app developers"
            title="building the thing"
            description="the engineers turning a vision into something you can hold in your hand."
            names={appDevs}
            delay={0.05}
          />
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[200px] border-t border-foreground/10" />

      {/* From the blog + Instagram */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[700px]">
          <motion.h2
            {...fade}
            className="fluid-section text-center font-normal"
          >
            stay in the loop
          </motion.h2>

          <motion.p
            {...fadeDelay(0.1)}
            className="mx-auto mt-4 max-w-lg text-center text-base text-muted"
          >
            follow along as we grow. read stories from the community or see
            what we&apos;re up to day-to-day.
          </motion.p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* Substack card */}
            <motion.a
              {...fadeDelay(0.15)}
              href="https://peoplepeople.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-foreground/5 bg-foreground/[0.02] transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  {/* Substack icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6719]/10">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                    >
                      <path
                        d="M15.5 3.7H0.5V0.9H15.5V3.7ZM0.5 6.3H15.5V9.1L8 13.2L0.5 9.1V6.3ZM0.5 11.5L8 15.6L15.5 11.5V17.1H0.5V11.5Z"
                        fill="#FF6719"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      people people blog
                    </p>
                    <p className="text-xs text-muted">on Substack</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/60">
                  stories from pod participants, updates on what we&apos;re
                  building, and reflections on friendship in a disconnected
                  world.
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/50 transition-colors group-hover:text-accent-hover">
                  read on substack
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </span>
              </div>
            </motion.a>

            {/* Instagram card */}
            <motion.a
              {...fadeDelay(0.2)}
              href="https://www.instagram.com/peoplepeople.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-foreground/5 bg-foreground/[0.02] transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  {/* Instagram icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E1306C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      />
                      <circle cx="12" cy="12" r="5" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      @peoplepeople.app
                    </p>
                    <p className="text-xs text-muted">on Instagram</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/60">
                  behind-the-scenes moments, community highlights, merch
                  sightings, and the occasional sunset photo because we&apos;re
                  human.
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/50 transition-colors group-hover:text-accent-hover">
                  follow on instagram
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[600px]">
          <motion.h2
            {...fade}
            className="fluid-section text-center font-normal"
          >
            want to be part of
            <br />
            <em className="italic text-accent">this?</em>
          </motion.h2>

          <motion.p
            {...fadeDelay(0.1)}
            className="mx-auto mt-4 max-w-md text-center text-base text-muted"
          >
            there are so many ways to get involved. every bit counts.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              {
                label: "Donate",
                href: "https://donate.mazloweb.com/donate/GYxQSvmhTRp8d9QkwUcoGS",
              },
              {
                label: "Shop Merch",
                href: "https://peoplepeople.printify.me/category/all/1?sort=price-desc",
              },
              {
                label: "Get in Touch",
                href: "/contact",
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.08,
                  ease,
                }}
                className="inline-block rounded-full border-2 border-foreground px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:bg-accent"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
