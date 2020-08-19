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
          <Col sm={5} style={{padding:'0px',textAlign:'right',}}><img src={problem} style={{width: '80px', height: '80px', }}/></Col>
          <Col sm={7} style={{padding:'0px',textAlign: 'left', }}><h1 style={{paddingTop: '20px',}}>Problem</h1></Col>
      </Row>
      <Row style={rowVision}>
        <Row style={{width:'100%', justifyContent:'space-evenly'}}>
          <img src={orphan} style={{width: '460px', height: '260px', borderRadius: '0.3rem',}}/>
          <img src={orphansBlack} style={{width: '460px', height: '260px', borderRadius: '0.3rem', }}/>
        </Row>
        <Row>
          <hr style={{width:'300px',}}/>
          <p style={visionStatementStyle}>Lack of resources and funding for 
            orphanages and orphans is a growing issue. The number of orphans living under the poverty line is tremendous 
            and orphanages in struggling parts of the world are not equipped with enough resources to keep the children 
            nourished and educated. 
          </p>
        </Row>
      </Row>
      <Row>
          <Col sm={5} style={{padding:'0px',textAlign:'right',}}><img src={vision} style={{width: '80px', height: '80px', }}/></Col>
          <Col sm={7} style={{padding:'0px',textAlign: 'left', }}><h1 style={{paddingTop: '20px', }}>Our vision</h1></Col>
      </Row>
      <Row style={rowVision}>
        <Row style={{width:'100%',}}><img src={problem1} style={{width: '600px', height: '300px', borderRadius: '0.3rem', margin:'0 auto',}}/></Row>
        <Row>
          <hr style={{width:'300px',}}/>
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

const verticalVisionLine = {
  width: '1px',
  marginRight: '40px',
  backgroundColor: 'red',
  height: '140px',
  float: 'left',
}

const visionStatementStyle = {
  textAlign: 'left',
  marginLeft: '100px',
  marginRight: '100px',
  marginTop: '60px',
  textAlign: 'center',
}

const visionStyle = {
  margin: '40px',
}

const rowVision = {
  marginTop: 100,
  marginBottom: 100,
}



export default aboutUs
