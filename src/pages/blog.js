import React from "react"
import { Link } from "gatsby"

import { Container, Jumbotron, Card, Button } from "react-bootstrap"
import Layout from "../components/layout"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <Container className="text-center">
    <Jumbotron id="blog" style={teamJumbotronStyle} >
        <h2>Blog</h2>
    </Jumbotron>
    <Card style={{textAlign:'left',}}>
      <Card.Header style={{width:'100%'}}><span style={{textAlign:'left', fontWeight:'bold',}}>Author: Aanya Arya</span> <span style={{textAlign:'right'}}>[8/7/20] [1:26 AM]</span></Card.Header>
      <Card.Body>
        <Card.Title>Orphans</Card.Title>
        <Card.Text>
        There are a shocking number of orphan children in the whole world. According to statistics, 
        there are more than 140 million children who are considered 
        to be orphans by one definition or another. Unfortunately, there are..
        </Card.Text>
        <Button variant="primary">
            <Link to="/blogposts/firstBlogPost" style={{color:'white',}}>
            Continue
            </Link>
          </Button>
      </Card.Body>
    </Card>
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
}

export default SecondPage
