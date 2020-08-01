import React from "react"
import { Link } from "gatsby"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <Container className="text-center">
    <Jumbotron id="blog" style={teamJumbotronStyle} >
        <h2>Blog</h2>
    </Jumbotron>
    <h4> ~ There is no blog posts yet ~</h4>
    <p> stay tuned</p>
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
}

export default SecondPage
