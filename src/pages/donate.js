import React from "react"
import { Link } from "gatsby"
import donate from "./images/donate.jpg"

import { Container, Jumbotron, Button, Row } from "react-bootstrap"
import Layout from "../components/layout"

const Donate = () => (
  <Layout pageInfo={{ pageName: "donate" }}>
    <Container className="text-center">
      <Jumbotron style={teamJumbotronStyle}>
        <h2>Donate</h2>
      </Jumbotron>
      <Row style={RowDonate}>
        <h1 style={{margin: '0 auto', marginBottom: '30px',}}> Want to help?</h1>
        <Row style={{width: '100%', margin:'50px',}}><img src={donate} width="600px" height="350px" style={{margin: '0 auto', borderRadius: '0.3rem'}}/></Row>
        <Button style={donateButtonStyle} variant="primary" size="lg" block>
          <Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=advaitarya26%40gmail.com&currency_code=USD&source=url" style={{color:'white',}}>
              Donate to Orphans of the world
          </Link>
        </Button>
      </Row>
      <p style={{color: 'grey',}}> Paypal Account</p>
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
}

const RowDonate = {
  margin: '100px 0px 15px 0px',
}

const donateButtonStyle= {
  padding: '20px', 
  backgroundColor: 'orange',
  border: 'none'
}
export default Donate
