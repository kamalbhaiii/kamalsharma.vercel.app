import React from 'react'
import {Container} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
// import 'react-bootstrap'
// import Script from 'next/script'
// import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
  <Container>
    <Link href="/"><Navbar.Brand>Kamal Sharma</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link href="/#AboutMe"><Navbar.Brand>About Me</Navbar.Brand></Link>
        <Link href="/Resume"><Navbar.Brand>Resume</Navbar.Brand></Link>
        <Link href="/Projects"><Navbar.Brand>Projects</Navbar.Brand></Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header