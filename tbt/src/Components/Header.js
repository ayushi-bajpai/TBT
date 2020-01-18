import React, { Component } from 'react';
import {  
    Navbar,  
    Nav,
    Form,
    FormControl,
    Button
    } from 'react-bootstrap';
import LogoFull from '../others/LogoLong.jpg';
import '../styles/main.css';

class Header extends Component{
    render() {
        return (
            <Navbar bg="" variant="light">
            <Navbar.Brand href="#home">
                <img src = {LogoFull} className="navImgs" />            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Product</Nav.Link>
              <Nav.Link href="#pricing">Amneties</Nav.Link>
              <Nav.Link href="#pricing">Community</Nav.Link>
              <Nav.Link href="#pricing">Technology</Nav.Link>
              <Nav.Link href="#pricing">Upcoming Locations</Nav.Link>
              <Nav.Link href="#pricing">Team</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              
             </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
            </Navbar.Collapse>
          </Navbar>
        )
      }
}

export default Header;