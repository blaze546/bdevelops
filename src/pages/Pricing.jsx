import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// If your neo styles are global, you can remove this import.
// If you keep page-specific CSS, create ../pages/pricing.css and import it here.
// import "../pages/pricing.css";

export default function Pricing() {
  const [openIdx, setOpenIdx] = useState(0);

  const tiers = useMemo(
    () => [
      {
        name: "Starter Site",
        label: "Best for launching fast",
        bullets: [
          "One-page or simple multi-section landing page",
          "Mobile-first layout + clean UI",
          "Basic SEO setup (titles, descriptions, indexing-friendly structure)",
          "Contact form + clear CTA",
          "Launch support",
        ],
        goodFor: "New businesses, personal brands, simple service offerings",
        note: "A great first step when you need something clean and credible ASAP.",
      },
      {
        name: "Business Site",
        label: "Most popular",
        bullets: [
          "Multi-page website (Services, About, Work, Contact, etc.)",
          "Stronger SEO foundations (page structure + keyword-friendly content)",
          "Brand direction (colors, type, layout guidance)",
          "Performance and accessibility best practices",
          "Optional blog/news structure (if needed)",
        ],
        goodFor: "Established small businesses, service providers, creators",
        note: "Designed to convert visitors into inquiries with clear structure and messaging.",
        featured: true,
      },
      {
        name: "E-Commerce (Shopify)",
        label: "Sell with confidence",
        bullets: [
          "Theme setup + site structure",
          "Homepage + product/collection page improvements",
          "Conversion-focused sections (trust, reviews, FAQs, shipping cues)",
          "Basic SEO for products/collections",
          "Launch support + handoff training",
        ],
        goodFor: "Stores that need a clean setup or a stronger conversion experience",
        note: "Perfect if you want Shopify done right without a bloated, messy theme.",
      },
      {
        name: "Full-Stack Features",
        label: "For apps and dashboards",
        bullets: [
          "Backend API support (Python/FastAPI)",
          "Auth + protected routes (if needed)",
          "Data-driven pages (dashboards, admin tools)",
          "Integrations + workflows",
          "Performance + reliability focus",
        ],
        goodFor: "Teams or founders building something more than a brochure site",
        note: "Scope varies—this is usually milestone-based.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "How does payment work?",
        a: "Projects start with 50% upfront before work begins. The remaining 50% is due before launch or delivery (depending on scope). This keeps the process smooth and protects both sides.",
      },
      {
        q: "How many revisions are included?",
        a: "You get up to 2 free revisions included. A revision is a reasonable round of updates to design/content within the agreed scope. Additional revisions or scope changes can be added at an hourly rate or as a new milestone.",
      },
      {
        q: "What affects pricing the most?",
        a: "Page count, custom design complexity, e-commerce setup, content needs (copywriting), integrations, and timeline. The clearer the scope, the faster I can quote accurately.",
      },
      {
        q: "Do you offer maintenance?",
        a: "Yes. Maintenance can include updates, content changes, performance improvements, and small feature additions. You can choose a monthly plan or request changes as needed.",
      },
      {
        q: "Can you help if I’m a brand new business?",
        a: "Absolutely. I can help you choose a color scheme, shape your brand direction, plan your site structure, and design a clear layout that speaks to your clients—then build it.",
      },
      {
        q: "How long does it take?",
        a: "It depends on scope and how ready your content is. Most small business sites move quickly once we align on structure and messaging. I’ll give you a timeline in the proposal.",
      },
    ],
    []
  );

  return (
    <>
      {/* PAGE HEADER */}
      <section className="neo-section">
        <Container>
          <div className="neo-card">
            <Row className="g-4 align-items-center">
              <Col lg={8}>
                <h1 className="heroTitle m-0">Pricing & Billing</h1>
                <p className="heroLede mb-0">
                  Clear options, flexible scopes, and a straightforward process. Every project starts
                  with a proposal so you know exactly what you’re getting.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <div className="ctaRow" style={{ justifyContent: "flex-end" }}>
                  <Link className="neo-btn btnFX" to="/contact">
                    Request a Quote
                  </Link>
                  <Link className="neo-btn secondary btnFX" to="/services">
                    View Services
                  </Link>
                </div>
              </Col>
            </Row>

            <div className="neo-soft mt-4">
              <b>Payment Policy:</b> 50% upfront before work begins, 50% due before launch/delivery.
              <br />
              <b>Revisions:</b> Up to 2 free revisions included.
            </div>
          </div>
        </Container>
      </section>

      {/* TIERS */}
      <section className="neo-section">
        <Container>
          <Row className="g-3">
            {tiers.map((t) => (
              <Col key={t.name} md={6} lg={3}>
                <div
                  className="neo-card"
                  style={{
                    height: "100%",
                    background: t.featured ? "var(--accent)" : "#fff",
                  }}
                >
                  <div className="heroEyebrow">{t.label}</div>
                  <h2 className="sectionH2 mt-2">{t.name}</h2>

                  <ul style={{ marginTop: 12, paddingLeft: 18 }}>
                    {t.bullets.map((b) => (
                      <li key={b} style={{ marginBottom: 8 }}>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="neo-soft mt-3">
                    <div style={{ fontWeight: 950 }}>Good For</div>
                    <div style={{ marginTop: 6 }}>{t.goodFor}</div>
                  </div>

                  <p style={{ marginTop: 12, marginBottom: 0, opacity: 0.9 }}>
                    {t.note}
                  </p>
                </div>
              </Col>
            ))}
          </Row>

          <div className="neo-soft mt-4">
            <b>Note:</b> Final pricing depends on scope and timeline. For more complex builds, I
            typically quote milestones so you can approve progress step-by-step.
          </div>
        </Container>
      </section>

      {/* WHAT YOU GET / HOW WE WORK */}
      <section className="neo-section">
        <Container>
          <div className="neo-card">
            <Row className="g-4 align-items-start">
              <Col lg={6}>
                <h2 className="sectionH2">What’s Included</h2>
                <p className="sectionP">
                  Every project is built to feel clean, modern, and intentional — not like a template.
                </p>

                <div className="neo-soft mt-3">
                  <div style={{ fontWeight: 950 }}>Standard Inclusions</div>
                  <ul style={{ marginTop: 10, paddingLeft: 18, marginBottom: 0 }}>
                    <li>Mobile-first layout + responsive testing</li>
                    <li>Clear CTAs and conversion-friendly structure</li>
                    <li>Performance best practices (fast load, clean UI)</li>
                    <li>Basic SEO setup (page titles, descriptions, structure)</li>
                    <li>Launch support and handoff</li>
                  </ul>
                </div>
              </Col>

              <Col lg={6}>
                <h2 className="sectionH2">Billing Options</h2>
                <p className="sectionP">
                  Choose what fits your project and timeline — we’ll lock it in during the proposal.
                </p>

                <Row className="g-3 mt-1">
                  <Col md={6}>
                    <div className="neo-soft">
                      <div style={{ fontWeight: 950 }}>Milestone-Based</div>
                      <div style={{ marginTop: 6 }}>
                        Best for larger projects. Pay as we complete agreed phases.
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="neo-soft">
                      <div style={{ fontWeight: 950 }}>Flat Project</div>
                      <div style={{ marginTop: 6 }}>
                        Best for clear scopes like a landing page or standard site.
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="neo-soft">
                      <div style={{ fontWeight: 950 }}>Maintenance Plan</div>
                      <div style={{ marginTop: 6 }}>
                        Monthly support for updates, fixes, and improvements.
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="neo-soft">
                      <div style={{ fontWeight: 950 }}>Hourly Support</div>
                      <div style={{ marginTop: 6 }}>
                        Quick changes, audits, or small tasks outside the main scope.
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="ctaRow mt-3">
                  <Link className="neo-btn btnFX" to="/contact">
                    Get a Quote
                  </Link>
                  <Link className="neo-btn secondary btnFX" to="/work">
                    See Work
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="neo-section">
        <Container>
          <div className="neo-card">
            <Row className="g-3 align-items-end">
              <Col lg={8}>
                <h2 className="sectionH2">FAQ</h2>
                <p className="sectionP">
                  Quick answers to common questions. If you’re unsure, the consultation clears it up fast.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Link className="neo-btn btnFX" to="/contact">
                  Ask a Question
                </Link>
              </Col>
            </Row>

            <div className="mt-3">
              {faqs.map((f, idx) => {
                const open = openIdx === idx;
                return (
                  <div
                    key={f.q}
                    className="neo-soft"
                    style={{ marginTop: 12, cursor: "pointer" }}
                    onClick={() => setOpenIdx(open ? -1 : idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setOpenIdx(open ? -1 : idx);
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ fontWeight: 950 }}>{f.q}</div>
                      <div style={{ fontWeight: 950 }}>{open ? "−" : "+"}</div>
                    </div>
                    {open && <p style={{ marginTop: 10, marginBottom: 0 }}>{f.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="neo-section">
        <Container>
          <div className="neo-card">
            <Row className="g-3 align-items-center">
              <Col lg={8}>
                <h2 className="sectionH2">Ready to build something clean and credible?</h2>
                <p className="sectionP">
                  Send a quick message with your goals, timeline, and any examples you like. I’ll reply with next steps.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Link className="neo-btn btnFX" to="/contact">
                  Start a Project
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}