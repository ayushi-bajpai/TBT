import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import LogoFull from "../others/LogoLong.jpg";
import "../styles/main.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="" variant="light">
          <Navbar.Brand href="#home">
            <img src={LogoFull} className="navImgs" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="home" style={{color: 'orange'}}>Home</Nav.Link>
              <Nav.Link href="services" className="NavOp">Services</Nav.Link>
              <Nav.Link href="aboutus">About Us</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
