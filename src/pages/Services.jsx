// src/pages/Services.jsx
import React, { useEffect, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/home.css"; // reuse your existing neo styles (or switch to services.css if you make one)

export default function Services() {
  const revealRefs = useRef([]);

  const services = useMemo(
    () => [
      {
        title: "Websites (Single + Multi-Page)",
        icon: "fas fa-laptop-code",
        desc: "Modern marketing sites that load fast, look premium, and make it easy for clients to contact you.",
        bullets: [
          "Landing pages + multi-page sites",
          "Mobile-first layouts",
          "Clear calls-to-action for conversion",
          "Performance + accessibility best practices",
        ],
      },
      {
        title: "Shopify Builds + Store Refreshes",
        icon: "fab fa-shopify",
        desc: "If e-commerce is the move, I can build or refresh your Shopify site with clean UX and better product pages.",
        bullets: [
          "Theme setup + customization",
          "Homepage + collection + product page improvements",
          "Conversion-focused layout (trust, clarity, speed)",
          "Launch support + post-launch tweaks",
        ],
      },
      {
        title: "Full-Stack Features (Python)",
        icon: "fas fa-server",
        desc: "Need more than a brochure site? I build back ends and features that power real apps and dashboards.",
        bullets: [
          "Python APIs (FastAPI)",
          "Auth + user accounts (when needed)",
          "Forms + integrations + automations",
          "Admin dashboards / internal tools",
        ],
      },
      {
        title: "Maintenance + Ongoing Support",
        icon: "fas fa-tools",
        desc: "Keep your site updated, secure, and sharp — without you having to think about it.",
        bullets: [
          "Content updates + small changes",
          "Performance fixes",
          "Bug fixes + troubleshooting",
          "Monthly care plans (optional)",
        ],
      },
      {
        title: "Branding + Direction (Small Business Advisor)",
        icon: "fas fa-compass",
        desc: "Brand new business? I can help you make smart decisions early so your brand feels consistent and credible.",
        bullets: [
          "Brand positioning + messaging (what you do + who it’s for)",
          "Color scheme + typography direction",
          "Homepage layout strategy (what converts)",
          "Simple content plan (what pages you actually need)",
        ],
      },
      {
        title: "Logo Creation + Visual Assets",
        icon: "fas fa-pen-nib",
        desc: "A clean logo + consistent assets goes a long way. I can create modern marks and usable files.",
        bullets: [
          "Logo concepts + refinements",
          "Favicon + social icons",
          "Basic brand kit (colors, type, usage)",
          "Export-ready files for web + print",
        ],
      },
      {
        title: "Search Engine Optimization (SEO) Setup",
        icon: "fas fa-search",
        desc: "SEO is a system — I help you build the foundation so you can be found.",
        bullets: [
          "SEO-friendly site structure + pages",
          "Metadata (titles/descriptions) + internal linking",
          "Performance improvements (Core Web Vitals focus)",
          "Indexing basics (sitemap/robots) + best practices",
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const els = revealRefs.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="neo-section">
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={8}>
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[0] = el)}>
                <div className="heroEyebrow">Services</div>
                <h1 className="heroTitle">Built to look premium — built to convert.</h1>
                <p className="heroLede">
                  Whether you need a clean marketing website, a Shopify store, or full-stack features, I help you go
                  from idea → plan → launch with a process that’s clear and upfront.
                </p>

                <div className="ctaRow">
                  <Link className="neo-btn btnFX" to="/contact">
                    Start A Project
                  </Link>
                  <Link className="neo-btn secondary btnFX" to="/work">
                    See Completed Work
                  </Link>
                  <Link className="neo-btn secondary btnFX" to="/pricing">
                    Billing Options
                  </Link>
                </div>

                <div className="neo-soft mt-4">
                  <b>Quick note:</b> If you’re a brand new business, I can help shape your direction — from color
                  choices and layout to the messaging that attracts the right clients.
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[1] = el)}>
                <h2 className="sectionH2">Best Fit For</h2>
                <p className="sectionP">
                  Small businesses, creators, nonprofits, and service providers who want a site that feels modern,
                  credible, and clear.
                </p>

                <div className="mt-3">
                  <div className="neo-soft">
                    <div className="softTitle" style={{ fontWeight: 950 }}>
                      Common Goals
                    </div>
                    <div className="softBody mt-2">
                      More inquiries · better branding · cleaner UX · faster load times · stronger SEO foundation
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICE GRID */}
      <section className="neo-section">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[2] = el)}>
            <Row className="align-items-end g-3">
              <Col lg={8}>
                <h2 className="sectionH2">What I Offer</h2>
                <p className="sectionP">
                  Pick what you need — or if you’re unsure, I’ll recommend the best approach after a quick
                  consultation.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Link className="neo-btn btnFX" to="/contact">
                  Get A Quote
                </Link>
              </Col>
            </Row>

            <Row className="g-3 mt-3">
              {services.map((s, idx) => (
                <Col key={s.title} md={6} lg={4}>
                  <div
                    className="neo-soft reveal"
                    ref={(el) => (revealRefs.current[10 + idx] = el)}
                    style={{ height: "100%" }}
                  >
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div style={{ fontWeight: 950, fontSize: "1.05rem" }}>{s.title}</div>
                      <span className="stepIcon" aria-hidden="true">
                        <i className={s.icon} />
                      </span>
                    </div>

                    <p className="mt-2 mb-0">{s.desc}</p>

                    <ul className="mt-3 mb-0" style={{ paddingLeft: "1.2rem" }}>
                      {s.bullets.map((b) => (
                        <li key={b} style={{ marginBottom: 6 }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK */}
      <section className="neo-section">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[3] = el)}>
            <Row className="g-4">
              <Col lg={7}>
                <h2 className="sectionH2">How We Work</h2>
                <p className="sectionP">
                  Clear steps, clear expectations. You’ll know what’s happening, what’s next, and what we need to
                  launch smoothly.
                </p>

                <div className="mt-3 neo-soft">
                  <div className="softTitle" style={{ fontWeight: 950 }}>
                    Communication Style
                  </div>
                  <div className="softBody mt-2">
                    Upfront scope, no mystery timelines, and regular progress updates — especially during build week.
                  </div>
                </div>
              </Col>

              <Col lg={5}>
                <div className="neo-soft" style={{ height: "100%" }}>
                  <div className="softTitle" style={{ fontWeight: 950 }}>
                    What You’ll Walk Away With
                  </div>
                  <ul className="mt-3 mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li style={{ marginBottom: 6 }}>A clean, modern site that loads fast</li>
                    <li style={{ marginBottom: 6 }}>A clear layout that supports conversion</li>
                    <li style={{ marginBottom: 6 }}>A foundation for SEO + credibility</li>
                    <li style={{ marginBottom: 6 }}>A plan for updates/maintenance if you want it</li>
                  </ul>

                  <div className="mt-3 d-flex flex-wrap gap-2">
                    <Link className="neo-btn btnFX" to="/pricing">
                      View Billing Options
                    </Link>
                    <Link className="neo-btn secondary btnFX" to="/contact">
                      Start Here
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="neo-section">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[4] = el)}>
            <Row className="g-3 align-items-center">
              <Col lg={8}>
                <h2 className="sectionH2">Ready to make your business look legit online?</h2>
                <p className="sectionP">
                  Send your idea, timeline, and any references you like. If you’re just starting out, that’s fine —
                  we’ll build the plan together.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Link className="neo-btn btnFX" to="/contact">
                  Contact Me
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
