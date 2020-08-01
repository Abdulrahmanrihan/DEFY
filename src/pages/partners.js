import React from "react"
import { Link } from "gatsby"
import ziyaan from "./images/ziyaan.png"
import hackclub from ".//images/hackclubegypt.png"

import Layout from "../components/layout"
import { Container, Jumbotron, Col, Card, Row, Button, CardDeck } from "react-bootstrap"

const Partners = () => (
  <Layout pageInfo={{ pageName: "partners" }}>
    <Container className="text-center">
      <Jumbotron style={teamJumbotronStyle}>
          <h2>Partners</h2>
      </Jumbotron>
        <Card style={{width:'300px'}}>
          <Card.Img variant="top" src={hackclub} style={{width: '300px', height: '250px',}}/>
          <Card.Body>
            <Card.Title>Hack club Egypt</Card.Title>
            <Card.Text>
            Hack Club is a global network of programming clubs where members learn to code through tinkering and 
            building projects.
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">Technical Partner</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      <Jumbotron style={teamJumbotronStyle}>
          <h2>Interviews</h2>
      </Jumbotron>
      <Card className="text-center" style={{border:'none',}}>
        <Row>
          <Col sm={3}><img src={ziyaan} style={{width:'100%', height:'140px', borderRadius:'0.3rem',}}/></Col>
          <Col sm={9} style={{textAlign: 'left',}}>
            <Card.Title>Our Interview with Ziyaan Virji</Card.Title>
            <Card.Text>
            Interview with Diana Award Winner, Global Teen Leader, 
            Global Social Leader Ziyaan Virji who was recognized for his outstanding work in AASW!
            </Card.Text>
            <Button href="https://drive.google.com/file/d/1aFyGtrLVQoYLFJ4dhlDFSc9QNr7DKasp/view?usp=sharing" variant="primary">Check it out</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
}

export default Partners
