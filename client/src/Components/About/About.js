import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <Container>
        <Row>
            <Col style={{ display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>
                <p style={{ fontWeight: "bold"}}>About</p>
            </Col>
        </Row>
        <Row>
            <Col><Image src="" alt="about me"/></Col>
            <Col>This is the about section of the about</Col>
        </Row>
    </Container>
  )
}

export default About;