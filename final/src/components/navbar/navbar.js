import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function theNavBar() {
  return (
    <div className="Navbar">
      <Navbar className="boop" expand="lg">
        Sarah Martin
        <Nav className="mr-auto">
          <Nav.Link
            exact="true"
            to="/"
            as={Link}
            className="navTab"
            id="aboutme"
          >
            About Me
          </Nav.Link>

          <Nav.Link to="/portfolio" as={Link} className="navTab" id="portfolio">
            Portfolio
          </Nav.Link>

          <Nav.Link to="/contact" as={Link} className="navTab" id="contact">
            Contact
          </Nav.Link>

          <Nav.Link to="/resume" as={Link} className="navTab" id="resume">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default theNavBar;
