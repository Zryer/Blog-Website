import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
  return (
    <Container>
        <Row>
            <Col style={{ display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>
               <p style={{ fontWeight: "bold"}}>Recent Blogs</p>
            </Col>
        </Row>
        <Row>
            <Card as={Col} xs={4}>
                <Card.Img src="" alt="example"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>lorem ipsum</Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card as={Col} xs={4}>
                <Card.Img src="" alt="example"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>lorem ipsum</Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card as={Col} xs={4}>
                <Card.Img src="" alt="example"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>lorem ipsum</Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default Blog;