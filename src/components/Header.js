import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
  let headerStyle = {
    Width:"90%"
  } 
  return (
    <>
      <Navbar bg="primary" variant="dark" style={headerStyle}>
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About US</Nav.Link>
            <Nav.Link href="#pricing">Contents</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  )
}

export default Header
