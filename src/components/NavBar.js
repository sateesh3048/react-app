import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "./contexts/AuthContext";

const NavBar = () => {
  const { curUser } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {curUser ? (
        <Nav className="me-auto">
          <Link to="/">Tasks</Link>
          <Link to="/logout">Logout</Link>
        </Nav>
      ) : (
        <Nav className="me-auto">
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>{" "}
        </Nav>
      )}
    </Navbar>
  );
};

export default NavBar;
