import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark" style={navbarStyle}>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link to="/" className="link-no-style">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          </Link>
          <Link to="/aboutUs" className="link-no-style">
          <Nav.Link href="#aboutUS">About us</Nav.Link>
          </Link>
          <Link to="/tutoring" className="link-no-style">
          <Nav.Link href="#tutoring">Tutoring</Nav.Link>
          </Link>
          <Link to="/team" className="link-no-style">
          <Nav.Link href="#team">Directors</Nav.Link>
          </Link>
          <Link to="/partners" className="link-no-style">
          <Nav.Link href="#partners">Partners</Nav.Link>
          </Link>
          <Link to="/chapters" className="link-no-style">
          <Nav.Link href="#chapters">Chapters</Nav.Link>
          </Link>
          <Link to="/blog" className="link-no-style">
          <Nav.Link href="#blog">Blog</Nav.Link>
          </Link>
          <Link to="/donate" className="link-no-style">
          <Nav.Link href="#donate">Donate</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

const navbarStyle = {
  paddingLeft: '20%',
  paddingRight: '20%',
}

export default CustomNavbar
