import React, { useState } from "react";
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
        <Nav
          variant="pills"
          className="justify-content-center"
          defaultActiveKey="tasks"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/" eventKey="tasks">
              Tasks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/referral" eventKey="referral">
              Referral
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/logout" eventKey="logout">
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      ) : (
        <Nav
          className="justify-content-center"
          variant="pills"
          defaultActiveKey="login"
        >
          <Nav.Link as={Link} to="/login" eventKey="login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup" eventKey="signup">
            Register
          </Nav.Link>
        </Nav>
      )}
    </Row>
  );
};

export default NavBar;
