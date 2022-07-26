import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "./contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const NavBar = () => {
  const { curUser } = useAuth();

  return (
    <Row>
      {/* <Navbar bg="light" expand="lg"> */}
      {curUser ? (
        <Nav activeKey="/">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Tasks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/referral">
              Referral
            </Nav.Link>
            {/* <Link to="/referral">Referral </Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/logout">
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      ) : (
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Register
          </Nav.Link>
        </Nav>
      )}
    </Row>
  );
};

export default NavBar;
