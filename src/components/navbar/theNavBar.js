import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function TheNavBar() {
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
            id="AboutMe"
          >
            About Me
          </Nav.Link>

          <Nav.Link to="/portfolio" as={Link} className="navTab" id="Portfolio">
            Portfolio
          </Nav.Link>

          <Nav.Link to="/contact" as={Link} className="navTab" id="Contact">
            Contact
          </Nav.Link>

          <Nav.Link to="/resume" as={Link} className="navTab" id="Resume">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default TheNavBar;
