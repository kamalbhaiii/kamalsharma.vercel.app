import React from 'react'
import {Container} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <Navbar className={styles.navBg} variant="dark" fixed="top" expand="lg">
  <Container>
    <Link href="/"><Navbar.Brand className={styles.cursorPointer}>Kamal Sharma</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link href="/#AboutMe"><Navbar.Brand className={styles.cursorPointer}>About Me</Navbar.Brand></Link>
        {/* <Link href="/Resume"><Navbar.Brand className={styles.cursorPointer}>Resume</Navbar.Brand></Link>
         */}
         <Navbar.Brand className={styles.cursorPointer}><a className={styles.anchor} href="https://drive.google.com/file/d/1NXyG41xnRzxGLQXc-RXYV0f3YTr0qPzA/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></Navbar.Brand>
        <Link href="/#MyProjects"><Navbar.Brand className={styles.cursorPointer}>My Projects</Navbar.Brand></Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header