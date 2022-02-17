import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col, CardGroup, Card, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function CGL() {
    return (
        <div>
            <div className='bg-img'>
                <Container fluid>
                    <Row>
                        <Col xs={12} className='mt-5'>
                            <div>
                                <p className="text-center color"> SSC Combined Graduate Level Exam Tests</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6} className='mt-5'>
                            <div className='cgl'>
                                <Link to={"/Instcgl"} >
                                    <p className='mb-1 ml-2 mt-1'> SSC CGL full mock test - 1 </p>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} className='mt-4'>
                            <div className='cgl'>
                                <Link to={"/Instcgl"} >
                                    <p className='mb-1 ml-2 mt-1'> SSC CGL full mock test - 2 </p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className='mt-4'>
                            <div className='cgl'>
                                <Link to={"/Instcgl"} >
                                    <p className='mb-1 ml-2 mt-1'> SSC CGL full mock test - 3 </p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className='mt-4'>
                            <div className='cgl'>
                                <Link to={"/Instcgl"} >
                                    <p className='mb-1 ml-2 mt-1'> SSC CGL full mock test - 4 </p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className='mt-4'>
                            <div className='cgl'>
                                <Link to={"/Instcgl"} >
                                    <p className='mb-1 ml-2 mt-1'> SSC CGL full mock test - 5 </p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className='mt-4'>
                            <div className='cgl'>
                                <Link to={"/Instcgl"} >
                                    <p className='mb-1 ml-2 mt-1'> SSC CGL full mock test - 6 </p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={12} className='mt-5'>
                            <div className='back_button'>
                                <Link to={"/main"}>
                                <Button variant="primary outline-black"> Back </Button>
                                </Link>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
