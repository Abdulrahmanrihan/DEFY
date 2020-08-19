import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from "./logoFooter.png"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
        <Container fluid className="px-0 main" style={Containerfont}>
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle="DEFY ORGANIZATION" />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container>
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0" style={Containerfont}>  
          <Row style={ribbonStyle}>
          </Row>  
          <Row noGutters style={{backgroundColor: '#696969', width: '100%',}}>
            <Col sm={5} className="footer-col" style={columnFooter}>
              <img src={logo} style={{width:'100px', height: '100px',}}/>
              <span style={Containerfont}>
                DEFY ORGANIZATION
               </span>
            </Col>
            <Col sm={2} className="footer-col" style={columnFooter}>
              <p style={{ textAlign: 'left', width: '100%', fontWeight: 'bold'}}> USEFULL LINKS <hr style={hrFooterStyle} /></p>
              <Link to="/aboutUs" style={linkItem}>
                <p href="#features" style={linkItem}>About Us</p>
              </Link>
              <Link to="/donate" style={linkItem}>
                <p href="#features" style={linkItem}>Donate</p>
              </Link>
              <Link to="/chapters" style={linkItem}>
                <p href="#features" style={linkItem}>Chapters</p>
              </Link>
              <Link to="/partners" style={linkItem}>
                <p href="#features" style={linkItem}>Partners</p>
              </Link>
            </Col>
            <Col sm={2} className="footer-col" style={columnFooter}>
              <p style={{ textAlign: 'left', width: '100%', fontWeight: 'bold'}}> USEFULL LINKS <hr style={hrFooterStyle} /></p>
              
              <Link to="/blog" style={linkItem}>
                <p href="#features" style={linkItem}>Blog</p>
              </Link>
              <Link to="/team" style={linkItem}>
                <p href="#features" style={linkItem}>Team</p>
              </Link>
              <Link to="/tutoring" style={linkItem}>
                <p href="#features" style={linkItem}>Tutoring</p>
              </Link>
            </Col>
            <Col sm={3} className="footer-col" style={columnFooter}>
              <p style={{ textAlign: 'left', width: '100%', fontWeight: 'bold'}}> Contacts <hr style={hrFooterStyle} /></p>
              <p style={linkItem} href="#features">+ (20) 1095228556</p>
              <p style={linkItem} href="#features">defy@gmail.com</p>
            </Col>
          </Row>
          <Row noGutters style={footerStyle} >
            <span style={footerTextStyle}>
               COPYRIGHTS © {new Date().getFullYear()}, DEFY ORG.
            </span>
          </Row>
        </Container>
      </>
    )}
  />
)

const Containerfont = {
  fontFamily: 'Poppins',
}

const ribbonStyle = {
  height: 10,
  width: '100%',
  margin: 0,
  background: 'linear-gradient(90deg, rgba(139,221,97,1) 5%, rgba(60,180,222,1) 25%, rgba(252,241,75,1) 50%, rgba(255,82,35,1) 69%, rgba(255,170,57,1) 90%)',
}

const footerStyle = {
  backgroundColor: '#212529',
  fontSize: '12px',
}

const footerTextStyle = {
  fontFamily: 'Poppins',  
  color: 'white',
  textAlign: 'center',
  width: '100%',
  padding: '1rem'
}

const columnFooter = {
  padding: '40px',
  width: '100%',
  textAlign: 'left',
  color: 'white',
} 

const linkItem = {
  width: '100%',
  marginBottom: 0,
  textAlign: 'left',
  color: 'white',
}

const hrFooterStyle = {
  width:'140px', 
  color: 'rgb(33, 37, 41)',
  margin: '10px 0px 0px 0px',
}

export default Layout
