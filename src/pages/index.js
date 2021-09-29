import React from "react"
import carousel1 from "./images/carousel1.png" 
import carousel2 from "./images/carousel2.png"
import carousel3 from "./images/carousel3.jpg"
import carousel4 from "./images/carousel4.jpg"
import carousel5 from "./images/carousel5.jpg"
import carousel6 from "./images/carousel6.jpg"
import carousel7 from "./images/carousel7.jpg"
import { Link } from "gatsby"
import "./stylefiles/index.css"

import Fade from 'react-reveal/Fade';
import { Carousel, CardDeck, Card, Jumbotron, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Main" }}>
    <div className="text-center">
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h6 style={carouselCaption}> <i>Buying carton boxes, towels, 
            brushes for the orphanages</i></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={carousel2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h6 style={carouselCaption}><i>Packing the cartons of books, 
            towels, brushes and getting it ready to be shipped</i></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h6 style={carouselCaption}><i>Packing the cartons of books, 
            towels, brushes and getting it ready to be shipped</i></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={carousel4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h6 style={carouselCaption}><i>Advait pitching the Defy project to the SIA pvt 
            ltd company </i></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={carousel5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h6 style={carouselCaption}><i>Our volunteers in the Antharbaava foundation in India</i></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={carousel6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h6 style={carouselCaption}><i>Tutoring orphans for free in pakistan</i></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={carousalImageStyle}
          className="d-block w-100"
          src={carousel7}
          alt="First slide"
        />
        <Carousel.Caption>
          <h6 style={carouselCaption}> <i>Manufacturing 3D designed projects 
            in Chandra Engineering Works</i></h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Jumbotron style={jumbotronStyle}>
      <h2 style={headTextStyle}>Stats</h2>
    </Jumbotron>

      
    <Row style={rowTutoringStyle}>
      <Col style={statcircle}> 
        <h2 style={stats}>+2,000</h2>
        <p style={{color:'grey',}}>Underprivileged people impacted</p>
      </Col>
      <Col style={statcircle}> 
        <h2 style={stats}>100+</h2>
        <p style={{color:'grey',}}> Volunteers</p>
      </Col>
      <Col style={statcircle}>
        <h2 style={stats}>$25,000</h2>
        <p style={{color:'grey',}}>Money raised</p>
      </Col>
      <Col style={statcircle}> 
        <h2 style={stats}>35</h2>
        <p style={{color:'grey',}}> 3D designed projects</p>
      </Col>
      <Col style={statcircle}> 
        <h2 style={stats}>1,000</h2>
        <p style={{color:'grey',}}> Kilograms of paper recycled</p>
      </Col>
    </Row>

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
          <Card.Text>
          “Thank you Defy for donating money to the <span style={{color:'white',}}>J&K orphanage</span>, with it we were able to buy essentials like food, 
          water and were able to pay the electricity bill”
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Text>
          "The children liked the way you taught them maths and science. 
          They were hoping to see you again with them. One of the students wants to become a part of your organization later!"
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Text>
          “Thank you so much for providing the children with food, we will appreciate it, 
          the children really liked it, we hope to see you again”
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>

      <Row>
        <Col sm={3}></Col>
        <Col sm={3}>
          <Link to="/donate">
          <button style={bannerButton}><span style={bannerHead}>Donate </span></button>
          </Link>
        </Col>
        <Col sm={3}>
          <button style={bannerButton} href="https://forms.office.com/Pages/ResponsePage.aspx?id=BdJKHR72TECcWoDCjnisON52EX5zEcxCoG_9fRc_IhJUMjVZNFBBRjREWFBNU1lYOExWUUI5VUxXUC4u">
          <span style={bannerHead}> Register Chapter</span></button>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </div>
  </Layout>
)

const carouselStyle = {
  paddingLeft: '200px',
  paddingRight: '200px',
  backgroundColor: 'lightgrey',
}

const cardDeckStyle = {
  marginBottom: '5%',
  paddingBottom: '50px',
  paddingTop: '50px',
  backgroundColor: '#212529',
}

const cardStyle = {
  border: 'none',
  background: 'transparent',
  color: 'grey', 
  fontStyle: 'italic',
}

const headTextStyle = {
  margin: '0 auto',
  fontWeight: 'bolder',
  fontSize: '20px',
}

const jumbotronStyle = {
  background: "transparent",
  paddingBottom: '40px',
  margin: 0,
}

const carousalImageStyle = {
  height: '470px',
  marginBottom: '0',
}

const storyStyle = {
  fontSize: 17,
  paddingLeft: '70px',
  paddingRight: '70px',
}

const rowTutoringStyle = {
  padding: '80px',
  backgroundColor: '#212529',
  width: '100%',
  overflowX: 'hidden',
  margin: '0',
}

const stats = {
  color: 'white',
  textShadow: '4px 4px 1px black',
  fontSize: '50px',
  paddingBottom: '10px',
  paddingTop: '20px',
}

const statcircle = {
  height: '100%',
}

const bannerButton = {
  backgroundColor:'#212529',
  boxShadow: '4px 4px 1px black',
  border: 'none',
  padding: '20px',
  width: '300px',
}

const bannerHead = {
  fontWeight: 'bold',
  color: 'white',
  textShadow: '4px 4px 1px black',
  fontSize: '25px',
  paddingBottom: '10px',
  paddingTop: '20px',
}

const carouselCaption = {
  color: 'black', 
  fontWeight:'bold', 
  backgroundColor:'white',
  boxShadow: '4px 4px 1px black',
  paddingTop: '3px',
  paddingBottom: '3px',
}

export default IndexPage
