"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Login", href: "https://app.peoplepeople.app" },
  { label: "Shop", href: "https://peoplepeople.printify.me/category/all/1?sort=price-desc" },
  { label: "Donate", href: "https://donate.mazloweb.com/donate/GYxQSvmhTRp8d9QkwUcoGS" },
];

export default function Navbar({ showBanner = false }: { showBanner?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(showBanner);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-accent"
          >
            <div className="flex items-center justify-center px-6 py-2.5">
              <p className="text-sm font-medium text-foreground">
                our app is now LIVE!!! :)
              </p>
              <button
                onClick={() => setBannerVisible(false)}
                className="absolute right-4 text-foreground/60 transition-colors hover:text-foreground"
                aria-label="Dismiss banner"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="1" y1="1" x2="13" y2="13" />
                  <line x1="13" y1="1" x2="1" y2="13" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav */}
      <nav
        className={`transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          {/* Logo */}
          <a href="/" className="text-lg font-medium tracking-tight">
            people people
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://apps.apple.com/us/app/people-people/id6747403675"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-foreground/80"
            >
              Download
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "-translate-y-[1.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-light tracking-tight"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://apps.apple.com/us/app/people-people/id6747403675"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="bg-foreground px-8 py-3 text-lg font-medium text-white"
              >
                Download
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
