"use client";

import "./styles.css";
import Image from "next/image";
import { Albert_Sans } from "next/font/google";
import { useEffect, useState, useCallback } from "react";

const albertSans = Albert_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SECTIONS = [
  { id: "hero", label: "Overview", number: "" },
  { id: "logo", label: "Logo", number: "01" },
  { id: "color", label: "Color", number: "02" },
  { id: "typography", label: "Typography", number: "03" },
  { id: "voice", label: "Voice", number: "04" },
  { id: "layout", label: "Layout", number: "05" },
  { id: "photography", label: "Photography", number: "06" },
  { id: "iconography", label: "Iconography", number: "07" },
  { id: "buttons", label: "Buttons", number: "08" },
  { id: "cobranding", label: "Co-Branding", number: "09" },
  { id: "applications", label: "Applications", number: "10" },
];

const SUB_SECTIONS: Record<string, { id: string; label: string }[]> = {
  logo: [
    { id: "logo-variations", label: "Variations" },
    { id: "logo-appicon", label: "App Icon" },
    { id: "logo-clearspace", label: "Clear Space" },
    { id: "logo-minsize", label: "Minimum Size" },
    { id: "logo-misuse", label: "Misuse" },
  ],
  color: [
    { id: "color-primary", label: "Primary" },
    { id: "color-neutrals", label: "Neutrals" },
    { id: "color-semantic", label: "Semantic / UI" },
    { id: "color-ratios", label: "Color Ratios" },
    { id: "color-usage", label: "Usage" },
  ],
  typography: [
    { id: "type-specimen", label: "Specimen" },
    { id: "type-weights", label: "Weight Scale" },
    { id: "type-hierarchy", label: "Hierarchy" },
    { id: "type-rules", label: "Typesetting Rules" },
  ],
  voice: [
    { id: "voice-personality", label: "Personality" },
    { id: "voice-principles", label: "Principles" },
    { id: "voice-examples", label: "Example Copy" },
  ],
  layout: [
    { id: "layout-grid", label: "12-Column Grid" },
    { id: "layout-common", label: "Common Layouts" },
    { id: "layout-spacing", label: "Spacing Scale" },
    { id: "layout-radius", label: "Corner Radius" },
  ],
  photography: [
    { id: "photo-categories", label: "Categories" },
    { id: "photo-treatment", label: "Treatment" },
  ],
  iconography: [
    { id: "icon-set", label: "Core Set" },
    { id: "icon-specs", label: "Specifications" },
  ],
  buttons: [
    { id: "btn-styles", label: "Primary Styles" },
    { id: "btn-anatomy", label: "Anatomy" },
    { id: "btn-misuse", label: "Misuse" },
  ],
  cobranding: [
    { id: "cobrand-lockups", label: "Lockups" },
    { id: "cobrand-hierarchy", label: "Hierarchy Rules" },
  ],
  applications: [
    { id: "app-social", label: "Social Media" },
    { id: "app-cards", label: "Business Card" },
    { id: "app-signage", label: "Signage" },
    { id: "app-icon", label: "App Icon" },
  ],
};

export default function BrandGuidelines() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section indicator via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll(".section, .hero");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  }, []);

  return (
    <div className={`${albertSans.className} brand-page`}>
      {/* ============================================
          SIDEBAR (desktop)
          ============================================ */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <a href="/" className="sidebar-back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2L3 7L8 12" />
            </svg>
            Home
          </a>
          <div className="sidebar-brand">
            people people
          </div>
          <div className="sidebar-meta">
            Brand Guidelines
            <br />
            Ver. 1.0, 2026
          </div>
        </div>

        <nav className="sidebar-nav">
          {SECTIONS.map((section) => (
            <div key={section.id}>
              <button
                className={`sidebar-nav-item${activeSection === section.id ? " active" : ""}`}
                onClick={() => scrollTo(section.id)}
              >
                {section.number && (
                  <span className="sidebar-nav-number">{section.number}</span>
                )}
                {section.label}
              </button>
              {SUB_SECTIONS[section.id] && (
                <div
                  className={`sidebar-section-nav${activeSection === section.id ? " visible" : ""}`}
                >
                  {SUB_SECTIONS[section.id].map((sub) => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(sub.id);
                      }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-footer-text">
            For internal and partner use
          </div>
        </div>
      </aside>

      {/* ============================================
          MOBILE NAV
          ============================================ */}
      <div className="mobile-nav">
        <a href="/" className="mobile-nav-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2L3 7L8 12" />
          </svg>
        </a>
        <div className="mobile-nav-brand">
          people people
        </div>
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "\u2715" : "\u2630"}
        </button>
      </div>
      <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}>
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            className={`mobile-menu-item${activeSection === section.id ? " active" : ""}`}
            onClick={() => scrollTo(section.id)}
          >
            {section.number && (
              <span className="mobile-menu-number">{section.number}</span>
            )}
            {section.label}
          </button>
        ))}
      </div>

      {/* ============================================
          CONTENT AREA
          ============================================ */}
      <main className="content">
        {/* ============================================
            HERO
            ============================================ */}
        <section className="hero" id="hero">
          <div className="hero-words">
            <div className="hero-word">Friendly</div>
            <div className="hero-word">Authentic</div>
            <div className="hero-word">Warm</div>
            <div className="hero-word">Joyful</div>
            <div className="hero-word">Together.</div>
          </div>
          <p className="hero-tagline">
            Plans made simple. Community made real.
          </p>
        </section>

        {/* ============================================
            SECTION DIVIDER
            ============================================ */}
        <div className="section-divider">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            01. LOGO
            ============================================ */}
        <section className="section" id="logo">
          <div className="section-intro">
            <span className="section-number">01 — Logo</span>
            <h2 className="section-title">Logo</h2>
            <p className="section-subtitle">
              The people people wordmark is our primary brand identifier. It uses
              Albert Sans in Extra Bold weight with tight tracking. The name is
              always written in lowercase as two words: people people.
            </p>
          </div>

          <div className="section-body">
            {/* Primary Variations */}
            <div className="subsection" id="logo-variations">
              <div className="subsection-header">
                <h4 className="subsection-title">Primary Variations</h4>
              </div>
              <div className="subsection-content">
                {/* Full Brand Mark */}
                <div style={{ marginBottom: "var(--space-lg)" }}>
                  <p className="spec-label" style={{ marginBottom: "var(--space-sm)" }}>Full Brand Mark</p>
                  <div className="grid-2">
                    <div className="logo-display logo-display-light" style={{ padding: "var(--space-lg)" }}>
                      <Image
                        src="/images/logos/brand.png"
                        alt="People People full brand mark"
                        width={300}
                        height={400}
                        style={{ height: "200px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                    <div className="logo-display logo-display-dark" style={{ padding: "var(--space-lg)" }}>
                      <Image
                        src="/images/logos/brand.png"
                        alt="People People full brand mark on dark"
                        width={300}
                        height={400}
                        style={{ height: "200px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--grey)", marginTop: "12px" }}>
                    The full brand mark includes the wordmark, icon, and establishment date. Use for hero placements, merchandise, and branded materials.
                  </p>
                </div>

                {/* Horizontal Word Lockup */}
                <div style={{ marginBottom: "var(--space-lg)" }}>
                  <p className="spec-label" style={{ marginBottom: "var(--space-sm)" }}>Horizontal Word Lockup</p>
                  <div className="grid-2">
                    <div className="logo-display logo-display-light" style={{ padding: "var(--space-md)" }}>
                      <Image
                        src="/images/logos/wordmark-1145x472.png"
                        alt="People People horizontal word lockup"
                        width={1145}
                        height={472}
                        style={{ height: "80px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                    <div className="logo-display logo-display-dark" style={{ padding: "var(--space-md)" }}>
                      <Image
                        src="/images/logos/wordmark-1145x472.png"
                        alt="People People horizontal word lockup on dark"
                        width={1145}
                        height={472}
                        style={{ height: "80px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--grey)", marginTop: "12px" }}>
                    The horizontal word lockup pairs the icon with the wordmark. Primary usage for web headers, navigation, and partnership materials.
                  </p>
                </div>

                {/* Color Backgrounds */}
                <div>
                  <p className="spec-label" style={{ marginBottom: "var(--space-sm)" }}>On Brand Backgrounds</p>
                  <div className="grid-3">
                    <div className="logo-display logo-display-dark" style={{ padding: "var(--space-md)" }}>
                      <Image
                        src="/images/logos/wordmark-320x132.png"
                        alt="Word lockup on dark"
                        width={320}
                        height={132}
                        style={{ height: "44px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                    <div className="logo-display logo-display-light" style={{ padding: "var(--space-md)" }}>
                      <Image
                        src="/images/logos/wordmark-320x132.png"
                        alt="Word lockup on light"
                        width={320}
                        height={132}
                        style={{ height: "44px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                    <div className="logo-display logo-display-yellow" style={{ padding: "var(--space-md)" }}>
                      <Image
                        src="/images/logos/wordmark-320x132.png"
                        alt="Word lockup on yellow"
                        width={320}
                        height={132}
                        style={{ height: "44px", width: "auto", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <div className="grid-3" style={{ marginTop: "8px" }}>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "13px", color: "var(--grey)" }}>On Dark</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "13px", color: "var(--grey)" }}>On Light</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "13px", color: "var(--grey)" }}>On Brand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Icon / Mark */}
            <div className="subsection" id="logo-appicon">
              <div className="subsection-header">
                <h4 className="subsection-title">App Icon / Brandmark</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-lg)",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "22px",
                        overflow: "hidden",
                        background: "var(--white)",
                        border: "1px solid var(--sand)",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-512.png"
                        alt="People People app icon"
                        width={512}
                        height={512}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                      Primary (512px)
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "22px",
                        overflow: "hidden",
                        background: "var(--black)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-512.png"
                        alt="People People app icon on dark"
                        width={512}
                        height={512}
                        style={{ width: "80%", height: "80%", objectFit: "contain" }}
                      />
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                      On Dark
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "14px",
                        overflow: "hidden",
                        background: "var(--white)",
                        border: "1px solid var(--sand)",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-132.png"
                        alt="People People app icon small"
                        width={132}
                        height={132}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                      Small (132px)
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        background: "var(--white)",
                        border: "1px solid var(--sand)",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-132.png"
                        alt="People People app icon favicon"
                        width={132}
                        height={132}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                      Favicon
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: "var(--space-md)" }}>
                  <p style={{ fontSize: "13px", color: "var(--grey)", lineHeight: 1.6 }}>
                    The brandmark features two figures embracing in the shape of a &quot;P&quot; — representing connection, warmth, and the People People mission. Available in multiple sizes: 1400px (print), 512px (app stores), and 132px (small contexts).
                  </p>
                </div>
              </div>
            </div>

            {/* Clear Space */}
            <div className="subsection" id="logo-clearspace">
              <div className="subsection-header">
                <h4 className="subsection-title">Clear Space</h4>
                <p className="subsection-desc">
                  Maintain a minimum clear space around the logo equal to the height
                  of the letter &quot;P&quot; in the wordmark. No other elements
                  should intrude into this zone.
                </p>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="clearspace-demo">
                    <div className="clearspace-border"></div>
                    <div className="clearspace-label clearspace-label-top">
                      P-height
                    </div>
                    <div className="clearspace-label clearspace-label-right">
                      P-height
                    </div>
                    <Image
                      src="/images/logos/wordmark-320x132.png"
                      alt="People People wordmark"
                      width={320}
                      height={132}
                      style={{ height: "40px", width: "auto", objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Minimum Size */}
            <div className="subsection" id="logo-minsize">
              <div className="subsection-header">
                <h4 className="subsection-title">Minimum Size</h4>
                <p className="subsection-desc">
                  Do not display the wordmark below these minimum sizes to ensure
                  legibility.
                </p>
              </div>
              <div className="subsection-content">
                <div className="min-size-grid">
                  <div className="min-size-item">
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "24px",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      people people
                    </span>
                    <span className="min-size-label">Print: 24px</span>
                  </div>
                  <div className="min-size-item">
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "16px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      people people
                    </span>
                    <span className="min-size-label">Digital: 16px</span>
                  </div>
                  <div className="min-size-item">
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-132.png"
                        alt="People People icon at minimum size"
                        width={132}
                        height={132}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span className="min-size-label">Mark: 32px</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Misuse */}
            <div className="subsection" id="logo-misuse">
              <div className="subsection-header">
                <h4 className="subsection-title">Logo Misuse</h4>
              </div>
              <div className="subsection-content">
                <div
                  className="do-dont"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="do-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{ fontSize: "32px", color: "var(--black)" }}
                      >
                        people people
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Always use
                      lowercase
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{ fontSize: "32px", color: "var(--black)" }}
                      >
                        People People
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use
                      title case
                    </div>
                  </div>
                </div>

                <div
                  className="do-dont"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="do-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{ fontSize: "32px", color: "var(--black)" }}
                      >
                        people people
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Always write as
                      two words
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{ fontSize: "32px", color: "var(--black)" }}
                      >
                        PeoplePeople
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t combine
                      into one word
                    </div>
                  </div>
                </div>

                <div
                  className="do-dont"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="do-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{
                          fontSize: "32px",
                          color: "var(--yellow)",
                          background: "var(--black)",
                          padding: "20px 32px",
                          borderRadius: "8px",
                        }}
                      >
                        people people
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Use approved color
                      combinations
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{ fontSize: "32px", color: "#FF6B9D" }}
                      >
                        people people
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use
                      unapproved colors
                    </div>
                  </div>
                </div>

                <div className="do-dont">
                  <div className="do-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{ fontSize: "32px", color: "var(--black)" }}
                      >
                        people people
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Use the logo as
                      provided
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{
                          fontSize: "32px",
                          color: "var(--black)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        people people
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t add extra
                      letter spacing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider section-divider-dark">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            02. COLOR
            ============================================ */}
        <section className="section section-dark" id="color">
          <div className="section-intro">
            <span className="section-number">02 — Color</span>
            <h2 className="section-title">Color Palette</h2>
            <p className="section-subtitle">
              Our palette is warm, grounded, and confident. Brand Yellow is our
              primary accent — used sparingly for maximum impact. The neutral
              range provides warmth without coldness.
            </p>
          </div>

          <div className="section-body">
            {/* Primary */}
            <div className="subsection" id="color-primary">
              <div className="subsection-header">
                <h4 className="subsection-title">Primary</h4>
              </div>
              <div className="subsection-content">
                <div className="grid-2">
                  <div
                    className="color-swatch-large"
                    style={{
                      background: "var(--yellow)",
                      color: "var(--black)",
                    }}
                  >
                    <div className="color-swatch-name">Brand Yellow</div>
                    <div className="color-swatch-hex">#F2D548</div>
                    <div className="color-swatch-rgb">RGB 242, 213, 72</div>
                  </div>
                  <div
                    className="color-swatch-large"
                    style={{
                      background: "var(--black)",
                      color: "var(--white)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="color-swatch-name">Brand Black</div>
                    <div className="color-swatch-hex">#1A1A1A</div>
                    <div className="color-swatch-rgb">RGB 26, 26, 26</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neutrals */}
            <div className="subsection" id="color-neutrals">
              <div className="subsection-header">
                <h4 className="subsection-title">Neutrals</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "12px",
                  }}
                >
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--black-soft)",
                      color: "var(--white)",
                    }}
                  >
                    <div className="color-swatch-name">Charcoal</div>
                    <div className="color-swatch-hex">#2C2926</div>
                  </div>
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--grey-dark)",
                      color: "var(--white)",
                    }}
                  >
                    <div className="color-swatch-name">Grey Dark</div>
                    <div className="color-swatch-hex">#6B655D</div>
                  </div>
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--sand)",
                      color: "var(--black)",
                    }}
                  >
                    <div className="color-swatch-name">Sand</div>
                    <div className="color-swatch-hex">#D4CFC4</div>
                  </div>
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--cream)",
                      color: "var(--black)",
                    }}
                  >
                    <div className="color-swatch-name">Cream</div>
                    <div className="color-swatch-hex">#EDE9E0</div>
                  </div>
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--warm-white)",
                      color: "var(--black)",
                    }}
                  >
                    <div className="color-swatch-name">Warm White</div>
                    <div className="color-swatch-hex">#F7F5F0</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Semantic / UI */}
            <div className="subsection" id="color-semantic">
              <div className="subsection-header">
                <h4 className="subsection-title">Semantic / UI</h4>
              </div>
              <div className="subsection-content">
                <div className="grid-4">
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--terracotta)",
                      color: "var(--white)",
                    }}
                  >
                    <div className="color-swatch-name">Terracotta</div>
                    <div className="color-swatch-hex">#C4654A</div>
                  </div>
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--green)",
                      color: "var(--white)",
                    }}
                  >
                    <div className="color-swatch-name">Green</div>
                    <div className="color-swatch-hex">#7A9B6D</div>
                  </div>
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--amber)",
                      color: "var(--white)",
                    }}
                  >
                    <div className="color-swatch-name">Amber</div>
                    <div className="color-swatch-hex">#C49B4A</div>
                  </div>
                  <div
                    className="color-swatch-small"
                    style={{
                      background: "var(--yellow-light)",
                      color: "var(--black)",
                    }}
                  >
                    <div className="color-swatch-name">Yellow Light</div>
                    <div className="color-swatch-hex">#FBF3D5</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Ratios */}
            <div className="subsection" id="color-ratios">
              <div className="subsection-header">
                <h4 className="subsection-title">Color Ratios</h4>
                <p className="subsection-desc">
                  Brand Yellow should be used sparingly — primarily for CTAs,
                  navigation highlights, and accent moments. The neutral palette
                  carries the majority of the visual weight.
                </p>
              </div>
              <div className="subsection-content">
                <div className="color-ratio" style={{ marginBottom: "12px" }}>
                  <div
                    className="color-ratio-segment"
                    style={{
                      flex: 5,
                      background: "var(--warm-white)",
                      color: "var(--black)",
                    }}
                  >
                    50%
                  </div>
                  <div
                    className="color-ratio-segment"
                    style={{
                      flex: 3,
                      background: "var(--black)",
                      color: "var(--white)",
                    }}
                  >
                    30%
                  </div>
                  <div
                    className="color-ratio-segment"
                    style={{
                      flex: 1.5,
                      background: "var(--sand)",
                      color: "var(--black)",
                    }}
                  >
                    15%
                  </div>
                  <div
                    className="color-ratio-segment"
                    style={{
                      flex: 0.5,
                      background: "var(--yellow)",
                      color: "var(--black)",
                    }}
                  >
                    5%
                  </div>
                </div>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                  Warm White 50% · Black 30% · Sand 15% · Yellow 5%
                </p>
              </div>
            </div>

            {/* Color Usage */}
            <div className="subsection" id="color-usage">
              <div className="subsection-header">
                <h4 className="subsection-title">Color Usage</h4>
              </div>
              <div className="subsection-content">
                <div className="do-dont">
                  <div className="do-card">
                    <div
                      className="dd-preview"
                      style={{
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          background: "var(--yellow)",
                          color: "var(--black)",
                          padding: "14px 28px",
                          borderRadius: "8px",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        Create a Plan
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                        Yellow for primary actions
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Use yellow for CTAs
                      and key actions
                    </div>
                  </div>
                  <div className="dont-card">
                    <div
                      className="dd-preview"
                      style={{ background: "var(--yellow)" }}
                    >
                      <div
                        style={{
                          padding: "24px",
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 600,
                            marginBottom: "8px",
                            color: "var(--black)",
                          }}
                        >
                          Large blocks of yellow
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "rgba(26,26,26,0.6)",
                          }}
                        >
                          overwhelm the design
                        </p>
                      </div>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use yellow
                      for large background areas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            03. TYPOGRAPHY
            ============================================ */}
        <section className="section" id="typography">
          <div className="section-intro">
            <span className="section-number">03 — Typography</span>
            <h2 className="section-title">Typography</h2>
            <p className="section-subtitle">
              Albert Sans is our sole typeface. A geometric sans-serif in the
              Helvetica lineage — clean, legible, and approachable. It says
              trustworthy, not pretentious.
            </p>
          </div>

          <div className="section-body">
            {/* Specimen */}
            <div className="subsection" id="type-specimen">
              <div className="subsection-header">
                <h4 className="subsection-title">Specimen</h4>
              </div>
              <div className="subsection-content">
                <div
                  className="type-specimen type-specimen-giant"
                  style={{
                    marginBottom: "var(--space-lg)",
                    color: "var(--black)",
                  }}
                >
                  Aa
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--space-md)",
                    marginBottom: "var(--space-lg)",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--grey-dark)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Albert Sans
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--grey)" }}>
                    Geometric Sans-Serif · Google Fonts · Open Source
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "20px",
                    color: "var(--grey-dark)",
                    letterSpacing: "0.1em",
                  }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  0123456789 !@#$%&*()
                </div>
              </div>
            </div>

            {/* Weight Scale */}
            <div className="subsection" id="type-weights">
              <div className="subsection-header">
                <h4 className="subsection-title">Weight Scale</h4>
              </div>
              <div className="subsection-content">
                <div>
                  <div className="type-weight-row">
                    <span className="type-weight-name">Light</span>
                    <span
                      className="type-weight-sample"
                      style={{ fontWeight: 300 }}
                    >
                      people people makes plans simple.
                    </span>
                    <span className="type-weight-value">300</span>
                  </div>
                  <div className="type-weight-row">
                    <span className="type-weight-name">Regular</span>
                    <span
                      className="type-weight-sample"
                      style={{ fontWeight: 400 }}
                    >
                      people people makes plans simple.
                    </span>
                    <span className="type-weight-value">400</span>
                  </div>
                  <div className="type-weight-row">
                    <span className="type-weight-name">Medium</span>
                    <span
                      className="type-weight-sample"
                      style={{ fontWeight: 500 }}
                    >
                      people people makes plans simple.
                    </span>
                    <span className="type-weight-value">500</span>
                  </div>
                  <div className="type-weight-row">
                    <span className="type-weight-name">Semi Bold</span>
                    <span
                      className="type-weight-sample"
                      style={{ fontWeight: 600 }}
                    >
                      people people makes plans simple.
                    </span>
                    <span className="type-weight-value">600</span>
                  </div>
                  <div className="type-weight-row">
                    <span className="type-weight-name">Bold</span>
                    <span
                      className="type-weight-sample"
                      style={{ fontWeight: 700 }}
                    >
                      people people makes plans simple.
                    </span>
                    <span className="type-weight-value">700</span>
                  </div>
                  <div
                    className="type-weight-row"
                    style={{ borderBottom: "none" }}
                  >
                    <span className="type-weight-name">Extra Bold</span>
                    <span
                      className="type-weight-sample"
                      style={{ fontWeight: 800 }}
                    >
                      people people makes plans simple.
                    </span>
                    <span className="type-weight-value">800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hierarchy */}
            <div className="subsection" id="type-hierarchy">
              <div className="subsection-header">
                <h4 className="subsection-title">Hierarchy</h4>
              </div>
              <div className="subsection-content">
                <table className="type-table">
                  <tbody>
                    <tr>
                      <td className="type-label">H1</td>
                      <td
                        style={{
                          fontSize: "40px",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.1,
                        }}
                      >
                        Plans made simple
                      </td>
                      <td className="type-spec">40px / Bold</td>
                    </tr>
                    <tr>
                      <td className="type-label">H2</td>
                      <td
                        style={{
                          fontSize: "32px",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.15,
                        }}
                      >
                        Plans made simple
                      </td>
                      <td className="type-spec">32px / Bold</td>
                    </tr>
                    <tr>
                      <td className="type-label">H3</td>
                      <td
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                          lineHeight: 1.2,
                        }}
                      >
                        Plans made simple
                      </td>
                      <td className="type-spec">24px / SemiBold</td>
                    </tr>
                    <tr>
                      <td className="type-label">H4</td>
                      <td
                        style={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        Plans made simple
                      </td>
                      <td className="type-spec">18px / SemiBold</td>
                    </tr>
                    <tr>
                      <td className="type-label">Body</td>
                      <td
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: 1.6,
                        }}
                      >
                        Plans made simple. Community made real. people people helps you
                        coordinate with the people who matter most.
                      </td>
                      <td className="type-spec">16px / Regular</td>
                    </tr>
                    <tr>
                      <td className="type-label">Caption</td>
                      <td
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "var(--grey-dark)",
                        }}
                      >
                        Plans made simple. Community made real.
                      </td>
                      <td className="type-spec">13px / Medium</td>
                    </tr>
                    <tr>
                      <td className="type-label">Overline</td>
                      <td
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          color: "var(--grey)",
                        }}
                      >
                        Quick Plan
                      </td>
                      <td className="type-spec">12px / SemiBold / Caps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Typesetting Rules */}
            <div className="subsection" id="type-rules">
              <div className="subsection-header">
                <h4 className="subsection-title">Typesetting Rules</h4>
              </div>
              <div className="subsection-content">
                <div
                  className="do-dont"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="do-card">
                    <div
                      className="dd-preview"
                      style={{
                        flexDirection: "column",
                        textAlign: "left",
                        alignItems: "flex-start",
                        padding: "32px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "28px",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          marginBottom: "8px",
                        }}
                      >
                        Dinner at the Parlour
                      </span>
                      <span
                        style={{ fontSize: "14px", color: "var(--grey-dark)" }}
                      >
                        Clear weight contrast between heading and body text.
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Use weight for
                      hierarchy
                    </div>
                  </div>
                  <div className="dont-card">
                    <div
                      className="dd-preview"
                      style={{
                        flexDirection: "column",
                        textAlign: "left",
                        alignItems: "flex-start",
                        padding: "32px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "28px",
                          fontWeight: 400,
                          marginBottom: "8px",
                        }}
                      >
                        Dinner at the Parlour
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "var(--grey-dark)",
                          fontWeight: 400,
                        }}
                      >
                        Everything at the same weight is hard to scan.
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use
                      uniform weight
                    </div>
                  </div>
                </div>

                <div className="do-dont">
                  <div className="do-card">
                    <div
                      className="dd-preview"
                      style={{
                        flexDirection: "column",
                        textAlign: "left",
                        alignItems: "flex-start",
                        padding: "32px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.65,
                          color: "var(--charcoal)",
                        }}
                      >
                        Come hungry. We have a reservation for 8 and the tasting menu
                        is worth it. Dress code is whatever makes you feel great.
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Generous line height
                      for body text (1.5–1.7)
                    </div>
                  </div>
                  <div className="dont-card">
                    <div
                      className="dd-preview"
                      style={{
                        flexDirection: "column",
                        textAlign: "left",
                        alignItems: "flex-start",
                        padding: "32px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.1,
                          color: "var(--charcoal)",
                        }}
                      >
                        Come hungry. We have a reservation for 8 and the tasting menu
                        is worth it. Dress code is whatever makes you feel great.
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use tight
                      line height for reading text
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            04. TONE OF VOICE
            ============================================ */}
        <section className="section section-cream" id="voice">
          <div className="section-intro">
            <span className="section-number">04 — Voice</span>
            <h2 className="section-title">Tone of Voice</h2>
            <p className="section-subtitle">
              people people speaks like a reliable friend who happens to have good
              taste. Warm but not cheesy. Helpful but not overbearing. Direct but
              never cold.
            </p>
          </div>

          <div className="section-body">
            {/* Brand Personality */}
            <div className="subsection" id="voice-personality">
              <div className="subsection-header">
                <h4 className="subsection-title">Brand Personality</h4>
              </div>
              <div className="subsection-content">
                <div className="grid-3">
                  <div className="voice-trait">
                    <div className="voice-trait-title">Trustworthy</div>
                    <div className="voice-trait-desc">
                      We&apos;re the friend who always follows through. Clear, honest,
                      no surprises. People count on us to make coordination
                      effortless.
                    </div>
                  </div>
                  <div className="voice-trait">
                    <div className="voice-trait-title">Down-to-earth</div>
                    <div className="voice-trait-desc">
                      No jargon, no hype. We talk like humans, not a marketing team.
                      Simple words, short sentences, real warmth.
                    </div>
                  </div>
                  <div className="voice-trait">
                    <div className="voice-trait-title">Encouraging</div>
                    <div className="voice-trait-desc">
                      We nudge people toward connection without being pushy. Every
                      interaction should feel like a gentle &quot;go for it.&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Principles */}
            <div className="subsection" id="voice-principles">
              <div className="subsection-header">
                <h4 className="subsection-title">Writing Principles</h4>
              </div>
              <div className="subsection-content">
                <div>
                  <div className="voice-principle">
                    <div className="voice-principle-number">1</div>
                    <div>
                      <div className="voice-principle-title">Lead with action</div>
                      <div className="voice-principle-desc">
                        Start with what the user can do, not what we offer. &quot;Create
                        a plan&quot; beats &quot;Plan creation is available.&quot;
                      </div>
                    </div>
                  </div>
                  <div className="voice-principle">
                    <div className="voice-principle-number">2</div>
                    <div>
                      <div className="voice-principle-title">Keep it short</div>
                      <div className="voice-principle-desc">
                        If it can be said in 5 words, don&apos;t use 15. Every word
                        earns its place. Cut adverbs, cut qualifiers, cut fluff.
                      </div>
                    </div>
                  </div>
                  <div className="voice-principle">
                    <div className="voice-principle-number">3</div>
                    <div>
                      <div className="voice-principle-title">Be human first</div>
                      <div className="voice-principle-desc">
                        Write how you&apos;d text a friend. Contractions are fine.
                        Fragments are fine. Personality is welcome — ego is not.
                      </div>
                    </div>
                  </div>
                  <div className="voice-principle">
                    <div className="voice-principle-number">4</div>
                    <div>
                      <div className="voice-principle-title">
                        Celebrate the people
                      </div>
                      <div className="voice-principle-desc">
                        The app is the tool, not the hero. Spotlight connections,
                        plans, and moments — not features.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Copy */}
            <div className="subsection" id="voice-examples">
              <div className="subsection-header">
                <h4 className="subsection-title">Example Copy</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginBottom: "var(--space-md)",
                  }}
                >
                  <div className="voice-example">
                    <div className="voice-example-label">
                      Empty State — No Plans
                    </div>
                    <div className="voice-example-text">
                      Nothing on the books yet. Start something — your people are
                      waiting.
                    </div>
                  </div>
                  <div className="voice-example">
                    <div className="voice-example-label">
                      Push Notification — Quick Plan
                    </div>
                    <div className="voice-example-text">
                      Maya&apos;s grabbing coffee in 30 min. You in?
                    </div>
                  </div>
                  <div className="voice-example">
                    <div className="voice-example-label">RSVP Confirmation</div>
                    <div className="voice-example-text">
                      You&apos;re in. See you Saturday at The Parlour.
                    </div>
                  </div>
                  <div className="voice-example">
                    <div className="voice-example-label">Connection Request</div>
                    <div className="voice-example-text">
                      James wants to connect. People you both know: Sofia, Raj.
                    </div>
                  </div>
                </div>

                <div className="do-dont">
                  <div className="do-card">
                    <div
                      className="dd-preview"
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "32px",
                        gap: "6px",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: 600 }}>
                        {'"You\'re in."'}
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: 600 }}>
                        {'"Coffee in 20?"'}
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: 600 }}>
                        {'"3 people are down."'}
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Short, warm, direct
                    </div>
                  </div>
                  <div className="dont-card">
                    <div
                      className="dd-preview"
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "32px",
                        gap: "6px",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: 600 }}>
                        {'"Your RSVP has been successfully recorded!"'}
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: 600 }}>
                        {'"Would you like to explore our curated plans?"'}
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: 600 }}>
                        {'"Maximize your social experience!"'}
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Corporate, verbose,
                      salesy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider section-divider-dark">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            05. LAYOUT & GRID
            ============================================ */}
        <section className="section section-dark" id="layout">
          <div className="section-intro">
            <span className="section-number">05 — Layout</span>
            <h2 className="section-title">Layout & Grid</h2>
            <p className="section-subtitle">
              Layouts are built on a 12-column grid with consistent margins and
              generous spacing. Whitespace is a design element — use it
              deliberately.
            </p>
          </div>

          <div className="section-body">
            {/* 12-Column Grid */}
            <div className="subsection" id="layout-grid">
              <div className="subsection-header">
                <h4 className="subsection-title">12-Column Grid</h4>
              </div>
              <div className="subsection-content">
                <div
                  className="grid-demo grid-demo-12"
                  style={{ marginBottom: "12px" }}
                >
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                  <div className="grid-col active"></div>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  24px gutter · 24px outer margins (mobile: 16px) · Max width: 1320px
                </p>
              </div>
            </div>

            {/* Common Layouts */}
            <div className="subsection" id="layout-common">
              <div className="subsection-header">
                <h4 className="subsection-title">Common Layouts</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div className="grid-demo grid-demo-12">
                    <div
                      className="grid-col active"
                      style={{ gridColumn: "span 6", minHeight: "80px" }}
                    ></div>
                    <div
                      className="grid-col active"
                      style={{ gridColumn: "span 6", minHeight: "80px" }}
                    ></div>
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                    6 + 6 — Equal split, used for do/don&apos;t comparisons,
                    side-by-side content
                  </p>

                  <div className="grid-demo grid-demo-12">
                    <div
                      className="grid-col active"
                      style={{ gridColumn: "span 4", minHeight: "80px" }}
                    ></div>
                    <div
                      className="grid-col active"
                      style={{ gridColumn: "span 8", minHeight: "80px" }}
                    ></div>
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                    4 + 8 — Sidebar / content, used for navigation + detail views
                  </p>

                  <div className="grid-demo grid-demo-12">
                    <div
                      className="grid-col active"
                      style={{ gridColumn: "span 4", minHeight: "80px" }}
                    ></div>
                    <div
                      className="grid-col active"
                      style={{ gridColumn: "span 4", minHeight: "80px" }}
                    ></div>
                    <div
                      className="grid-col active"
                      style={{ gridColumn: "span 4", minHeight: "80px" }}
                    ></div>
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                    4 + 4 + 4 — Card grid, used for features, traits, options
                  </p>
                </div>
              </div>
            </div>

            {/* Spacing Scale */}
            <div className="subsection" id="layout-spacing">
              <div className="subsection-header">
                <h4 className="subsection-title">Spacing Scale</h4>
              </div>
              <div className="subsection-content">
                <div>
                  <div className="spacing-token">
                    <span className="spacing-name">XS</span>
                    <div className="spacing-bar" style={{ width: "8px" }}></div>
                    <span className="spacing-value">
                      8px — Between tightly related elements
                    </span>
                  </div>
                  <div className="spacing-token">
                    <span className="spacing-name">SM</span>
                    <div className="spacing-bar" style={{ width: "16px" }}></div>
                    <span className="spacing-value">
                      16px — Between related elements
                    </span>
                  </div>
                  <div className="spacing-token">
                    <span className="spacing-name">MD</span>
                    <div className="spacing-bar" style={{ width: "32px" }}></div>
                    <span className="spacing-value">
                      32px — Between sections within a group
                    </span>
                  </div>
                  <div className="spacing-token">
                    <span className="spacing-name">LG</span>
                    <div className="spacing-bar" style={{ width: "64px" }}></div>
                    <span className="spacing-value">
                      64px — Between major groups
                    </span>
                  </div>
                  <div className="spacing-token">
                    <span className="spacing-name">XL</span>
                    <div className="spacing-bar" style={{ width: "96px" }}></div>
                    <span className="spacing-value">
                      96px — Between page sections (mobile)
                    </span>
                  </div>
                  <div
                    className="spacing-token"
                    style={{ borderBottom: "none" }}
                  >
                    <span className="spacing-name">XXL</span>
                    <div className="spacing-bar" style={{ width: "140px" }}></div>
                    <span className="spacing-value">
                      140px — Between page sections (desktop)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Radius */}
            <div className="subsection" id="layout-radius">
              <div className="subsection-header">
                <h4 className="subsection-title">Corner Radius</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-md)",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "4px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      4px — Chips, tags
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      8px — Buttons, inputs
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      12px — Cards
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      16px — Modals, sheets
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "32px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      Full — Pills, avatars
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            06. PHOTOGRAPHY
            ============================================ */}
        <section className="section" id="photography">
          <div className="section-intro">
            <span className="section-number">06 — Photography</span>
            <h2 className="section-title">Photography</h2>
            <p className="section-subtitle">
              Photography should feel candid, warm, and real. Real moments with
              real people — never staged or stock-feeling. Natural light preferred.
            </p>
          </div>

          <div className="section-body">
            {/* Categories */}
            <div className="subsection" id="photo-categories">
              <div className="subsection-header">
                <h4 className="subsection-title">Categories</h4>
              </div>
              <div className="subsection-content">
                <div className="grid-4">
                  <div
                    className="photo-card"
                    style={{ background: "var(--cream)" }}
                  >
                    <div
                      className="photo-placeholder"
                      style={{ color: "var(--grey-light)" }}
                    >
                      People Together
                    </div>
                    <div
                      className="photo-card-label"
                      style={{
                        background: "rgba(26,26,26,0.85)",
                        color: "var(--white)",
                      }}
                    >
                      Social Moments
                    </div>
                  </div>
                  <div
                    className="photo-card"
                    style={{ background: "var(--sand)" }}
                  >
                    <div
                      className="photo-placeholder"
                      style={{ color: "var(--grey)" }}
                    >
                      Food & Drinks
                    </div>
                    <div
                      className="photo-card-label"
                      style={{
                        background: "rgba(26,26,26,0.85)",
                        color: "var(--white)",
                      }}
                    >
                      Dining
                    </div>
                  </div>
                  <div
                    className="photo-card"
                    style={{ background: "var(--cream)" }}
                  >
                    <div
                      className="photo-placeholder"
                      style={{ color: "var(--grey-light)" }}
                    >
                      Interiors
                    </div>
                    <div
                      className="photo-card-label"
                      style={{
                        background: "rgba(26,26,26,0.85)",
                        color: "var(--white)",
                      }}
                    >
                      Places
                    </div>
                  </div>
                  <div
                    className="photo-card"
                    style={{ background: "var(--sand)" }}
                  >
                    <div
                      className="photo-placeholder"
                      style={{ color: "var(--grey)" }}
                    >
                      Outdoors
                    </div>
                    <div
                      className="photo-card-label"
                      style={{
                        background: "rgba(26,26,26,0.85)",
                        color: "var(--white)",
                      }}
                    >
                      Activities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Guidelines */}
            <div className="subsection" id="photo-treatment">
              <div className="subsection-header">
                <h4 className="subsection-title">Treatment Guidelines</h4>
              </div>
              <div className="subsection-content">
                <div
                  className="grid-3"
                  style={{ marginBottom: "var(--space-md)" }}
                >
                  <div>
                    <div
                      className="treatment-demo"
                      style={{
                        background: "var(--warm-white)",
                        color: "var(--grey)",
                        borderRadius: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      Natural Light
                      <br />
                      Warm Tones
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      Warm & Natural
                    </p>
                    <p
                      style={{ fontSize: "13px", color: "var(--grey-dark)" }}
                    >
                      Slight warmth in white balance. No heavy filters. Colors should
                      feel true to life but inviting.
                    </p>
                  </div>
                  <div>
                    <div
                      className="treatment-demo"
                      style={{
                        background: "var(--cream)",
                        color: "var(--grey)",
                        borderRadius: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      Shallow Focus
                      <br />
                      Subject Priority
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      Depth & Focus
                    </p>
                    <p
                      style={{ fontSize: "13px", color: "var(--grey-dark)" }}
                    >
                      Use shallow depth of field to direct attention. Backgrounds
                      should be contextual but not competing.
                    </p>
                  </div>
                  <div>
                    <div
                      className="treatment-demo"
                      style={{
                        background: "var(--warm-white)",
                        color: "var(--grey)",
                        borderRadius: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      Candid Moments
                      <br />
                      Not Posed
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      Authentic & Candid
                    </p>
                    <p
                      style={{ fontSize: "13px", color: "var(--grey-dark)" }}
                    >
                      Capture mid-conversation, mid-laugh, mid-meal. The best photos
                      feel like you happened to catch the moment.
                    </p>
                  </div>
                </div>

                <div className="do-dont">
                  <div className="do-card">
                    <div
                      className="dd-preview"
                      style={{
                        background: "var(--cream)",
                        color: "var(--grey)",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Candid, warm-lit, genuine
                      <br />
                      moments between people
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Natural, unposed,
                      warm light
                    </div>
                  </div>
                  <div className="dont-card">
                    <div
                      className="dd-preview"
                      style={{
                        background: "var(--cream)",
                        color: "var(--grey)",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Staged group shots, stock
                      <br />
                      photos, heavy filters
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use stock
                      photos or heavy editing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider section-divider-dark">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            07. ICONOGRAPHY
            ============================================ */}
        <section className="section section-dark" id="iconography">
          <div className="section-intro">
            <span className="section-number">07 — Iconography</span>
            <h2 className="section-title">Iconography</h2>
            <p className="section-subtitle">
              Icons are outlined, not filled. 1.5px stroke weight at 24px size.
              Simple, geometric, and instantly readable. They assist — they
              don&apos;t decorate.
            </p>
          </div>

          <div className="section-body">
            {/* Core Icon Set */}
            <div className="subsection" id="icon-set">
              <div className="subsection-header">
                <h4 className="subsection-title">Core Icon Set</h4>
              </div>
              <div className="subsection-content">
                <div className="icon-grid">
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 9h18M8 2v4M16 2v4" />
                    </svg>
                    <span className="icon-cell-label">Plans</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="9" cy="9" r="4" />
                      <circle cx="17" cy="9" r="4" />
                      <path d="M2 21c0-3.5 3.5-6 7-6s7 2.5 7 6" />
                    </svg>
                    <span className="icon-cell-label">People</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <span className="icon-cell-label">Location</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    <span className="icon-cell-label">Chat</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
                      <path d="M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                    <span className="icon-cell-label">Alerts</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                    <span className="icon-cell-label">Settings</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="icon-cell-label">Time</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <span className="icon-cell-label">Search</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                    </svg>
                    <span className="icon-cell-label">Share</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                    <span className="icon-cell-label">Add</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                    <span className="icon-cell-label">Profile</span>
                  </div>
                  <div className="icon-cell">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
                    </svg>
                    <span className="icon-cell-label">Favorite</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="subsection" id="icon-specs">
              <div className="subsection-header">
                <h4 className="subsection-title">Specifications</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "var(--space-md)",
                  }}
                >
                  <div className="icon-spec">
                    <div
                      className="icon-spec-swatch"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                      </svg>
                    </div>
                    <div className="icon-spec-text">
                      <div className="icon-spec-title">24 x 24px</div>
                      Default icon size. Used in navigation, inline with text, and
                      action buttons.
                    </div>
                  </div>
                  <div className="icon-spec">
                    <div
                      className="icon-spec-swatch"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                      </svg>
                    </div>
                    <div className="icon-spec-text">
                      <div className="icon-spec-title">1.5px stroke</div>
                      Consistent stroke weight across all icons. Thin enough to feel
                      refined, thick enough to stay legible at small sizes.
                    </div>
                  </div>
                  <div className="icon-spec">
                    <div
                      className="icon-spec-swatch"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <div className="icon-spec-text">
                      <div className="icon-spec-title">
                        Rounded caps and joins
                      </div>
                      All strokes use round line caps and round line joins for a
                      softer, friendlier feel.
                    </div>
                  </div>
                </div>

                <div className="do-dont">
                  <div className="do-card">
                    <div
                      className="dd-preview"
                      style={{ gap: "24px" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M3 9h18M8 2v4M16 2v4" />
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Outline style,
                      consistent 1.5px stroke
                    </div>
                  </div>
                  <div className="dont-card">
                    <div
                      className="dd-preview"
                      style={{ gap: "24px" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use filled
                      icons or mixed styles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            08. BUTTONS
            ============================================ */}
        <section className="section" id="buttons">
          <div className="section-intro">
            <span className="section-number">08 — Buttons</span>
            <h2 className="section-title">Buttons</h2>
            <p className="section-subtitle">
              Pill-shaped buttons are a core element of the people people interface.
              Every button maintains high contrast and readability through
              deliberate color pairings and clear hover state transitions.
            </p>
          </div>

          <div className="section-body">
            {/* Primary Styles */}
            <div className="subsection" id="btn-styles">
              <div className="subsection-header">
                <h4 className="subsection-title">Primary Styles</h4>
                <p className="subsection-desc">
                  Two standard button styles cover most use cases. Both use a
                  full-radius (pill) shape and swap foreground/background on hover
                  to signal interactivity while preserving contrast.
                </p>
              </div>
              <div className="subsection-content">
                {/* Outline Button */}
                <div style={{ marginBottom: "var(--space-lg)" }}>
                  <p className="spec-label" style={{ marginBottom: "var(--space-sm)" }}>Outline Button</p>
                  <p style={{ fontSize: "13px", color: "var(--grey-dark)", marginBottom: "var(--space-md)", maxWidth: "480px", lineHeight: 1.6 }}>
                    White background, black text, black border. On hover, the
                    background fills yellow and the border is removed. Use for
                    secondary actions and navigation.
                  </p>
                  <div className="grid-2">
                    <div className="btn-demo-card">
                      <span className="btn-demo-state-label">Default</span>
                      <div className="btn-demo-area">
                        <button
                          className="btn-pill btn-pill-outline"
                          style={{ cursor: "default" }}
                        >
                          Get Started
                        </button>
                      </div>
                      <div className="btn-demo-specs">
                        <span>Background: <strong>#FFFFFF</strong></span>
                        <span>Text: <strong>#1A1A1A</strong></span>
                        <span>Border: <strong>1px #1A1A1A</strong></span>
                      </div>
                    </div>
                    <div className="btn-demo-card">
                      <span className="btn-demo-state-label">Hover</span>
                      <div className="btn-demo-area">
                        <button
                          className="btn-pill btn-pill-outline-hover"
                          style={{ cursor: "default" }}
                        >
                          Get Started
                        </button>
                      </div>
                      <div className="btn-demo-specs">
                        <span>Background: <strong>#EFBF04</strong></span>
                        <span>Text: <strong>#1A1A1A</strong></span>
                        <span>Border: <strong>none</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solid Button */}
                <div>
                  <p className="spec-label" style={{ marginBottom: "var(--space-sm)" }}>Solid Button</p>
                  <p style={{ fontSize: "13px", color: "var(--grey-dark)", marginBottom: "var(--space-md)", maxWidth: "480px", lineHeight: 1.6 }}>
                    Black background, white text. On hover, flips to white
                    background with black text and a black border. Use for
                    primary calls-to-action.
                  </p>
                  <div className="grid-2">
                    <div className="btn-demo-card">
                      <span className="btn-demo-state-label">Default</span>
                      <div className="btn-demo-area">
                        <button
                          className="btn-pill btn-pill-solid"
                          style={{ cursor: "default" }}
                        >
                          Download
                        </button>
                      </div>
                      <div className="btn-demo-specs">
                        <span>Background: <strong>#1A1A1A</strong></span>
                        <span>Text: <strong>#FFFFFF</strong></span>
                        <span>Border: <strong>none</strong></span>
                      </div>
                    </div>
                    <div className="btn-demo-card">
                      <span className="btn-demo-state-label">Hover</span>
                      <div className="btn-demo-area">
                        <button
                          className="btn-pill btn-pill-solid-hover"
                          style={{ cursor: "default" }}
                        >
                          Download
                        </button>
                      </div>
                      <div className="btn-demo-specs">
                        <span>Background: <strong>#FFFFFF</strong></span>
                        <span>Text: <strong>#1A1A1A</strong></span>
                        <span>Border: <strong>1px #1A1A1A</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Anatomy */}
            <div className="subsection" id="btn-anatomy">
              <div className="subsection-header">
                <h4 className="subsection-title">Anatomy</h4>
                <p className="subsection-desc">
                  Consistent sizing and spacing across all button instances.
                </p>
              </div>
              <div className="subsection-content">
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-md)" }}>
                  <div style={{ flex: "1 1 260px", maxWidth: "340px" }}>
                    <div className="btn-anatomy-card">
                      <div className="btn-anatomy-visual">
                        <button className="btn-pill btn-pill-outline" style={{ cursor: "default" }}>
                          Button Label
                        </button>
                      </div>
                      <div className="btn-anatomy-specs">
                        <div className="btn-anatomy-row">
                          <span>Shape</span><span>Full radius (pill)</span>
                        </div>
                        <div className="btn-anatomy-row">
                          <span>Height</span><span>40–48px</span>
                        </div>
                        <div className="btn-anatomy-row">
                          <span>Padding</span><span>12px 24px</span>
                        </div>
                        <div className="btn-anatomy-row">
                          <span>Font size</span><span>14px</span>
                        </div>
                        <div className="btn-anatomy-row">
                          <span>Font weight</span><span>500 (Medium)</span>
                        </div>
                        <div className="btn-anatomy-row">
                          <span>Tracking</span><span>0.02em</span>
                        </div>
                        <div className="btn-anatomy-row" style={{ borderBottom: "none" }}>
                          <span>Transition</span><span>200ms ease</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: "1 1 260px", maxWidth: "340px" }}>
                    <p className="spec-label" style={{ marginBottom: "var(--space-sm)" }}>Size Variants</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                      <div>
                        <button className="btn-pill btn-pill-outline" style={{ cursor: "default", fontSize: "12px", padding: "8px 20px" }}>
                          Small
                        </button>
                        <span style={{ display: "block", fontSize: "11px", color: "var(--grey)", marginTop: "6px" }}>12px / 8px 20px</span>
                      </div>
                      <div>
                        <button className="btn-pill btn-pill-outline" style={{ cursor: "default" }}>
                          Default
                        </button>
                        <span style={{ display: "block", fontSize: "11px", color: "var(--grey)", marginTop: "6px" }}>14px / 12px 24px</span>
                      </div>
                      <div>
                        <button className="btn-pill btn-pill-outline" style={{ cursor: "default", fontSize: "16px", padding: "16px 32px" }}>
                          Large
                        </button>
                        <span style={{ display: "block", fontSize: "11px", color: "var(--grey)", marginTop: "6px" }}>16px / 16px 32px</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Misuse */}
            <div className="subsection" id="btn-misuse">
              <div className="subsection-header">
                <h4 className="subsection-title">Misuse</h4>
              </div>
              <div className="subsection-content">
                <div className="do-dont" style={{ marginBottom: "20px" }}>
                  <div className="do-card">
                    <div className="dd-preview">
                      <button className="btn-pill btn-pill-outline" style={{ cursor: "default" }}>
                        Get Started
                      </button>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Use pill shape
                      with high-contrast pairing
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <button style={{
                        cursor: "default",
                        background: "var(--white)",
                        color: "var(--black)",
                        border: "1px solid var(--black)",
                        borderRadius: "4px",
                        padding: "12px 24px",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "var(--font)",
                      }}>
                        Get Started
                      </button>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use
                      sharp or squared corners
                    </div>
                  </div>
                </div>

                <div className="do-dont" style={{ marginBottom: "20px" }}>
                  <div className="do-card">
                    <div className="dd-preview">
                      <button className="btn-pill btn-pill-solid" style={{ cursor: "default" }}>
                        Download
                      </button>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Black/white
                      or outline/yellow — always high contrast
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <button style={{
                        cursor: "default",
                        background: "#E8E8E8",
                        color: "#999",
                        border: "none",
                        borderRadius: "9999px",
                        padding: "12px 24px",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "var(--font)",
                      }}>
                        Download
                      </button>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t use
                      low-contrast color combinations
                    </div>
                  </div>
                </div>

                <div className="do-dont">
                  <div className="do-card">
                    <div className="dd-preview">
                      <button className="btn-pill btn-pill-outline-hover" style={{ cursor: "default" }}>
                        Hover State
                      </button>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Hover states
                      should clearly swap fills
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <button style={{
                        cursor: "default",
                        background: "var(--white)",
                        color: "var(--black)",
                        border: "1px solid var(--black)",
                        borderRadius: "9999px",
                        padding: "12px 24px",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "var(--font)",
                        opacity: 0.5,
                      }}>
                        Hover State
                      </button>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t rely
                      on opacity alone for hover feedback
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            09. CO-BRANDING
            ============================================ */}
        <section className="section" id="cobranding">
          <div className="section-intro">
            <span className="section-number">09 — Co-Branding</span>
            <h2 className="section-title">Co-Branding</h2>
            <p className="section-subtitle">
              When people people appears alongside partner brands, maintain clear
              hierarchy. Our wordmark comes first (or has equal weight) and always
              retains proper clear space.
            </p>
          </div>

          <div className="section-body">
            {/* Lockup Examples */}
            <div className="subsection" id="cobrand-lockups">
              <div className="subsection-header">
                <h4 className="subsection-title">Lockup Examples</h4>
              </div>
              <div className="subsection-content">
                <div className="grid-2">
                  <div
                    className="lockup-demo"
                    style={{ background: "var(--warm-white)" }}
                  >
                    <Image
                      src="/images/logos/wordmark-320x132.png"
                      alt="People People"
                      width={320}
                      height={132}
                      style={{ height: "32px", width: "auto", objectFit: "contain" }}
                    />
                    <div className="lockup-divider"></div>
                    <span className="lockup-partner">Partner</span>
                  </div>
                  <div
                    className="lockup-demo"
                    style={{ background: "var(--black)" }}
                  >
                    <Image
                      src="/images/logos/wordmark-320x132.png"
                      alt="People People"
                      width={320}
                      height={132}
                      style={{ height: "32px", width: "auto", objectFit: "contain" }}
                    />
                    <div className="lockup-divider" style={{ background: "rgba(255,255,255,0.2)" }}></div>
                    <span className="lockup-partner" style={{ color: "rgba(255,255,255,0.4)" }}>Partner</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hierarchy Rules */}
            <div className="subsection" id="cobrand-hierarchy">
              <div className="subsection-header">
                <h4 className="subsection-title">Hierarchy Rules</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    maxWidth: "600px",
                    marginBottom: "var(--space-md)",
                  }}
                >
                  <div className="voice-principle">
                    <div
                      className="voice-principle-number"
                      style={{ color: "var(--black)" }}
                    >
                      1
                    </div>
                    <div>
                      <div className="voice-principle-title">
                        people people leads
                      </div>
                      <div className="voice-principle-desc">
                        In co-branded materials where people people is the primary
                        platform, our logo appears first (left or top).
                      </div>
                    </div>
                  </div>
                  <div className="voice-principle">
                    <div
                      className="voice-principle-number"
                      style={{ color: "var(--black)" }}
                    >
                      2
                    </div>
                    <div>
                      <div className="voice-principle-title">Divider required</div>
                      <div className="voice-principle-desc">
                        A vertical rule or generous space separates the two brands.
                        Never let logos touch or overlap.
                      </div>
                    </div>
                  </div>
                  <div className="voice-principle">
                    <div
                      className="voice-principle-number"
                      style={{ color: "var(--black)" }}
                    >
                      3
                    </div>
                    <div>
                      <div className="voice-principle-title">Size balance</div>
                      <div className="voice-principle-desc">
                        Partner logos should be optically balanced with ours — not
                        necessarily the same pixel size, but equal visual weight.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="do-dont">
                  <div className="do-card">
                    <div
                      className="dd-preview"
                      style={{ gap: "20px" }}
                    >
                      <span
                        className="logo-text"
                        style={{ fontSize: "24px", color: "var(--black)" }}
                      >
                        people people
                      </span>
                      <div
                        style={{
                          width: "1px",
                          height: "28px",
                          background: "var(--sand)",
                        }}
                      ></div>
                      <span style={{ fontSize: "18px", color: "var(--grey)" }}>
                        Partner
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2713"}</div> Clear separation with
                      divider
                    </div>
                  </div>
                  <div className="dont-card">
                    <div className="dd-preview">
                      <span
                        className="logo-text"
                        style={{ fontSize: "20px", color: "var(--black)" }}
                      >
                        people people
                      </span>
                      <span
                        style={{
                          fontSize: "26px",
                          fontWeight: 800,
                          color: "var(--black)",
                          marginLeft: "4px",
                        }}
                      >
                        Partner
                      </span>
                    </div>
                    <div className="dd-label">
                      <div className="dd-check">{"\u2715"}</div> Don&apos;t merge
                      logos without separation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider section-divider-dark">
          <span className="section-divider-text">people people</span>
        </div>

        {/* ============================================
            10. APPLICATIONS
            ============================================ */}
        <section className="section section-dark" id="applications">
          <div className="section-intro">
            <span className="section-number">10 — Applications</span>
            <h2 className="section-title">Applications</h2>
            <p className="section-subtitle">
              The brand in context. These examples show how people people&apos;s
              visual identity works across touchpoints — from screens to print to
              physical spaces.
            </p>
          </div>

          <div className="section-body">
            {/* Social Media */}
            <div className="subsection" id="app-social">
              <div className="subsection-header">
                <h4 className="subsection-title">Social Media</h4>
              </div>
              <div className="subsection-content">
                <div className="grid-2">
                  <div className="mockup-social">
                    <div className="mockup-social-header">
                      <div className="mockup-social-avatar" style={{ overflow: "hidden", padding: 0 }}>
                        <Image
                          src="/images/logos/icon-132.png"
                          alt="people people avatar"
                          width={132}
                          height={132}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <div className="mockup-social-name">people people</div>
                        <div className="mockup-social-handle">@peoplepeople</div>
                      </div>
                    </div>
                    <div className="mockup-social-body">
                      <div className="mockup-social-text">
                        Plans are better when they&apos;re simple. New Quick Plans —
                        create a plan in 10 seconds, send it to your people. No forms,
                        no friction. Just &quot;coffee in 30?&quot;
                      </div>
                      <div
                        className="mockup-social-image"
                        style={{
                          background: "var(--yellow)",
                          color: "var(--black)",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              fontSize: "28px",
                              fontWeight: 800,
                              letterSpacing: "-0.03em",
                              marginBottom: "4px",
                            }}
                          >
                            Quick Plans
                          </div>
                          <div style={{ fontSize: "13px", fontWeight: 500 }}>
                            10 seconds. That&apos;s it.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mockup-social">
                    <div className="mockup-social-header">
                      <div className="mockup-social-avatar" style={{ overflow: "hidden", padding: 0 }}>
                        <Image
                          src="/images/logos/icon-132.png"
                          alt="people people avatar"
                          width={132}
                          height={132}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <div className="mockup-social-name">people people</div>
                        <div className="mockup-social-handle">@peoplepeople</div>
                      </div>
                    </div>
                    <div className="mockup-social-body">
                      <div className="mockup-social-text">
                        Your city. Your people. Your places. Build a personal culture
                        map with reviews from people you actually trust.
                      </div>
                      <div
                        className="mockup-social-image"
                        style={{
                          background: "var(--black)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "var(--white)",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 500,
                              color: "var(--yellow)",
                              marginBottom: "8px",
                            }}
                          >
                            Introducing
                          </div>
                          <div
                            style={{
                              fontSize: "28px",
                              fontWeight: 800,
                              letterSpacing: "-0.03em",
                            }}
                          >
                            Places
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Card */}
            <div className="subsection" id="app-cards">
              <div className="subsection-header">
                <h4 className="subsection-title">Business Card</h4>
              </div>
              <div className="subsection-content">
                <div className="grid-2">
                  <div className="mockup-card">
                    <div className="mockup-card-top">
                      <div className="mockup-card-logo">
                        <Image
                          src="/images/logos/wordmark-320x132.png"
                          alt="People People"
                          width={320}
                          height={132}
                          style={{ height: "20px", width: "auto", objectFit: "contain" }}
                        />
                      </div>
                      <div className="mockup-card-mark" style={{ overflow: "hidden", padding: 0 }}>
                        <Image
                          src="/images/logos/icon-132.png"
                          alt="People People icon"
                          width={132}
                          height={132}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="mockup-card-bottom">
                      <div className="mockup-card-name">Maya Chen</div>
                      <div className="mockup-card-title">Co-Founder</div>
                      <div className="mockup-card-url">peoplepeople.app</div>
                    </div>
                  </div>

                  <div
                    className="mockup-card"
                    style={{
                      background: "var(--yellow)",
                      color: "var(--black)",
                    }}
                  >
                    <div className="mockup-card-top">
                      <div className="mockup-card-logo">
                        <Image
                          src="/images/logos/wordmark-320x132.png"
                          alt="People People"
                          width={320}
                          height={132}
                          style={{ height: "20px", width: "auto", objectFit: "contain" }}
                        />
                      </div>
                      <div
                        className="mockup-card-mark"
                        style={{
                          background: "var(--black)",
                          overflow: "hidden",
                          padding: 0,
                        }}
                      >
                        <Image
                          src="/images/logos/icon-132.png"
                          alt="People People icon"
                          width={132}
                          height={132}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="mockup-card-bottom">
                      <div
                        className="mockup-card-name"
                        style={{ color: "var(--black)" }}
                      >
                        Maya Chen
                      </div>
                      <div
                        className="mockup-card-title"
                        style={{ color: "rgba(26,26,26,0.5)" }}
                      >
                        Co-Founder
                      </div>
                      <div
                        className="mockup-card-url"
                        style={{ color: "var(--black)" }}
                      >
                        peoplepeople.app
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signage */}
            <div className="subsection" id="app-signage">
              <div className="subsection-header">
                <h4 className="subsection-title">Signage</h4>
              </div>
              <div className="subsection-content">
                <div className="mockup-signage">
                  <div className="mockup-signage-bg">people people</div>
                  <div className="mockup-signage-text">
                    people<span> people</span>
                  </div>
                </div>
              </div>
            </div>

            {/* App Icon */}
            <div className="subsection" id="app-icon">
              <div className="subsection-header">
                <h4 className="subsection-title">App Icon</h4>
              </div>
              <div className="subsection-content">
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-lg)",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "28px",
                        overflow: "hidden",
                        background: "var(--white)",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-512.png"
                        alt="People People iOS/Android app icon"
                        width={512}
                        height={512}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      iOS / Android
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "28px",
                        overflow: "hidden",
                        background: "var(--black)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-512.png"
                        alt="People People app icon on dark"
                        width={512}
                        height={512}
                        style={{ width: "80%", height: "80%", objectFit: "contain" }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      Alternate Dark
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "60px",
                        overflow: "hidden",
                        background: "var(--white)",
                      }}
                    >
                      <Image
                        src="/images/logos/icon-512.png"
                        alt="People People web favicon"
                        width={512}
                        height={512}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      Web Favicon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FOOTER
            ============================================ */}
        <footer className="brand-footer">
          <div className="brand-footer-logo">
            <Image
              src="/images/logos/wordmark-320x132.png"
              alt="People People"
              width={320}
              height={132}
              style={{ height: "28px", width: "auto", objectFit: "contain" }}
            />
          </div>
          <div className="brand-footer-version">Brand Guidelines v1.0</div>
          <div className="brand-footer-note">
            February 2026 · For internal and partner use
          </div>
        </footer>
      </main>
    </div>
  );
}
