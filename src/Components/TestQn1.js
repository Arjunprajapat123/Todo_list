import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col, CardGroup, Card, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function TestStart() {
    return (
        <div className='bg-img'>
            <Container fluid>
                <Row>
                    <Col xs={12} className='p-0 mt-2'>
                        <div className='test_take_button'>
                            <p> Menu </p>
                            <h4> Time ......... </h4>
                            <Button variant="primary outline-light"> Test Submit </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} className='p-0'>
                        <div className='mt-5'>
                            <p style={{ fontSize: "25px" }}>
                                Question 1 : .........................................................................................................................................,<br />
                                .........................................................................................................................................,<br />
                                .........................................................................................................................................,
                                <Form className='mt-5'>

                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="1 ..................."
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            /><br />
                                            <Form.Check
                                                inline
                                                label="2 ..................."
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            /><br />
                                            <Form.Check
                                                inline
                                                label="3 ...................."
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-3`}
                                            /><br />
                                            <Form.Check
                                                inline
                                                label="4 ...................."
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-4`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} className='mt-5'>
                        <div className='back_button'>
                            <Link to={"/TestQn2"}>
                                <Button variant="primary outline-black"> Next &gt; </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
