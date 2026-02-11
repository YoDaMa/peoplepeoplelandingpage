import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "https://app.peoplepeople.app" },
  {
    label: "Shop",
    href: "https://peoplepeople.printify.me/category/all/1?sort=price-desc",
  },
  {
    label: "Donate",
    href: "https://donate.mazloweb.com/donate/GYxQSvmhTRp8d9QkwUcoGS",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Top: Logo centered */}
        <div className="flex justify-center">
          <a href="/" className="inline-block">
            <Image
              src="/images/logos/wordmark-320x132.png"
              alt="People People"
              width={320}
              height={132}
              className="h-7 w-auto"
            />
          </a>
        </div>

        {/* Nav links row */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm tracking-wide text-foreground/40 transition-all duration-200 hover:bg-accent hover:text-foreground"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href="http://instagram.com/peoplepeople.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/50 transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Instagram"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/peoplepeople-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/50 transition-colors hover:bg-accent hover:text-foreground"
            aria-label="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-12 max-w-[200px] border-t border-foreground/5" />

        {/* Bottom: legal + copyright */}
        <div className="mt-8 text-center">
          <p className="text-[11px] leading-relaxed tracking-wider text-foreground/25">
            People People is a U.S. tax-exempt non-profit organization under
            section 501(c)(3) of the IRS code (EIN: 33-1672806).
          </p>
          <p className="mt-3 text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} People People &nbsp;💛
          </p>
        </div>
      </div>
    </footer>
  );
}
