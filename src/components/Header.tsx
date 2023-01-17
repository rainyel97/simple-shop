import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  margin: 10px 20px;
  color: white;
  text-decoration: none;
  opacity: 0.5;
  transition: 0.25s;
  :hover {
    opacity: 1;
    color: white;
  }
`;

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Macbook Store</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Cart">Cart</NavLink>
          <NavLink to="/About">About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
