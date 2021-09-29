import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from "./logoFooter.png"

import { Row, Col } from "react-bootstrap"

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
        <div fluid className="px-0 main" style={Containerfont}>
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle="DEFY ORGANIZATION" />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <main>{children}</main>
            </Col>
          </Row>
        </div>
        <div fluid className="px-0" style={Containerfont}>  
          <Row style={ribbonStyle}>
          </Row>  
          <Row noGutters style={{backgroundColor: '#696969', width: '100%',}}>
            <Col sm={5} className="footer-col" style={columnFooter}>
              <img src={logo} alt="Our Logo" style={{width:'100px', height: '100px',}}/>
              <span>
                DEFY ORGANIZATION
               </span>
               <p style={footerDescription}>A fiscally sponsored 501c3 organization by Hack Club US</p>
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
                <p href="#features" style={linkItem}>Directors</p>
              </Link>
              <Link to="/tutoring" style={linkItem}>
                <p href="#features" style={linkItem}>Tutoring</p>
              </Link>
            </Col>
            <Col sm={3} className="footer-col" style={columnFooter}>
              <p style={{ textAlign: 'left', width: '100%', fontWeight: 'bold'}}> Contacts <hr style={hrFooterStyle} /></p>
              <p style={linkItem} href="#features">+ (971) 568967479</p>
              <p style={linkItem} href="#features">+ (20) 1095228556</p>
              <p style={linkItem} href="#features">defy@gmail.com</p>
            </Col>
          </Row>
          <Row noGutters style={footerStyle} >
            <span style={footerTextStyle}>
               COPYRIGHTS © {new Date().getFullYear()} DEFY ORG.
            </span>
          </Row>
        </div>
      </>
    )}
  />
)

const Containerfont = {
  fontFamily: 'Poppins',
  overflowX: 'hidden',
  backgroundColor: '#F7F7F7',
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
  textAlign: 'center',
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

const footerDescription = {
  width: '300px',
  overflowWrap: 'normal',
}

export default Layout
