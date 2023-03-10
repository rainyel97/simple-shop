import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navr = styled(Navbar)`
  position: sticky;
  top: 0;
  z-index: 99;
`;

const NavBrand = styled(Navbar.Brand)`
  cursor: pointer;
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navr collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container className="m-0 justify-content-between">
        <NavBrand
          onClick={() => {
            navigate("/");
          }}
        >
          Macbook Store
        </NavBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navr>
  );
}
