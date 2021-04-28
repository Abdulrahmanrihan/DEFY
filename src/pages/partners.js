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
        <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
          }
            <Card.Body style={cardBody}>
              <Card.Title>Hack club Egypt</Card.Title>
              {
              // <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Technical Partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>South India Agencies Pvt Ltd</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Primary sponsor company partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>Aquaholic creative solutions LLC</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Secondary sponsor company partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck style={{display: 'flex', flexDirection: 'row', paddingTop: '40px', justifyContent: 'space-around'}}>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>Chandra Engineering and Mechanical Pvt Ltd</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Primary resources company partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>For the menstruator non-profit organization</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Primary resources company partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>Crochet your way non-profit organization</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Non-profit partner organization</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck style={{display: 'flex', flexDirection: 'row', paddingTop: '40px', justifyContent: 'space-around'}}>
        <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>Antharbaava Foundation</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Orphanage partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>Sneha Orphanage</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Orphanage partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={card}>
            {
            //<Card.Img variant="top" src={hackclub} style={cardImage}/>
            }
            <Card.Body style={cardBody}>
              <Card.Title>Angels Orphanage</Card.Title>
              {
              //  <Card.Text>
              // Hack Club is a global network of programming clubs where members learn to code through tinkering and 
              // building projects.
              // </Card.Text>
              }
              <Card.Footer>
                <small className="text-muted">Orphanage partner</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardDeck>
    </Container>
  </Layout>
)

const teamJumbotronStyle = {
  marginTop: 20,
}

const cardImage = {
  objectFit: 'cover',
}

const card = {
  flex: '0 0 21rem',
  height: 'min-content'
}

const cardBody = {
}

export default Partners
