"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "https://app.peoplepeople.app" },
  { label: "Shop", href: "https://peoplepeople.printify.me/category/all/1?sort=price-desc" },
  { label: "Donate", href: "https://donate.mazloweb.com/donate/GYxQSvmhTRp8d9QkwUcoGS" },
];

const downloadLinks = [
  {
    label: "Download for iOS",
    href: "https://apps.apple.com/us/app/people-people/id6747403675",
    icon: (
      <svg width="16" height="19" viewBox="0 0 20 24" fill="none" className="text-foreground">
        <path
          d="M16.498 12.795c-.03-2.882 2.354-4.27 2.461-4.34-1.342-1.96-3.43-2.229-4.17-2.261-1.773-.18-3.467 1.047-4.369 1.047-.902 0-2.297-1.023-3.775-.994-1.942.029-3.735 1.131-4.735 2.872-2.023 3.508-.517 8.697 1.452 11.543.965 1.395 2.113 2.961 3.622 2.906 1.454-.058 2.005-.94 3.764-.94 1.76 0 2.254.94 3.793.91 1.565-.026 2.558-1.42 3.513-2.82 1.11-1.617 1.565-3.183 1.591-3.264-.035-.015-3.05-1.17-3.081-4.64l.034-.019zM13.635 4.043C14.435 3.07 14.973 1.73 14.826.37c-1.145.047-2.538.764-3.36 1.72-.737.856-1.384 2.225-1.21 3.537 1.278.1 2.583-.648 3.379-1.584z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Download for Android",
    href: "https://play.google.com/store/apps/details?id=app.peoplepeople",
    icon: (
      <svg width="14" height="16" viewBox="0 0 20 22" fill="none" className="text-foreground">
        <path d="M0.654 0.474C0.39 0.752 0.238 1.192 0.238 1.774v18.452c0 0.582 0.152 1.022 0.416 1.3l0.068 0.066 10.34-10.34v-0.244L0.722 0.408 0.654 0.474z" fill="currentColor" />
        <path d="M14.508 14.698L11.062 11.252v-0.244l3.446-3.446 0.078 0.044 4.084 2.32c1.166 0.662 1.166 1.748 0 2.412l-4.084 2.32-0.078 0.04z" fill="currentColor" />
        <path d="M14.586 14.658L11.062 11.13 0.654 21.538c0.384 0.408 1.02 0.458 1.742 0.054l12.19-6.934" fill="currentColor" />
        <path d="M14.586 7.606L2.396 0.668C1.674 0.264 1.038 0.316 0.654 0.724l10.408 10.408 3.524-3.526z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const downloadRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      if (top) {
        window.scrollTo(0, parseInt(top, 10) * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };
  }, [mobileOpen]);

  // Close download dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (downloadRef.current && !downloadRef.current.contains(e.target as Node)) {
        setDownloadOpen(false);
      }
    };
    if (downloadOpen) {
      document.addEventListener("click", handleClick);
    }
    return () => document.removeEventListener("click", handleClick);
  }, [downloadOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <nav
        className={`mx-auto max-w-[1400px] rounded-full transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-accent/95 shadow-lg shadow-accent/10 backdrop-blur-sm"
            : "bg-accent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3 md:px-8">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="whitespace-nowrap text-lg font-medium tracking-tight text-foreground"
          >
            people people
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-4 lg:flex lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm tracking-wide text-foreground/70 transition-all duration-200 hover:bg-white hover:text-foreground hover:ring-1 hover:ring-foreground"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}

            {/* Download Dropdown */}
            <div className="relative" ref={downloadRef}>
              <button
                onClick={() => setDownloadOpen(!downloadOpen)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-foreground/80"
              >
                Download
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform duration-200 ${downloadOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {downloadOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-foreground/5"
                  >
                    {downloadLinks.map((dl) => (
                      <a
                        key={dl.label}
                        href={dl.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setDownloadOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-accent/20"
                      >
                        {dl.icon}
                        {dl.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[60] flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[7px] lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 origin-center ${
                mobileOpen ? "translate-y-[4.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 origin-center ${
                mobileOpen ? "-translate-y-[4.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white lg:hidden">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-full px-6 py-2 text-2xl font-light tracking-tight text-foreground/70 transition-colors duration-200 hover:bg-accent/20 hover:text-foreground"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col items-center gap-3">
              {downloadLinks.map((dl) => (
                <a
                  key={dl.label}
                  href={dl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-full border-2 border-foreground px-8 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:border-accent hover:bg-accent"
                >
                  {dl.icon}
                  <span>{dl.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
