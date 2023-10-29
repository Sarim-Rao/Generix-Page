import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {RiEdgeNewLine} from "react-icons/ri"

const Header = () => {
  return (
  <div className='bg-primary'>
<Navbar expand="lg" className=' navbar-dark'>
      <Container>
        <Navbar.Brand href="#"> <RiEdgeNewLine/>  Generix </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link href="#about" className='ms-2'>About</Nav.Link>
            <Nav.Link href="#link" className='ms-2'>Features</Nav.Link>
            <Nav.Link href="#link" className='ms-2'>How it works</Nav.Link>
            <Nav.Link href="#link"className='ms-2'>Pricing</Nav.Link>
            <Nav.Link href="#link" className='ms-2'>Contact Us</Nav.Link>
           
          </Nav>
          <div className='bttns ms-auto'>
            <button className='me-3 btn text-light mb-2'>Login</button>
            <button className='signInBtn'>Sign in</button>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>

      
 
  )
}

export default Header
