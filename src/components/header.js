import React from "react"
import logo from "./logo.png"

import { Jumbotron, Row } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderRadius: '0px',
    }}
  >
    <Jumbotron style={MainBannerStyle} >
      <Row>
        <img src={logo} alt="Banner's logo" width="170px" height="250px" style={{margin: '0 auto',}}/>
      </Row>
    </Jumbotron>
  </header>
)

const MainBannerStyle = {
  background: 'white',
  paddingTop: 0,
  paddingBottom: 0,
  margin: 0,
  width: '100%',
  textAlign: 'center',
}

// const missionStat = {
//   fontSize: 50,
//   verticalAlign: 'middle',
//   width: '100%',
//   textAlign: 'center',
// }

// const subtitlemission = {
//   paddingTop: '70px',
//   fontSize: 40,
//   textAlign: 'center',
//   width: '100%',
// }

export default Header
