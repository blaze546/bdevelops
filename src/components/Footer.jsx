import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="neo-section">
      <Container className="text-center">
        <div className="neo-card">
          {/* ICON LINKS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              marginBottom: "10px",
            }}
          >
            <a
              href="mailto:brianalexandre006@yahoo.com"
              className="iconLink"
              aria-label="Email"
            >
              <i className="fas fa-at" />
            </a>

            <a
              href="https://github.com/blaze546"
              target="_blank"
              rel="noreferrer"
              className="iconLink"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>

            <a
              href="https://instagram.com/beesixpaints"
              target="_blank"
              rel="noreferrer"
              className="iconLink"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>

          {/* BRAND LINE */}
          <p className="m-0 fw-bold">
            © {new Date().getFullYear()} BrianDevelops
          </p>
        </div>
      </Container>
    </footer>
  );
}