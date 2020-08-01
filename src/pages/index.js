import React from "react"
import volunteer from "./images/work.png" 
import charity from "./images/charity.jpg"
import volunteer2 from "./images/work2.png"
import { Link } from "gatsby"

import Fade from 'react-reveal/Fade';
import { Container, Carousel, CardDeck, Card, Jumbotron, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Main" }}>
    <Container className="text-center">
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={volunteer}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 style={{color: 'white', fontWeight:'bold',}}> <i>Buying carton boxes, towels, brushes for the orphanages</i></h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={volunteer2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4 style={{color: 'white', fontWeight:'bold',}}><i>Packing the cartons of books, towels, brushes and getting it ready to be shipped</i></h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={charity}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4 style={{color: 'white', fontWeight:'bold',}}><i>An orphanage that we helped in India</i></h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Jumbotron style={jumbotronStyle}>
      <h2 style={headTextStyle}>How we started</h2>
    </Jumbotron>
    <p style={storyStyle}>How we started- Our founders each have unique encounters that made them realize the massive differences that exist 
      in today’s society. For the past few years, <Fade top><b>Advait</b></Fade> has been heavily involved in volunteering for orphanages which 
      lead him to conduct a research study with a professor on Intergenerational occupation mobility. The results received 
      were extremely shocking which lead him to devote his time to the Defy organization. On the other side, through his technical mind, <Fade top><b>Abdulrahman</b></Fade> utilized his  skills to get the organization off the 
      ground. Over the years, he used his computer science knowledge to develop products that are beneficial for the society 
      especially orphans. He has won numerous entrepreneurship competitions and hopes to go on with this initiative after high 
      school.</p>
    <p style={storyStyle}> Furthermore, <Fade top><b>Amirah</b></Fade> has been an activist for Muslim rights over the last years. Through her commended writing skills, 
      she hopes to bring a change in the lives of orphans and wishes to flourish them with resources that makes them 
      confident in the real world. She has been recognized by the renowned Libertas Tribune for her talented writing and 
      outreach skills. On the other side, <Fade top><b>Meha</b></Fade> has been a founder at the non-profit organization “Speech for Change”. She believe everyone 
      has the right for free speech and wishes to make  individuals  hear the voices of the underprivileged youth. 
      Moreover, she has held several leadership positions in coding clubs and wishes to nurture orphans with technology 
      that can essentially, aid them in the 21st century.</p>
      <p style={storyStyle}>The four founders came together sharing similar viewpoints and opinions to change the lives of orphans flourishing them with confidence, connections and higher education.</p>

    <Jumbotron style={jumbotronStyle}>
      <h2 style={headTextStyle}>Testimonals</h2>
    </Jumbotron>

    <CardDeck style={cardDeckStyle}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Text style={{color:'grey',}}>
          “Thank you Defy for donating money to the <span style={{color:'black',}}>J&K orphanage</span>, with it we were able to buy essentials like food, 
          water and were able to pay the electricity bill”
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Text style={{color:'grey',}}>
          "The children liked the way you taught them maths and science. 
          They were hoping to see you again with them. One of the students wants to become a part of your organization later!"
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Text style={{color:'grey',}}>
          “Thank you so much for providing the children with food, we will appreciate it, 
          the children really liked it, we hope to see you again”
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>

    <Jumbotron>
      <Row>
      <Col sm={6}>
        <Link to="/donate" style={{color:'black',}}>
          <h2 style={headTextStyle}>Donate</h2>
        </Link>
      </Col>
      <Col sm={6}>
        <Link to="/donate" style={{color:'black',}}>
          <h2 style={headTextStyle}>Register Chapter</h2>
        </Link>
      </Col>
      </Row>
    </Jumbotron>

    </Container>
  </Layout>
)

const carouselStyle = {
  margin: '5%',
}

const cardDeckStyle = {
  marginBottom: '5%',
}

const cardStyle = {
  border: 'none',
}

const headTextStyle = {
  margin: '0 auto',
  fontWeight: 'bolder',
}

const jumbotronStyle = {
  background: "transparent",
  margin: 0,
}

const carousalImageStyle = {
  height: '470px',
  borderRadius: "0.3rem",
  opacity: 0.9,
}

const storyStyle = {
  fontSize: 17,
}

export default IndexPage
