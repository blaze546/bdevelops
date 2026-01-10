import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFileSignature,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    title: "1. Discovery Call",
    desc: "We align on goals, audience, timeline, and budget. No-cost consultation.",
    icon: faComments,
  },
  {
    title: "2. Plan + Proposal",
    desc: "You get a clear scope, deliverables, and milestones (with billing options).",
    icon: faFileSignature,
  },
  {
    title: "3. Build + Iteration",
    desc: "Design + development with staged check-ins and fast feedback loops.",
    icon: faCode,
  },
  {
    title: "4. Launch + Support",
    desc: "Deploy, QA, handoff training, and optional monthly maintenance.",
    icon: faRocket,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ProcessSection() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="neo-section">
      <Container>
        <div className="neo-card">
          <h2 className="mb-2">My Process</h2>
          <p className="mb-4">
            Clear steps. No confusion. You’ll always know what’s happening next.
          </p>

          <Row ref={ref} className="g-3">
            {steps.map((s, i) => (
              <Col md={6} lg={3} key={s.title}>
                <div
                  className={`process-card ${inView ? "is-in" : ""}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="icon-badge">
                    <FontAwesomeIcon icon={s.icon} />
                  </div>
                  <h3 className="h5 mt-3 mb-2 fw-bold">{s.title}</h3>
                  <p className="m-0">{s.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

