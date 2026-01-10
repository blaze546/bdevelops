import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/home.css";

// OPTIONAL later (when you’re ready):
// import beesixShot from "../assets/projects/beesixpaints.png";
// import emannyShot from "../assets/projects/emanny.png";
// import templateShot from "../assets/projects/templates.png";

export default function Work() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const els = revealRefs.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Featured projects (same layout as BeeSixPaints)
  const featured = [
    {
      key: "beesixpaints",
      title: "BeeSixPaints — Shopify Store",
      placeholderLabel: "Screenshot Placeholder",
      tags: ["Shopify", "E-Commerce", "Branding", "Content"],
      description:
        "A Shopify storefront for an art brand focused on acrylic pour collections and product drops. Built with conversion in mind: clean product presentation, easy browsing, and consistent visuals.",
      whatIDid: [
        "Shopify theme setup + homepage layout updates",
        "Collection structure and product presentation strategy",
        "Image consistency workflow (clean backgrounds, alignment, crop standards)",
        "Conversion-focused UX: clear CTAs, simple navigation, mobile readability",
      ],
      noteTitle: "Founder Note",
      noteBody:
        "As the owner, I built BeeSixPaints to feel like a real gallery — not just a storefront. The goal was a clean, premium look that makes it easy for visitors to browse collections, trust the brand, and purchase confidently.",
      siteHref: "https://beesixpaints.com", // update if different
      ctaLabel: "Build Something Similar",
      ctaTo: "/contact",
    },
    {
      key: "emanny",
      title: "Emanny Services — Handyman / Carpentry",
      placeholderLabel: "Screenshot Placeholder",
      tags: ["Small Business", "Mobile-First", "Lead Gen", "Portfolio"],
      description:
        "A service business site designed to build trust fast: clear services, proof of work, and an easy path to contact. Focused on credibility on mobile and simple conversion.",
      whatIDid: [
        "Page structure for clarity + quick decision making",
        "Services layout + CTA placement (call/text/email)",
        "Before/after-ready portfolio section design",
        "Performance-focused build with clean responsive behavior",
      ],
      noteTitle: "Project Note",
      noteBody:
        "The goal is simple: make it easy for someone to understand what Emanny Services does, see proof of quality, and reach out without friction.",
      siteHref: "#", // replace when live
      ctaLabel: "Get A Site Like This",
      ctaTo: "/contact",
    },
    {
      key: "templates",
      title: "Template Concepts — Fast Starts (Therapist / Braider / More)",
      placeholderLabel: "Screenshot Placeholder",
      tags: ["Templates", "Branding", "SEO", "Fast Turnaround"],
      description:
        "A growing set of clean templates that give clients a strong starting point — then we customize branding, layout, and content so it feels like you (not generic).",
      whatIDid: [
        "Template structure for fast launches",
        "Branding guidance (colors, typography, layout direction)",
        "SEO-friendly page layout and content planning",
        "Custom sections based on your services and target clients",
      ],
      noteTitle: "Why Templates",
      noteBody:
        "Templates aren’t about cutting corners — they’re about saving time on layout decisions so we can focus on messaging, branding, and conversion.",
      siteHref: "#", // later: link to a /templates page or a section
      ctaLabel: "Ask About Templates",
      ctaTo: "/contact",
    },
  ];

  // “More Projects” grid
  const moreProjects = [
    { name: "UTC Nursing School", tags: ["Web", "UI", "Info Site"], href: "#" },
    { name: "Tactoc Consulting", tags: ["Brand", "Site", "Small Biz"], href: "#" },
    { name: "Author Page", tags: ["Landing", "SEO", "Copy"], href: "#" },
    { name: "Pokedex", tags: ["React", "API", "Project"], href: "#" },
  ];

  return (
    <>
      {/* HEADER */}
      <section className="neo-section">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[0] = el)}>
            <div className="heroEyebrow">Work</div>
            <h1 className="heroTitle">Selected Projects</h1>
            <p className="heroLede">
              A few completed builds and ongoing projects. I focus on clean UI, strong structure,
              and a site that feels credible on mobile.
            </p>

            <div className="ctaRow">
              <Link className="neo-btn btnFX" to="/contact">
                Start A Project
              </Link>
              <Link className="neo-btn secondary btnFX" to="/services">
                View Services
              </Link>
            </div>

            <div className="neo-soft mt-4">
              <b>Quick note:</b> If you don’t know exactly what you need yet, that’s normal.
              I can help you choose the right direction (branding, layout, and next steps) before we build.
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED PROJECTS */}
      {featured.map((proj, idx) => (
        <section key={proj.key} className="neo-section pt-0">
          <Container>
            <div className="neo-card reveal" ref={(el) => (revealRefs.current[1 + idx] = el)}>
              <Row className="g-4 align-items-start">
                <Col lg={6}>
                  {/* Screenshot placeholder — replace later with <img src={...} /> */}
                  <div
                    className="shotPlaceholder"
                    aria-label={`${proj.title} screenshot placeholder`}
                  >
                    <div className="shotLabel">{proj.placeholderLabel}</div>
                  </div>

                  <div className="projectMeta mt-3">
                    {proj.tags.map((t) => (
                      <span key={t} className="miniTag">
                        {t}
                      </span>
                    ))}
                  </div>
                </Col>

                <Col lg={6}>
                  <h2 className="sectionH2">{proj.title}</h2>
                  <p className="sectionP mt-3">{proj.description}</p>

                  <div className="neo-soft mt-3">
                    <div className="softTitle">What I Did</div>
                    <ul className="aboutList" style={{ marginBottom: 0 }}>
                      {proj.whatIDid.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="neo-soft mt-3">
                    <div className="softTitle">{proj.noteTitle}</div>
                    <div className="softBody">{proj.noteBody}</div>
                  </div>

                  <div className="ctaRow mt-3">
                    <a
                      className="neo-btn btnFX"
                      href={proj.siteHref}
                      target={proj.siteHref !== "#" ? "_blank" : undefined}
                      rel={proj.siteHref !== "#" ? "noreferrer" : undefined}
                    >
                      View Site
                    </a>

                    <Link className="neo-btn secondary btnFX" to={proj.ctaTo}>
                      {proj.ctaLabel}
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      ))}

      {/* MORE PROJECTS */}
      <section className="neo-section pt-0">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[8] = el)}>
            <Row className="align-items-end g-3">
              <Col lg={8}>
                <h2 className="sectionH2">More Projects</h2>
                <p className="sectionP mt-3">
                  Quick snapshots — we can add screenshots and outcomes as you collect them.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Link className="neo-btn secondary btnFX" to="/contact">
                  Ask About Availability
                </Link>
              </Col>
            </Row>

            <Row className="g-3 mt-4">
              {moreProjects.map((p, i) => (
                <Col key={p.name} md={6} lg={3}>
                  <a
                    href={p.href}
                    className="projectCard reveal"
                    style={{ display: "block", color: "inherit", textDecoration: "none" }}
                    ref={(el) => (revealRefs.current[20 + i] = el)}
                    target={p.href !== "#" ? "_blank" : undefined}
                    rel={p.href !== "#" ? "noreferrer" : undefined}
                  >
                    <div className="shotPlaceholder" aria-label={`${p.name} screenshot placeholder`}>
                      <div className="shotLabel">Screenshot Placeholder</div>
                    </div>

                    <div className="projectName">{p.name}</div>
                    <div className="projectMeta">
                      {p.tags.map((t) => (
                        <span key={t} className="miniTag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                </Col>
              ))}
            </Row>

            <div className="neo-soft mt-4">
              Want deliverables and payment structure?{" "}
              <Link to="/pricing" className="neo-btn secondary btnFX" style={{ marginLeft: 10 }}>
                View Pricing & FAQ
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="neo-section pt-0">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[9] = el)}>
            <Row className="g-3 align-items-center">
              <Col lg={8}>
                <h2 className="sectionH2">Want Work Like This?</h2>
                <p className="sectionP mt-3">
                  Tell me what you’re building — new site or redesign — and I’ll recommend next steps.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Link className="neo-btn btnFX" to="/contact">
                  Get In Touch
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
