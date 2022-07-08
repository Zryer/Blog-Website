import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navi = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
                <Nav.Link>Blogs</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navi;