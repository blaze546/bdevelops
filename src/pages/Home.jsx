import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/home.css";

import headshot from "../assets/headshot.jpg";
import beesixDesktop from "../assets/projects/beesix-desktop.png";
import beesixMobile from "../assets/projects/beesix-mobile.png";

import utcDesktop from "../assets/projects/utc-desktop.png";
import utcMobile from "../assets/projects/utc-mobile.png";

import tactocDesktop from "../assets/projects/tactoc-desktop.png";
import tactocMobile from "../assets/projects/tactoc-mobile.png";
import {
  MessagesSquare,
  ClipboardList,
  CodeXml,
  Rocket,
} from "lucide-react";

export default function Home() {
  const revealRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  
const steps = useMemo(
  () => [
    {
      title: "Consultation",
      icon: MessagesSquare,
      desc: "Quick call to align on goals, scope, timeline, and budget. No pressure — just clarity.",
    },
    {
      title: "Plan + Proposal",
      icon: ClipboardList,
      desc: "You get a clear plan: deliverables, timeline, and billing options that fit your project.",
    },
    {
      title: "Build + Updates",
      icon: CodeXml,
      desc: "I build the site and share progress regularly. Clean UI, fast performance, mobile-first.",
    },
    {
      title: "Launch + Support",
      icon: Rocket,
      desc: "We deploy, test, and polish. Optional maintenance so your site stays sharp.",
    },
  ],
  []
);


  // Completed sites: placeholders for now
  
const completed = useMemo(
  () => [
    {
      name: "BeeSixPaints",
      featured: true,
      category: "E-Commerce & Creative Direction",
      desc: "A custom Shopify storefront designed to showcase original artwork through an immersive, visually driven shopping experience.",
      tags: ["Shopify", "Liquid", "E-Commerce", "UI/UX"],
      desktop: beesixDesktop,
      mobile: beesixMobile,
    },
    {
      name: "UTC Nursing School",
      featured: false,
      category: "Education & Web Development",
      desc: "A responsive educational website focused on accessibility, program discovery, and the student enrollment experience.",
      tags: ["WordPress", "Responsive Design", "UI/UX"],
      desktop: utcDesktop,
      mobile: utcMobile,
    },
    {
      name: "Tactoc Consulting",
      featured: false,
      category: "Business & Branding",
      desc: "A professional consulting website designed to establish credibility, communicate services, and generate client inquiries.",
      tags: ["Web Development", "Branding", "SEO"],
      desktop: tactocDesktop,
      mobile: tactocMobile,
    },
  ],
  []
);


  useEffect(() => {
    const els = revealRefs.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveStep((p) => (p + 1) % steps.length), 3200);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <>
      {/* HERO */}
      <section className="neo-section">
        <Container>
          <Row className="g-4 align-items-center">
            {/* Copy FIRST on desktop */}
            <Col lg={7} className="order-2 order-lg-1">
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[0] = el)}>
                {/* KEEP the box, remove the line you disliked */}
                <div className="heroEyebrow">Modern, fast websites + full-stack features.</div>

                {/* Shorter headline */}
                <h1 className="heroTitle">
                  Clean design. Reliable builds.
                  <br className="d-none d-lg-block" /> Websites that convert.
                </h1>

                <p className="heroLede">
                  React on the front end, Python on the back end, and Shopify when e-commerce is the move.
                  Clear communication, fast turnaround, and a site you’ll be proud to share.
                </p>

                <div className="chipRow" aria-label="Core technologies">
                  <span className="neo-chip">React</span>
                  <span className="neo-chip">Vite</span>
                  <span className="neo-chip">Python</span>
                  <span className="neo-chip">FastAPI</span>
                  <span className="neo-chip">Shopify</span>
                </div>

                <div className="ctaRow">
                  <Link className="neo-btn btnFX" to="/contact">
                    Start a Project
                  </Link>
                  <Link className="neo-btn secondary btnFX" to="/work">
                    See Work
                  </Link>
                  <Link className="neo-btn secondary btnFX" to="/services">
                    Services
                  </Link>
                </div>

                <div className="neo-soft mt-4">
                  <b>Quick Promise:</b> I'm upfront, communicative, and focused on clean UI, fast performance, and a smooth process.
                  Ongoing updates after launch are available through maintence plans.
                </div>
              </div>
            </Col>

            {/* Photo SECOND on desktop */}
            <Col lg={5} className="order-1 order-lg-2">
              <div className="neo-card reveal headshotWrap" ref={(el) => (revealRefs.current[1] = el)}>
                <img src={headshot} alt="Brian Alexandre headshot" className="headshot" />
                <div className="headshotMeta">
                  <div className="brandKicker">BrianDevelops</div>
                  <div className="nameLine">Brian Alexandre</div>
                  <div className="titleLine">Software Engineer · Web Developer</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="neo-section">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[2] = el)}>
            <Row className="g-4 align-items-start">
              <Col lg={5}>
                <h2 className="sectionH2">Services that ship.</h2>
                <p className="sectionP">
                  A quick snapshot — full details on the Services page. If you’re not sure what you need,
                  we’ll map it out during the consultation.
                </p>
                <div className="mt-3">
                  <Link className="neo-btn secondary btnFX" to="/services">
                    Explore Services
                  </Link>
                </div>
              </Col>

              <Col lg={7}>
                <Row className="g-3">
                  <Col md={6}>
                    <div className="neo-soft">
                      <div className="softTitle">Websites</div>
                      <div className="softBody">Landing pages, multi-page sites, portfolios, nonprofits.</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="neo-soft">
                      <div className="softTitle">Shopify</div>
                      <div className="softBody">Theme setup, sections, product pages, conversions.</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="neo-soft">
                      <div className="softTitle">Full-Stack</div>
                      <div className="softBody">Python APIs, auth, dashboards, integrations.</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="neo-soft">
                      <div className="softTitle">Maintenance</div>
                      <div className="softBody">Updates, fixes, performance, and content changes.</div>
                    </div>
                  </Col>
                </Row>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  <Link className="neo-btn btnFX" to="/contact">
                    Get a Quote
                  </Link>
                  <Link className="neo-btn secondary btnFX" to="/pricing">
                    Billing Options
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      
{/* SELECTED WORK */}
<section className="neo-section">
  <Container>
    <div
      className="neo-card reveal"
      ref={(el) => (revealRefs.current[3] = el)}
    >
      <Row className="align-items-end g-3">
        <Col lg={7}>
          <h2 className="sectionH2">Selected Work.</h2>
          <p className="sectionP mb-0">
            A selection of real-world projects combining clean
            design, responsive development, and business strategy.
          </p>
        </Col>

        <Col lg={5} className="text-lg-end">
          <Link
            className="neo-btn secondary btnFX"
            to="/work"
          >
            View Full Portfolio
          </Link>
        </Col>
      </Row>

      <Row className="g-4 mt-3">
        {completed.map((p) => (
          <Col
            key={p.name}
            xs={12}
            lg={p.featured ? 12 : 6}
          >
            <article
              className={`workCard ${
                p.featured ? "featuredWork" : ""
              }`}
            >
              <div className="workPreview">
                <img
                  src={p.desktop}
                  alt={`${p.name} desktop website`}
                  className="desktopShot"
                  loading="lazy"
                />

                <img
                  src={p.mobile}
                  alt={`${p.name} mobile website`}
                  className="mobileShot"
                  loading="lazy"
                />
              </div>

              <div className="workContent">
                {p.featured && (
                  <span className="featuredLabel">
                    Featured Project
                  </span>
                )}

                <div className="workCategory">
                  {p.category}
                </div>

                <h3 className="workName">{p.name}</h3>

                <p className="workDescription">{p.desc}</p>

                <div className="workMeta">
                  {p.tags.map((t) => (
                    <span className="miniTag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Col>
        ))}
      </Row>
    </div>
  </Container>
</section>

              

      
{/* PROCESS */}
<section className="neo-section">
  <Container>
    <div
      className="neo-card reveal"
      ref={(el) => (revealRefs.current[4] = el)}
    >
      <Row className="align-items-end g-3">
        <Col lg={7}>
          <h2 className="sectionH2">
            A simple process — with momentum.
          </h2>

          <p className="sectionP">
            No confusing handoffs. You’ll always know
            what’s happening, what’s next, and how
            we’re tracking progress.
          </p>
        </Col>

        <Col lg={5} className="text-lg-end">
          <Link className="neo-btn btnFX" to="/contact">
            Send Inquiry
          </Link>
        </Col>
      </Row>

      <div className="stepsGrid">
        {steps.map((s, idx) => {
          const Icon = s.icon;

          return (
            <div
              key={s.title}
              className={`stepCard ${
                activeStep === idx ? "active" : ""
              }`}
            >
              <div className="stepTop">
                <div className="stepIcon" aria-hidden="true">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <p className="stepTitle">
                  {idx + 1}. {s.title}
                </p>
              </div>

              <p className="stepDesc">{s.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="neo-soft mt-4">
        <b>Billing flexibility:</b> No surprises.
        Milestones, flat rates, or maintenance —
        structured around your project needs.

        <div className="mt-2">
          <Link
            className="neo-btn secondary btnFX"
            to="/pricing"
          >
            View Pricing & Billing
          </Link>
        </div>
      </div>
    </div>
  </Container>
</section>
</>
);
}





