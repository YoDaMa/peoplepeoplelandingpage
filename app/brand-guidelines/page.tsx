"use client";

import "./styles.css";
import { Albert_Sans } from "next/font/google";
import { useEffect, useState, useRef, useCallback } from "react";

const albertSans = Albert_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SECTION_IDS = [
  "hero",
  "logo",
  "color",
  "typography",
  "voice",
  "layout",
  "photography",
  "iconography",
  "cobranding",
  "applications",
];

export default function BrandGuidelines() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Nav scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Dot click navigation
  const handleDotClick = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className={albertSans.className}>
      {/* NAV */}
      <nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        id="nav"
        ref={navRef}
      >
        <div className="nav-brand">PeoplePeople</div>
        <ul className="nav-links">
          <li>
            <a
              href="#logo"
              className={activeSection === "logo" ? "active" : ""}
            >
              Logo
            </a>
          </li>
          <li>
            <a
              href="#color"
              className={activeSection === "color" ? "active" : ""}
            >
              Color
            </a>
          </li>
          <li>
            <a
              href="#typography"
              className={activeSection === "typography" ? "active" : ""}
            >
              Type
            </a>
          </li>
          <li>
            <a
              href="#voice"
              className={activeSection === "voice" ? "active" : ""}
            >
              Voice
            </a>
          </li>
          <li>
            <a
              href="#layout"
              className={activeSection === "layout" ? "active" : ""}
            >
              Layout
            </a>
          </li>
          <li>
            <a
              href="#photography"
              className={activeSection === "photography" ? "active" : ""}
            >
              Photo
            </a>
          </li>
          <li>
            <a
              href="#iconography"
              className={activeSection === "iconography" ? "active" : ""}
            >
              Icons
            </a>
          </li>
          <li>
            <a
              href="#cobranding"
              className={activeSection === "cobranding" ? "active" : ""}
            >
              Co-Brand
            </a>
          </li>
          <li>
            <a
              href="#applications"
              className={activeSection === "applications" ? "active" : ""}
            >
              Applications
            </a>
          </li>
        </ul>
      </nav>

      {/* SECTION INDICATOR */}
      <div className="section-indicator" id="sectionIndicator">
        {SECTION_IDS.map((id) => (
          <div
            key={id}
            className={`indicator-dot${activeSection === id ? " active" : ""}`}
            data-section={id}
            onClick={() => handleDotClick(id)}
          />
        ))}
      </div>

      {/* ============================================
          HERO
          ============================================ */}
      <section className="hero" id="hero">
        <div className="hero-bg-text">PeoplePeople</div>
        <div className="hero-content">
          <p className="hero-eyebrow">Brand Guidelines</p>
          <h1 className="hero-title">
            People<span>People</span>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">Plans made simple. Community made real.</p>
        </div>
        <div className="hero-version">Version 1.0 — February 2026</div>
        <div className="hero-scroll">
          Scroll
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* ============================================
          01. LOGO
          ============================================ */}
      <section className="section" id="logo">
        <div className="container">
          <span className="section-number">01</span>
          <h2 className="section-title">Logo</h2>
          <p className="section-subtitle">
            The PeoplePeople wordmark is our primary brand identifier. It uses
            Albert Sans in Extra Bold weight with tight tracking. The name is
            always written as one word: PeoplePeople.
          </p>

          <hr className="rule" />

          {/* Primary Variations */}
          <p className="spec-label">Primary Variations</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-3"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            <div className="logo-display logo-display-dark">
              <span
                className="logo-text logo-text-lg"
                style={{ color: "var(--yellow)" }}
              >
                PeoplePeople
              </span>
            </div>
            <div className="logo-display logo-display-light">
              <span
                className="logo-text logo-text-lg"
                style={{ color: "var(--black)" }}
              >
                PeoplePeople
              </span>
            </div>
            <div className="logo-display logo-display-yellow">
              <span
                className="logo-text logo-text-lg"
                style={{ color: "var(--black)" }}
              >
                PeoplePeople
              </span>
            </div>
          </div>

          <div
            className="grid-3"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            <div style={{ textAlign: "center" }}>
              <p className="spec-label">On Dark</p>
              <p style={{ fontSize: "13px", color: "var(--grey)" }}>
                Yellow wordmark on black. Primary usage.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p className="spec-label">On Light</p>
              <p style={{ fontSize: "13px", color: "var(--grey)" }}>
                Black wordmark on light backgrounds.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p className="spec-label">On Brand</p>
              <p style={{ fontSize: "13px", color: "var(--grey)" }}>
                Black wordmark on yellow.
              </p>
            </div>
          </div>

          <hr className="rule" />

          {/* App Icon / Mark */}
          <p className="spec-label">App Icon / Brandmark</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            style={{
              display: "flex",
              gap: "var(--space-md)",
              marginBottom: "var(--space-lg)",
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
                className="logo-mark"
                style={{
                  background: "var(--yellow)",
                  color: "var(--black)",
                }}
              >
                Pp
              </div>
              <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                Primary
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
                className="logo-mark"
                style={{
                  background: "var(--black)",
                  color: "var(--yellow)",
                }}
              >
                Pp
              </div>
              <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                Inverted
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
                className="logo-mark"
                style={{
                  background: "var(--white)",
                  color: "var(--black)",
                  border: "1px solid var(--sand)",
                }}
              >
                Pp
              </div>
              <span style={{ fontSize: "12px", color: "var(--grey)" }}>
                Light
              </span>
            </div>
          </div>

          <hr className="rule" />

          {/* Clear Space */}
          <p className="spec-label">Clear Space</p>
          <div style={{ marginBottom: "var(--space-sm)" }}></div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--grey-dark)",
              marginBottom: "var(--space-md)",
              maxWidth: "480px",
            }}
          >
            Maintain a minimum clear space around the logo equal to the height
            of the letter &quot;P&quot; in the wordmark. No other elements
            should intrude into this zone.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "var(--space-lg)",
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
              <span
                className="logo-text logo-text-md"
                style={{ color: "var(--black)" }}
              >
                PeoplePeople
              </span>
            </div>
          </div>

          <hr className="rule" />

          {/* Minimum Size */}
          <p className="spec-label">Minimum Size</p>
          <div style={{ marginBottom: "var(--space-sm)" }}></div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--grey-dark)",
              marginBottom: "var(--space-md)",
              maxWidth: "480px",
            }}
          >
            Do not display the wordmark below these minimum sizes to ensure
            legibility.
          </p>

          <div
            className="min-size-grid"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            <div className="min-size-item">
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "24px",
                  letterSpacing: "-0.03em",
                }}
              >
                PeoplePeople
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
                PeoplePeople
              </span>
              <span className="min-size-label">Digital: 16px</span>
            </div>
            <div className="min-size-item">
              <div
                className="logo-mark"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  background: "var(--yellow)",
                  color: "var(--black)",
                }}
              >
                Pp
              </div>
              <span className="min-size-label">Mark: 32px</span>
            </div>
          </div>

          <hr className="rule" />

          {/* Do / Don't */}
          <p className="spec-label">Logo Misuse</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="do-dont"
            style={{ marginBottom: "var(--space-md)" }}
          >
            <div className="do-card">
              <div className="dd-preview">
                <span
                  className="logo-text"
                  style={{ fontSize: "32px", color: "var(--black)" }}
                >
                  PeoplePeople
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
                  PeoplePeople
                </span>
              </div>
              <div className="dd-label">
                <div className="dd-check">{"\u2715"}</div> Don&apos;t add extra
                letter spacing
              </div>
            </div>
          </div>

          <div
            className="do-dont"
            style={{ marginBottom: "var(--space-md)" }}
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
                  PeoplePeople
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
                  PeoplePeople
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
                  PeoplePeople
                </span>
              </div>
              <div className="dd-label">
                <div className="dd-check">{"\u2713"}</div> Always write as one
                word, camelCase
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
                <div className="dd-check">{"\u2715"}</div> Don&apos;t separate
                into two words
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          02. COLOR
          ============================================ */}
      <section className="section section-dark" id="color">
        <div className="container">
          <span className="section-number">02</span>
          <h2 className="section-title">Color Palette</h2>
          <p className="section-subtitle">
            Our palette is warm, grounded, and confident. Brand Yellow is our
            primary accent — used sparingly for maximum impact. The neutral
            range provides warmth without coldness.
          </p>

          <hr className="rule" />

          <p className="spec-label">Primary</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-2"
            style={{ marginBottom: "var(--space-lg)" }}
          >
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

          <hr className="rule" />

          <p className="spec-label">Neutrals</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "12px",
              marginBottom: "var(--space-lg)",
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

          <hr className="rule" />

          <p className="spec-label">Semantic / UI</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-4"
            style={{ marginBottom: "var(--space-lg)" }}
          >
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

          <hr className="rule" />

          <p className="spec-label">Color Ratios</p>
          <div style={{ marginBottom: "var(--space-sm)" }}></div>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "var(--space-md)",
              maxWidth: "480px",
            }}
          >
            Brand Yellow should be used sparingly — primarily for CTAs,
            navigation highlights, and accent moments. The neutral palette
            carries the majority of the visual weight.
          </p>

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

          <hr className="rule" />

          <p className="spec-label">Color Usage</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

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
      </section>

      {/* ============================================
          03. TYPOGRAPHY
          ============================================ */}
      <section className="section" id="typography">
        <div className="container">
          <span className="section-number">03</span>
          <h2 className="section-title">Typography</h2>
          <p className="section-subtitle">
            Albert Sans is our sole typeface. A geometric sans-serif in the
            Helvetica lineage — clean, legible, and approachable. It says
            trustworthy, not pretentious.
          </p>

          <hr className="rule" />

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
              marginBottom: "var(--space-lg)",
            }}
          >
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789 !@#$%&*()
          </div>

          <hr className="rule" />

          {/* Weight Scale */}
          <p className="spec-label">Weight Scale</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div style={{ marginBottom: "var(--space-lg)" }}>
            <div className="type-weight-row">
              <span className="type-weight-name">Light</span>
              <span
                className="type-weight-sample"
                style={{ fontWeight: 300 }}
              >
                PeoplePeople makes plans simple.
              </span>
              <span className="type-weight-value">300</span>
            </div>
            <div className="type-weight-row">
              <span className="type-weight-name">Regular</span>
              <span
                className="type-weight-sample"
                style={{ fontWeight: 400 }}
              >
                PeoplePeople makes plans simple.
              </span>
              <span className="type-weight-value">400</span>
            </div>
            <div className="type-weight-row">
              <span className="type-weight-name">Medium</span>
              <span
                className="type-weight-sample"
                style={{ fontWeight: 500 }}
              >
                PeoplePeople makes plans simple.
              </span>
              <span className="type-weight-value">500</span>
            </div>
            <div className="type-weight-row">
              <span className="type-weight-name">Semi Bold</span>
              <span
                className="type-weight-sample"
                style={{ fontWeight: 600 }}
              >
                PeoplePeople makes plans simple.
              </span>
              <span className="type-weight-value">600</span>
            </div>
            <div className="type-weight-row">
              <span className="type-weight-name">Bold</span>
              <span
                className="type-weight-sample"
                style={{ fontWeight: 700 }}
              >
                PeoplePeople makes plans simple.
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
                PeoplePeople makes plans simple.
              </span>
              <span className="type-weight-value">800</span>
            </div>
          </div>

          <hr className="rule" />

          {/* Type Hierarchy */}
          <p className="spec-label">Hierarchy</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <table
            className="type-table"
            style={{ marginBottom: "var(--space-lg)" }}
          >
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
                  Plans made simple. Community made real. PeoplePeople helps you
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

          <hr className="rule" />

          {/* Type Do/Don't */}
          <p className="spec-label">Typesetting Rules</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="do-dont"
            style={{ marginBottom: "var(--space-md)" }}
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
      </section>

      {/* ============================================
          04. TONE OF VOICE
          ============================================ */}
      <section className="section section-cream" id="voice">
        <div className="container">
          <span className="section-number">04</span>
          <h2 className="section-title">Tone of Voice</h2>
          <p className="section-subtitle">
            PeoplePeople speaks like a reliable friend who happens to have good
            taste. Warm but not cheesy. Helpful but not overbearing. Direct but
            never cold.
          </p>

          <hr className="rule" style={{ background: "var(--sand)" }} />

          <p className="spec-label">Brand Personality</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-3"
            style={{ marginBottom: "var(--space-lg)" }}
          >
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

          <hr className="rule" style={{ background: "var(--sand)" }} />

          <p className="spec-label">Writing Principles</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div style={{ marginBottom: "var(--space-lg)" }}>
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

          <hr className="rule" style={{ background: "var(--sand)" }} />

          <p className="spec-label">Example Copy</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

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
      </section>

      {/* ============================================
          05. LAYOUT & GRID
          ============================================ */}
      <section className="section section-dark" id="layout">
        <div className="container">
          <span className="section-number">05</span>
          <h2 className="section-title">Layout & Grid</h2>
          <p className="section-subtitle">
            Layouts are built on a 12-column grid with consistent margins and
            generous spacing. Whitespace is a design element — use it
            deliberately.
          </p>

          <hr className="rule" />

          <p className="spec-label">12-Column Grid</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

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
              marginBottom: "var(--space-lg)",
            }}
          >
            24px gutter · 24px outer margins (mobile: 16px) · Max width: 1320px
          </p>

          <p className="spec-label">Common Layouts</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "var(--space-lg)",
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

          <hr className="rule" />

          <p className="spec-label">Spacing Scale</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div style={{ marginBottom: "var(--space-lg)" }}>
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

          <hr className="rule" />

          <p className="spec-label">Corner Radius</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

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
      </section>

      {/* ============================================
          06. PHOTOGRAPHY
          ============================================ */}
      <section className="section" id="photography">
        <div className="container">
          <span className="section-number">06</span>
          <h2 className="section-title">Photography</h2>
          <p className="section-subtitle">
            Photography should feel candid, warm, and real. Real moments with
            real people — never staged or stock-feeling. Natural light preferred.
          </p>

          <hr className="rule" />

          <p className="spec-label">Categories</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-4"
            style={{ marginBottom: "var(--space-lg)" }}
          >
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

          <hr className="rule" />

          <p className="spec-label">Treatment Guidelines</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-3"
            style={{ marginBottom: "var(--space-lg)" }}
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
      </section>

      {/* ============================================
          07. ICONOGRAPHY
          ============================================ */}
      <section className="section section-dark" id="iconography">
        <div className="container">
          <span className="section-number">07</span>
          <h2 className="section-title">Iconography</h2>
          <p className="section-subtitle">
            Icons are outlined, not filled. 1.5px stroke weight at 24px size.
            Simple, geometric, and instantly readable. They assist — they
            don&apos;t decorate.
          </p>

          <hr className="rule" />

          <p className="spec-label">Core Icon Set</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="icon-grid"
            style={{ marginBottom: "var(--space-lg)" }}
          >
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

          <hr className="rule" />

          <p className="spec-label">Specifications</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "var(--space-lg)",
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
      </section>

      {/* ============================================
          08. CO-BRANDING
          ============================================ */}
      <section className="section" id="cobranding">
        <div className="container">
          <span className="section-number">08</span>
          <h2 className="section-title">Co-Branding</h2>
          <p className="section-subtitle">
            When PeoplePeople appears alongside partner brands, maintain clear
            hierarchy. Our wordmark comes first (or has equal weight) and always
            retains proper clear space.
          </p>

          <hr className="rule" />

          <p className="spec-label">Lockup Examples</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-2"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            <div
              className="lockup-demo"
              style={{ background: "var(--warm-white)" }}
            >
              <span
                className="logo-text logo-text-md"
                style={{ color: "var(--black)" }}
              >
                PeoplePeople
              </span>
              <div className="lockup-divider"></div>
              <span className="lockup-partner">Partner</span>
            </div>
            <div
              className="lockup-demo"
              style={{ background: "var(--black)" }}
            >
              <span
                className="logo-text logo-text-md"
                style={{ color: "var(--yellow)" }}
              >
                PeoplePeople
              </span>
              <div className="lockup-divider"></div>
              <span className="lockup-partner">Partner</span>
            </div>
          </div>

          <hr className="rule" />

          <p className="spec-label">Hierarchy Rules</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            style={{
              maxWidth: "600px",
              marginBottom: "var(--space-lg)",
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
                  PeoplePeople leads
                </div>
                <div className="voice-principle-desc">
                  In co-branded materials where PeoplePeople is the primary
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
                  PeoplePeople
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
                  PeoplePeople
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
      </section>

      {/* ============================================
          09. APPLICATIONS
          ============================================ */}
      <section className="section section-dark" id="applications">
        <div className="container">
          <span className="section-number">09</span>
          <h2 className="section-title">Applications</h2>
          <p className="section-subtitle">
            The brand in context. These examples show how PeoplePeople&apos;s
            visual identity works across touchpoints — from screens to print to
            physical spaces.
          </p>

          <hr className="rule" />

          <p className="spec-label">Social Media</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-2"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            <div className="mockup-social">
              <div className="mockup-social-header">
                <div className="mockup-social-avatar">Pp</div>
                <div>
                  <div className="mockup-social-name">PeoplePeople</div>
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
                <div className="mockup-social-avatar">Pp</div>
                <div>
                  <div className="mockup-social-name">PeoplePeople</div>
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

          <hr className="rule" />

          <p className="spec-label">Business Card</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="grid-2"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            <div className="mockup-card">
              <div className="mockup-card-top">
                <div className="mockup-card-logo">PeoplePeople</div>
                <div className="mockup-card-mark">Pp</div>
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
                <div
                  className="mockup-card-logo"
                  style={{ color: "var(--black)" }}
                >
                  PeoplePeople
                </div>
                <div
                  className="mockup-card-mark"
                  style={{
                    background: "var(--black)",
                    color: "var(--yellow)",
                  }}
                >
                  Pp
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

          <hr className="rule" />

          <p className="spec-label">Signage</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

          <div
            className="mockup-signage"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            <div className="mockup-signage-bg">PeoplePeople</div>
            <div className="mockup-signage-text">
              People<span>People</span>
            </div>
          </div>

          <hr className="rule" />

          <p className="spec-label">App Icon</p>
          <div style={{ marginBottom: "var(--space-md)" }}></div>

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
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "28px",
                  background: "var(--yellow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "var(--black)",
                  letterSpacing: "-0.02em",
                }}
              >
                Pp
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
                  background: "var(--black)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "var(--yellow)",
                  letterSpacing: "-0.02em",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Pp
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
                  background: "var(--yellow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "var(--black)",
                  letterSpacing: "-0.02em",
                }}
              >
                Pp
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
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "var(--yellow)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "var(--black)",
              marginBottom: "16px",
            }}
          >
            PeoplePeople
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "rgba(26,26,26,0.5)",
              marginBottom: "4px",
            }}
          >
            Brand Guidelines v1.0
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(26,26,26,0.35)",
            }}
          >
            February 2026 · For internal and partner use
          </div>
        </div>
      </footer>
    </div>
  );
}
