import React from "react"

import zoom from "./images/zoom.png"
import tutors from "./images/tutors.jpg"
import globe from "./images/global.png"
import whiteboard from "./images/edit.png"
import graduation from "./images/graduate.png"
import calendar from "./images/calendar.png"

import { Container, Jumbotron, Row, Button, Col } from "react-bootstrap"
import Layout from "../components/layout"

const Tutoring = () => (
  <Layout pageInfo={{ pageName: "tutoring" }}>
    <Container className="text-center">
    <Jumbotron style={teamJumbotronStyle}>
        <h2>Tutoring</h2>
    </Jumbotron>
    <Row style={rowTutoringStyle}>
      <h6>As part of our mission to provide resources for orphans to become successful, we provide free virtual tutoring 
        services for anyone in Grades 1-10. Our subject focus includes Maths, Physics, Chemistry, Biology, English Language 
        and Literature and Economics. We also provide tutoring in SAT Reading, Writing and Math. At Defy, you can sign up 
        for a demo so you get a realistic experience before any commitments. </h6>
        <p style={noteStyle}>Note: All sessions will be recorded in order to ensure the safety of tutees and the tutors.</p>
    </Row>
    <Row style={rowTutoringStyle}>
      <Col> 
        <img src={whiteboard} alt="Whiteboard" width="100px" height="100px" style={{marginBottom:'20px',}}/>
        <h4>Online Lessons</h4>
        <p style={{color:'grey',}}>Use our whiteboard to experience live interactive tuition lessons from your home</p>
      </Col>
      <Col>
        <img src={graduation} alt="Graduation" width="100px" height="100px" style={{marginBottom:'20px',}}/>
        <h4>Certification</h4>
        <p style={{color:'grey',}}> We provide certificates for our program graduates</p>
      </Col>
      <Col> 
        <img src={calendar} alt="Calendar" width="100px" height="100px" style={{marginBottom:'20px',}}/>
        <h4>Manage lessons</h4>
        <p style={{color:'grey',}}> flexible, Nicely organized lessons for the convienience of our students</p>
      </Col>
      <Col> 
        <img src={globe} alt="Globe" width="100px" height="100px" style={{marginBottom:'20px',}}/>
        <h4>Wide choice</h4>
        <p style={{color:'grey',}}> We provide tutors from all over the world, who speak almost over 24 languages</p>
      </Col>
    </Row>
    <Row style={rowTutoringStyle}>
      <Col sm={7} style={{margin: 0,}}>
        <h3 style={subTextTutoring}>For Students<br/></h3>
        <h6 style={textFormsStyle}>
        If you wish to get tutored in any of the above subjects, fill in the form below! We will make sure 
        to place you with a tutor in 1-2 business days. After completing the course in your specified subject, you will 
        receive a personalized certificate of appreciation. 
        </h6>
        <Button variant="primary" 
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=BdJKHR72TECcWoDCjnisON52EX5zEcxCoG_9fRc_IhJUMk5NMFZCNEdaNE1IVEZGUVhXME4wUEJKOS4u" 
          size="lg"
          style={buttonStyle} >
              Register
        </Button>
      </Col>
      <Col sm={5} style={{margin: 0, padding: '20px',}}>
        <img src={zoom} alt="Zoom meetings" style={{width:'400px', height: '200px', boxShadow: '6px 8px 1px black'}}/> 
      </Col>
    </Row>
    <Row style={rowTutoringStyle}>
      <Col sm={5}>
        <img src={tutors} alt="Tutors" style={{width:'400px', height: '200px', boxShadow: '6px 8px 1px black'}}/> 
      </Col>
      <Col sm={7}>
        <h3 style={subTextTutoring}>For Tutors<br/></h3>
        <h6 style={textFormsStyle}>
        If you wish to tutor students in any of the above subjects, please fill in the form below! We will make sure to 
        place you with a student in 1-2 business days. After teaching the course to your student, you will receive 
        certified volunteering hours for devoting your time here!
        </h6>
        <Button variant="primary" 
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=BdJKHR72TECcWoDCjnisON52EX5zEcxCoG_9fRc_IhJUMk5NMFZCNEdaNE1IVEZGUVhXME4wUEJKOS4u" 
        size="lg"
        style={buttonStyle} >
            Register
        </Button>
      </Col>
    </Row>
      
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
}

const noteStyle = {
  margin: '0 auto',
  color: 'red',
}

const rowTutoringStyle = {
  marginTop: '80px',
  marginBottom: '130px',
  width: '100%',
}

const subTextTutoring = {
  textAlign:'center', 
  width:'100%',
}

const textFormsStyle = {
  fontSize: '20px',
  marginTop: '15px',
  color: 'grey',
}

const buttonStyle = {
  alignSelf:'center', 
  margin: '20px', 
  backgroundColor: '#212529', 
  border: 'none',
  boxShadow: '4px 4px 1px black',
  borderRadius: '0px',
}

export default Tutoring
