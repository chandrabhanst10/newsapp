import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";

export default class NavBar extends Component {

  
  render() {


    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">News Monkey</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
