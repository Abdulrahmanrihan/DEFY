import React from "react"
import logo from "./logo.png"

import { Jumbotron, Col, Row } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderRadius: '0px',
    }}
  >
    <Jumbotron style={MainBannerStyle} >
      <Row>
        <Col sm={5}> <img src={logo} width="150px" height="200px"/></Col>
        <Col sm={7}>
        <p style={subtitlemission}>“Helping orphans defy all odds.”</p></Col>
      </Row>
    </Jumbotron>
  </header>
)

const MainBannerStyle = {
  background: 'white',
  margin: 0,
  width: '100%',
  textAlign: 'center',
}

const missionStat = {
  fontSize: 50,
  verticalAlign: 'middle',
  width: '100%',
  textAlign: 'center',
}

const subtitlemission = {
  paddingTop: '70px',
  fontSize: 40,
  textAlign: 'center',
  width: '100%',
}

export default Header
