import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/home.css";
import "../pages/about.css";

import headshot from "../assets/headshot.jpg";

export default function About() {
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

  return (
    <>
      {/* ABOUT INTRO */}
      <section className="neo-section">
        <Container>
          <Row className="g-4 align-items-stretch">
            {/* ABOUT TEXT */}
            <Col lg={8}>
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[0] = el)}>
                <div className="heroEyebrow">About</div>
                <h1 className="heroTitle">Built From Real-World Experience</h1>

                <p className="heroLede">
                  I’m a Software Engineer who helps small businesses and nonprofits build
                  websites that feel intentional, professional, and easy to trust.
                </p>

                <p className="mt-3">
                  I spent <b>two years working directly with small businesses and nonprofits</b>{" "}
                  at one of the largest email marketing platforms in the country. That experience
                  gave me insight into how real organizations use digital tools — and where things
                  often fall apart.
                </p>

                <p className="mt-2">
                  I’ve taken that experience, along with <b>four years of hands-on client work</b>,
                  to design and build websites that support real goals, not just aesthetics.
                </p>

                <div className="neo-soft mt-4">
                  <b>My focus:</b> Clear messaging, thoughtful layout, fast performance,
                  and a process that feels collaborative instead of overwhelming.
                </div>
              </div>
            </Col>

            {/* PHOTO */}
            <Col lg={4}>
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

      {/* WHAT SETS ME APART */}
      <section className="neo-section pt-0">
        <Container>
          <div className="neo-card reveal whatSetsMeApart" ref={(el) => (revealRefs.current[2] = el)}>
            <h2 className="sectionH2 text-center">What Sets Me Apart</h2>

            <p className="sectionP text-center mx-auto mt-3">
              I don’t just make things look good. I help you get clear on your message,
              present your brand with confidence, and build something that actually works.
            </p>

            <Row className="g-3 mt-4">
              <Col md={6} lg={4}>
                <div className="neo-soft aboutPillar">
                  <div className="softTitle">Platform-Level Experience</div>
                  <div className="softBody">
                    I’ve worked inside tools used by thousands of businesses, which means
                    I design with usability, scale, and clarity in mind.
                  </div>
                </div>
              </Col>

              <Col md={6} lg={4}>
                <div className="neo-soft aboutPillar">
                  <div className="softTitle">Client-Facing Perspective</div>
                  <div className="softBody">
                    I understand timelines, budgets, and communication — not just code.
                  </div>
                </div>
              </Col>

              <Col md={6} lg={4}>
                <div className="neo-soft aboutPillar">
                  <div className="softTitle">Design + Engineering Balance</div>
                  <div className="softBody">
                    Clean visuals backed by solid technical decisions, not guesswork.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* HOW I APPROACH PROJECTS + WHO I WORK WITH + BUILD CTA */}
      <section className="neo-section pt-0">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[3] = el)}>
                <h2 className="sectionH2">How I Approach Projects</h2>

                <p className="sectionP mt-3">
                  I don’t jump straight into building. I start by understanding your goals,
                  audience, and constraints so the site supports real outcomes.
                </p>

                <div className="neo-soft mt-3">
                  <ul className="aboutList">
                    <li>Clarify goals and priorities</li>
                    <li>Structure pages for clarity and conversion</li>
                    <li>Design with brand consistency</li>
                    <li>Build for performance and maintainability</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="neo-card reveal" ref={(el) => (revealRefs.current[4] = el)}>
                <h2 className="sectionH2">Who I Work With</h2>

                <p className="sectionP mt-3">
                  I work best with people who want something thoughtful — not rushed or generic.
                </p>

                <div className="neo-soft mt-3">
                  <ul className="aboutList">
                    <li>Small businesses & service providers</li>
                    <li>Creators & consultants</li>
                    <li>Nonprofits & community organizations</li>
                    <li>Founders launching something new</li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* ✅ CTA BOX — now properly sized and aligned */}
            <Col lg={12}>
              <div className="neo-card reveal buildCta" ref={(el) => (revealRefs.current[5] = el)}>
                <h2 className="sectionH2 text-center">Let’s Build Something Solid</h2>

                <p className="sectionP text-center mx-auto mt-3">
                  Whether you’re planning a new site or refining an existing one,
                  I’m happy to talk through ideas and recommend clear next steps.
                </p>

                <div className="aboutCtaRow">
                  <Link to="/contact" className="neo-btn btnFX">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}