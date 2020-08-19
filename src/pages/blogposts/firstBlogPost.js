import React from "react"
import { Link } from "gatsby"

import { Container, Col, Row } from "react-bootstrap"

const firstPost = () => (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
    <Container style={container} className="text-center">
       <Row>
       <Col sm={4} style={bio}>
           <h4 style={{margin: '0'}}>Aanya Arya</h4>
           <h6 style={{margin: '5px', color:'#f5f2d0', fontSize:'13px'}}>[8/7/20] [1:26 AM]</h6>
           <p style={{color:'#f5f2d0', padding: '20px'}}>Aanya is a passionate Indian writer in UAE. 
           Over the past few years, she has written an published children’s story books, memoirs, 
           and poems. Recently, she joined Defy to write blogs about orphanages around the world. 
           Moreover, she has worked with many orphanages around India and believes a vital step needs 
           to be taken in order to maintain the educational standards in such places.</p>
       </Col>
       <Col sm={8} style={{padding: '20px', textAlign: 'left',}}>
           <h2 style={header}>Orphans</h2>
           <p>There are a shocking number of orphan children in the whole world. According to 
               statistics, there are more than <span style={red}>140 million</span> children who are considered to be 
               orphans by one definition or another. Unfortunately, there are orphan children 
               who are mostly even abandoned.</p>
            <p>This is the story of Catherine Lal. She was just four months old when she was 
                dropped at the gate of the Good Shepherd Agricultural Mission, a huge orphanage 
                in the north of India, not a long way from the Nepal border. The orphanage was 
                not just a regular children’s home, they were a nearly self-sustaining 
                organization; a working farm, a vibrant school, getting no kind of donations 
                from the government. Catherine’s folks and more distant family are not known 
                right up ’til today. In a nation with an expected <span style={red}>22 million</span> orphans, this isn’t 
                an unusually horrific start—yet Catherine’s story has end up being a lot more 
                unfortunate than most.</p>
            <p>At <span style={red}>13 years million</span> old, she had four of her fingers detached in a farming gear mishap, 
                leaving her with a thumb and a delicate knob on her right hand. “No man will want
                 you now,” she’s been told by friends, and these words despite everything keep 
                 repeating in her heart every now and then. A long time later as a youthful grown-up 
                 when she quickly left the mission or the orphanage, there was more brutality hanging 
                 tight for her in Delhi, leaving less noticeable yet enduring scars.</p>
            <p>There is no reason to remember the details here, yet Catherine remembers them 
                every day, in dreams that despite everything still haunt her and stay with her. 
                <i>“Sometimes I wonder if I am cursed,”</i> Cathy, presently <span style={red}>26</span>, says. <i>“Or a mistake of 
                some kind.” </i>Raised Christian, she appeals to god for harmony however finds no comfort. “I feel I have no future,” she confided in a recent text message to a friend. “Maybe I am not meant for this world.”</p>
       </Col> 
       </Row>
    </Container>
    </>
)

const red = {
    color: 'red',
}
const bio = {
    paddingTop: '60px',
    paddingRight: '40px', 
    paddingLeft: '40px', 
    backgroundColor: 'grey',
}

const header = {
    marginTop:'40px',
    marginBottom: '60px',
}

const container = {
    fontFamily: 'Poppins',
}
export default firstPost