const footerLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#mission" },
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
    <footer className="border-t border-foreground/5 px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left: Legal */}
          <div className="max-w-md">
            <p className="text-[11px] uppercase leading-relaxed tracking-wider text-muted">
              People People is a U.S. tax-exempt non-profit organization under
              section 501(c)(3) of the IRS code (EIN: 33-1672806).
            </p>
          </div>

          {/* Right: Links + Social */}
          <div className="flex flex-col items-start gap-8 md:items-end">
            {/* Nav Links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="link-underline text-sm text-muted transition-colors hover:text-foreground"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="http://instagram.com/peoplepeople.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
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
                className="text-muted transition-colors hover:text-foreground"
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex items-center justify-between border-t border-foreground/5 pt-8">
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} People People
          </span>
          <span className="text-xs text-muted">💛</span>
        </div>
      </div>
    </footer>
  );
}
