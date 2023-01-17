import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Macbook Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/Cart");
            }}
          >
            Cart
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/About");
            }}
          >
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
