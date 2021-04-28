import React from "react"
import uae from "./images/uaeOrphanage.jpg"
import egypt from "./images/egyptOrphanage.jpg"
import india from "./images/indiaOrphanage.jpg"
import usa from "./images/OrphansUS.jpg"
import pakistan from "./images/pakistan.jpg"
import { Link } from "gatsby"

import { Container, Jumbotron, Card, CardDeck, Button } from "react-bootstrap"
import Layout from "../components/layout"

const Chapters = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <Container className="text-center">
      <Jumbotron style={teamJumbotronStyle}>
        <h2>Chapters</h2>
      </Jumbotron>
      <CardDeck style={{marginLeft: '5px'}}>
        <Card style={card}>
          <Card.Img variant="top" src={uae} />
          <Card.Body>
            <Card.Title>UAE</Card.Title>
            <Card.Text style={{color:'grey',}}>
              Most of our work is actually focused in the UAE these days, Advait is responsible for work there.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img variant="top" src={india} />
          <Card.Body>
            <Card.Title>India</Card.Title>
            <Card.Text style={{color:'grey',}}>
              India has a really critical orphans situation, we are doing our best to help it. Meha is handling work there
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img variant="top" src={egypt} />
          <Card.Body>
            <Card.Title>Egypt</Card.Title>
            <Card.Text style={{color:'grey',}}>
              Our newest chapter so far, yet a country with a cruicial need for help on terms of orphans. Abdulrahman is managing work in Egypt
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>

      <CardDeck style={{marginLeft: '5px'}}>
        <Card style={card}>
          <Card.Img variant="top" src={usa}/>
          <Card.Body>
            <Card.Title>USA</Card.Title>
            <Card.Text style={{color:'grey',}}>
              America doesn't use the term orphanage, yet the children group homes need any help it can get. Amirah is in charge of our work in the us
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img variant="top" src={pakistan} style={{backgroundSize: 'contain'}}/>
          <Card.Body>
            <Card.Title>Pakistan</Card.Title>
            <Card.Text style={{color:'grey',}}>
              India has a really critical orphans situation, we are doing our best to help it. Meha is handling work there
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
        
        <Button style={donateButtonStyle} variant="primary" size="lg" block>
          <Link to="https://forms.office.com/Pages/ResponsePage.aspx?id=BdJKHR72TECcWoDCjnisON52EX5zEcxCoG_9fRc_IhJUMjVZNFBBRjREWFBNU1lYOExWUUI5VUxXUC4u" style={{color:'white',}}>
              Register a Chapter now
          </Link>
        </Button>
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
}

const donateButtonStyle= {
  marginTop: 50, 
  padding: '20px', 
  backgroundColor: '#212529',
  border: 'none',
  boxShadow: '4px 4px 1px black',
  borderRadius: '0px',
}

const card = {
  marginTop: '20px',
  flex: '0 0 21em',
  justifyContent: 'space-around',
}

export default Chapters
