import React from "react"
import advait from "./images/advait.jpg"
import rihan from "./images/rihan.jpg"
import amirah from "./images/amirah.png"
import meha from "./images/meha.png"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container, Jumbotron, Col, Card, Row, Button } from "react-bootstrap"

const team = () => (
  <Layout pageInfo={{ pageName: "team" }}>
    <Container className="text-center">
        <Jumbotron style={teamJumbotronStyle}>
          <h2>Team</h2>
        </Jumbotron>

        <Card style={teamCardStyle}>
        <Row>
        <Col sm={3}><img src={advait} style={teamPicsStyle} alt="First slide"/></Col>
        <Col sm={9}>
        <Card.Body style={aboutTeamCardStyle}>
          <Card.Title>Advait Arya</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Founder and CEO</Card.Subtitle>
          <Card.Text>
          Advait is a rising junior studying in Raha International School Abu Dhabi, UAE. He always had a passion to create a 
          large scale impact on the lives of orphans after he conducted a research project on intergenerational occupation 
          mobility under a Professor from New York University AD. Statistically, he saw the drastic differences that exist 
          between underprivileged and privileged areas around the world.  Advait aims to tackle this unequal distribution of 
          resources through Defy in the lives of orphans. Additionally, he is a published author, ranked chess player, national 
          actor, Economic researcher and a cricket player. In his free time, he enjoys watching thriller movies and series on Netflix.
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
      </Card>

      <Card style={teamCardStyle}>
        <Row>
        <Col sm={3}><img src={rihan} style={teamPicsStyle} alt="First slide"/></Col>
        <Col sm={9}>
        <Card.Body style={aboutTeamCardStyle}>
          <Card.Title>Abdulrahman Hesham</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Co-founder and CTO</Card.Subtitle>
          <Card.Text>
            Abdulrahman is a rising High school senior in Cairo, Egypt, who is a tech nerd, CS enthusiast, and Oudist. He saw defy as an 
            opportunity to stir his enthusiasm towards a positive implementation in the community, and he saw no better than defy 
            to help him do so. Abdulrahman is the hack club leader of the egyptian chapter, a co-founder of rebat organization, and 
             a previous intern at affectiva, all of which emphasize how devoted he is to solving the global crisis and be an
            effective member of the community
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
      </Card>

      <Card style={teamCardStyle}>
        <Row>
        <Col sm={3}><img src={amirah} style={teamPicsStyle} alt="First slide"/></Col>
        <Col sm={9}>
        <Card.Body style={aboutTeamCardStyle}>
          <Card.Title>Amirah Ahmed</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Co-founder and COO</Card.Subtitle>
          <Card.Text>
          Amirah is a rising high school senior in Fredericksburg, VA. While her passions span a broad variety of 
          disciplines, the underlying theme is a mission 
          to help others and make sure everyone has the opportunity to persevere. Through her personal experience and spiritual 
          values, she has found the Defy mission deeply resonant with her own and hopes to provide orphans around the world 
          with the resources and opportunities they deserve. Amirah’s past work has ranged from grassroots organizing for 
          congressional campaigns to graphic design for sustainability 
          initiatives. In her free time, she runs cross country and track and writes for her favorite media publications.
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
      </Card>

      <Card style={teamCardStyle}>
        <Row>
        <Col sm={3}><img src={meha} style={teamPicsStyle} alt="First slide"/></Col>
        <Col sm={9}>
        <Card.Body style={aboutTeamCardStyle}>
          <Card.Title>Meha Goyal</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Outreach Director</Card.Subtitle>
          <Card.Text>
          Meha Goyal is a rising senior from Cupertino California who is interested in pursuing biology and CS. 
          She started studying CS in tenth grade and has self studied multiple languages. She also loves biology 
          and participated in research projects and lab based classes in that field. At school, she is part of FEM club 
          and Varsity speech and debate. Outside of school, she is a member and leader of various non-profit organizations 
          and loves to listen to music and play basketball. As a part of Defy, she hopes to help orphans have a better 
          chance at an education and career
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
      </Card>
      <Button style={donateButtonStyle} variant="primary" size="lg" block>
          <Link to="https://docs.google.com/document/d/1--lpfxZQwnRQX5t1BkE4wIaZOcZ2L6EDOi3pl8TuFgA/edit" style={{color:'white',}}>
              Join Us
          </Link>
      </Button>

    </Container>
  </Layout>
)

const teamCardStyle = {
  width: '100%',
  marginBottom: '40px',
  border: 'none',
}

const aboutTeamCardStyle = {
  textAlign: 'left',
  paddingTop: '0px',
}

const teamPicsStyle = {
  maxWidth: 200,
  maxHeight: 200,
  borderRadius: '5%',
}

const teamJumbotronStyle = {
  marginTop: 20,
}

const donateButtonStyle= {
  marginTop: 50, 
  padding: '20px', 
  backgroundColor: '#212529',
  border: 'none'
}

export default team
