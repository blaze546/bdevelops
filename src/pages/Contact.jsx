import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/home.css"; // your tokens + shared styles
import "../pages/contact.css"; // create this file from the CSS below

export default function Contact() {
  const revealRefs = useRef([]);
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  useEffect(() => {
    const els = revealRefs.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Optional: nice UX message; Netlify will still handle the POST
  const handleSubmit = () => {
    setStatus({ type: "sending", msg: "Sending..." });
    // Don't prevent default — we want Netlify submission.
    // This is just a UI hint. Netlify will redirect/submit normally.
    setTimeout(() => setStatus({ type: "sent", msg: "Sent! I’ll get back to you soon." }), 800);
  };

  return (
    <>
      {/* HEADER */}
      <section className="neo-section">
        <Container>
          <div className="neo-card reveal" ref={(el) => (revealRefs.current[0] = el)}>
            <div className="heroEyebrow">Contact</div>
            <h1 className="heroTitle">Let’s Build Something Solid</h1>
            <p className="heroLede">
              Whether you’re planning a new site or refining an existing one, I’m happy to talk through ideas and
              recommend clear next steps.
            </p>

            <div className="contactQuickRow">
              <a className="iconLink" href="mailto:brianalexandre006@yahoo.com" aria-label="Email Brian">
                <i className="fas fa-at" />
              </a>

              <a className="iconLink" href="https://github.com/blaze546" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>

              {/* Replace with your IG when ready */}
              <a
                className="iconLink"
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                onClick={(e) => {
                  // remove this once you add your real IG URL
                  if (e.currentTarget.href.endsWith("instagram.com/")) e.preventDefault();
                }}
              >
                <i className="fab fa-instagram" />
              </a>
            </div>

            <div className="neo-soft mt-4">
              <b>What to include:</b> your business name, the type of site you need, your timeline, and any examples you
              like. If you’re brand new, I can help with branding + layout direction too.
            </div>
          </div>
        </Container>
      </section>

      {/* FORM + DETAILS */}
      <section className="neo-section pt-0">
        <Container>
          <Row className="g-4 align-items-stretch">
            {/* FORM */}
            <Col lg={7}>
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[1] = el)}>
                <h2 className="sectionH2">Send a Message</h2>
                <p className="sectionP mt-3">
                  I typically respond within 24–48 hours. If it’s urgent, include “Urgent” in the subject.
                </p>

                <form
                  className="contactForm mt-4"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* Netlify required hidden input */}
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Honeypot */}
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <Row className="g-3">
                    <Col md={6}>
                      <label className="formLabel" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="formInput"
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder="First name"
                        required
                      />
                    </Col>

                    <Col md={6}>
                      <label className="formLabel" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="formInput"
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Last name"
                      />
                    </Col>

                    <Col md={6}>
                      <label className="formLabel" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="formInput"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                      />
                    </Col>

                    <Col md={6}>
                      <label className="formLabel" htmlFor="phone">
                        Phone (optional)
                      </label>
                      <input
                        className="formInput"
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </Col>

                    <Col md={12}>
                      <label className="formLabel" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        className="formInput"
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="New website / redesign / Shopify / SEO"
                        required
                      />
                    </Col>

                    <Col md={12}>
                      <label className="formLabel" htmlFor="projectType">
                        Project Type
                      </label>
                      <select className="formInput" id="projectType" name="projectType" defaultValue="Website">
                        <option>Website</option>
                        <option>Shopify Store</option>
                        <option>Full-Stack Feature</option>
                        <option>Branding / Logo</option>
                        <option>SEO / Content</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </Col>

                    <Col md={12}>
                      <label className="formLabel" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="formTextarea"
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me what you’re building, goals, timeline, and any links/examples you have."
                        required
                      />
                    </Col>
                  </Row>

                  <div className="ctaRow mt-4">
                    <button type="submit" className="neo-btn btnFX">
                      Send Inquiry
                    </button>
                    <a className="neo-btn secondary btnFX" href="mailto:brianalexandre006@yahoo.com">
                      Email Instead
                    </a>
                  </div>

                  {status.type !== "idle" && (
                    <div className={`formStatus ${status.type === "sent" ? "sent" : ""}`}>{status.msg}</div>
                  )}
                </form>
              </div>
            </Col>

            {/* RIGHT COLUMN */}
            <Col lg={5}>
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[2] = el)}>
                <h2 className="sectionH2">What Happens Next</h2>

                <div className="neo-soft mt-3">
                  <div className="softTitle">1) Quick Reply</div>
                  <div className="softBody">I’ll confirm details and ask any missing questions.</div>
                </div>

                <div className="neo-soft mt-3">
                  <div className="softTitle">2) Consultation</div>
                  <div className="softBody">We align on goals, scope, timeline, and the best next step.</div>
                </div>

                <div className="neo-soft mt-3">
                  <div className="softTitle">3) Plan + Build</div>
                  <div className="softBody">You get a clear proposal, then we start development.</div>
                </div>

                <div className="neo-soft mt-4">
                  <b>Payment structure:</b> typically 50% upfront before work begins, with up to 2 free revisions.
                  Full details live on the Pricing page.
                </div>
              </div>

              <div className="neo-card reveal mt-4" ref={(el) => (revealRefs.current[3] = el)}>
                <h2 className="sectionH2">Direct Links</h2>

                <div className="contactLinkList mt-3">
                  <a className="contactLink" href="mailto:brianalexandre006@yahoo.com">
                    <i className="fas fa-at" /> brianalexandre006@yahoo.com
                  </a>

                  <a className="contactLink" href="https://github.com/blaze546" target="_blank" rel="noreferrer">
                    <i className="fab fa-github" /> GitHub
                  </a>

                  {/* Replace with your real IG link */}
                  <a
                    className="contactLink"
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (e.currentTarget.href.endsWith("instagram.com/")) e.preventDefault();
                    }}
                  >
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
