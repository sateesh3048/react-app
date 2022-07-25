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
      <Navbar bg="light" expand="lg">
        {curUser ? (
          <Nav>
            <Nav.Item>
              <Link to="/">Tasks</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/referral">Referral </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/logout">logout</Link>
            </Nav.Item>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>{" "}
          </Nav>
        )}
      </Navbar>
    </Row>
  );
};

export default NavBar;
