
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import logoIcon from "../assets/logo-icon.png";

export default function SiteNav() {
  return (
    <Navbar expand="lg" className="neo-nav" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          <picture>
            <source
              media="(max-width: 991.98px)"
              srcSet={logoIcon}
            />
            <img
              src={logo}
              alt="Brian Develops"
              className="brand-logo"
            />
          </picture>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/work">Work</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="neo-btn">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
