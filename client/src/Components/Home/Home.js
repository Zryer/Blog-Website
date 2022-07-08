import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navi from '../Navbar/Navbar';
import Blog from '../Blogs/Blog';
import About from '../About/About';

const Home = () => {
  return (
    <Container>
        <Row>
            <Col>
                <div style={{fontSize: "5rem"}}>Title</div>
            </Col>
        </Row>
        <Row>
            <Navi/>
        </Row>
        <Row>
            <Blog/>
        </Row>
        <Row>
            <About/>
        </Row>
    </Container>
  )
}

export default Home