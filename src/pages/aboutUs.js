import React from "react"
import vision from "./images/vision.png"
import problem from "./images/problem.png"
import orphan from "./images/Orphan.jpg"
import problem1 from "./images/problemOrphans.jpg"
import orphansBlack from "./images/orphansBlack.jpg"

import Layout from "../components/layout"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"

const aboutUs = () => (
  <Layout pageInfo={{ pageName: "aboutUs" }}>
    <Container className="text-center">

      <Jumbotron style={teamJumbotronStyle}>
            <h2>About Us</h2>
      </Jumbotron>
      <Row>
          <Col sm={5} style={{padding:'0px',textAlign:'right',}}><img src={problem} alt="Problem Visualization" style={{width: '80px', height: '80px', }}/></Col>
          <Col sm={7} style={{padding:'0px',textAlign: 'left', }}><h1 style={{paddingTop: '20px',}}>Problem</h1></Col>
      </Row>
      <Row style={rowVision}>
        <Row style={{width:'100%',}}>
          <Col sm={1}></Col>
          <Col sm={5}><img src={orphan} alt="Child" style={imageAboutus}/></Col>
          <Col sm={5}><img src={orphansBlack} alt="children" style={imageAboutus}/></Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <p style={visionStatementStyle}>
            In today’s world, a massive lifestyle disparity exists in both LEDC and MEDC countries. The two most vulnerable groups in this unfortunate heirarchy are labor workers and orphans. Our team sees this project as an opportunity to alleviate the impoverished conditions these groups endeavour. <br/><br/>
          Labour workers have to spend countless hours in the heat with insufficient resources to maintain good sanitary hygiene and physical health. Although they are supplied by companies in the UAE, they are yet to retain proper mental and emotional treatment. <br/><br/>
          Moreover, as for orphans, they have lost one or both their parents and have extremely low standards of living especially in East Asian countries. According to UNICEF, more than 65 million orphans live under the UN described international poverty line. <br/><br/>
          This is why, as a team of privileged teenagers, we hope to assist these groups in India, UAE, Pakistan, Egypt, US and Canada by providing them with resources and supplies that will help them in short and long term. By using our skills, we believe we can emotionally connect 
          with these groups and providing sanitary supplies such as hand sanitizers, toothbrushes, toothpaste, mask sets, shampoo, soap, face cloths, deodorant, nail cutters, face towels, face shields etc. Moreover, the face shields will be 3D printed using our designing skills to cut down on extra costs. In addition, we will be providing orphanages with handmade crochets, educational materials, technology, and environmental awareness classes that broaden their understanding as a global citizen.  <br/><br/>
          By doing these activities, we hope to foster a good connection with the labor workers acknowledging their efforts and appreciating them for all the hard work they put in. Furthermore, for orphans, we hope to build a relationship offering them services that they can avail even in the future.
          </p>
        </Row>
      </Row>
      <Row>
          <Col sm={5} style={{padding:'0px',textAlign:'right',}}><img src={vision} alt="Our Vision" style={{width: '80px', height: '80px', }}/></Col>
          <Col sm={7} style={{padding:'0px',textAlign: 'left', }}><h1 style={{paddingTop: '20px', }}>Our vision</h1></Col>
      </Row>
      <Row style={rowVision}>
        <Row style={{width:'100%',}}><img src={problem1} alt="Problem" style={imageAboutus}/></Row>
        <Row>
          <p style={visionStatementStyle}>Here at Defy, we believe every orphan has the potential to flourish and defy the odds set against them. 
          Any challenge is surmountable with the right resources and opportunities, which is exactly what Defy aims 
          to provide for orphans across the globe. Orphans that receive aid from the Defy Organization will step into 
          adulthood with the confidence, network, support, and nourishment to lead a meaningful and fulfilling life.
          </p>
        </Row>
      </Row>
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
  marginBottom: 100,
}

const visionStatementStyle = {
  marginLeft: '100px',
  marginRight: '100px',
  marginTop: '60px',
  textAlign: 'center',
}

const rowVision = {
  marginTop: 100,
  marginBottom: 100,
}

const imageAboutus = {
  padding: '0',
  margin: 'auto',
  width: '460px', 
  height: '260px', 
  boxShadow: '6px 8px 1px black'
}

export default aboutUs
