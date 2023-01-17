import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navr = styled(Navbar)`
  position: sticky;
  top: 0;
  z-index: 99;
  cursor: pointer;
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navr bg="dark" variant="dark">
      <Container>
        <Navr.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          Macbook Store
        </Navr.Brand>
        <Nav className="me-auto">
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
    </Navr>
  );
}
