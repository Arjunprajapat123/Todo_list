import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col, CardGroup, Card, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logoimg from '../Components/ssc.jpg'

export default function MainContent() {
    return (
        <>
            <div className='bg-img'>
                <Container>
                    <Row>
                        <Col xs={12} className='mt-5'>
                            <div>
                                <p className="text-center color"> Staff Selection Commission Exams Test</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <Col xs={4} className='m-0 p-0'>
                            <div className='text-center'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logoimg} />
                                    <Card.Body>
                                        <Card.Title> SSC CGL </Card.Title>

                                        <Link to='/cgl'>
                                            <Button variant="info"> Click here </Button>
                                        </Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={4} className='m-0 p-0'>
                            <div className='text-center'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logoimg} />
                                    <Card.Body>
                                        <Card.Title> SSC CHSL </Card.Title>
                                        <Link to={"/chsl"}>
                                            <Button variant="info"> Click here </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={4} className='m-0 p-0'>
                            <div className='text-center'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logoimg} />
                                    <Card.Body>
                                        <Card.Title> SSC MTS </Card.Title>
                                        <Link to={"/mts"}>
                                            <Button variant="info"> Click here </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col xs={4} className='m-0 p-0'>
                            <div className='text-center'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logoimg} />
                                    <Card.Body>
                                        <Card.Title> SSC GD </Card.Title>
                                        <Link to={"/gdconstable"} >
                                            <Button variant="info"> Click here </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col xs={4} className='m-0 p-0'>
                            <div className='text-center'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Logoimg} />
                                    <Card.Body>
                                        <Card.Title> SSC Stenographer </Card.Title>
                                        <Button variant="info"> Click here </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}
{/* 
<div className='bg-img'>
    <Container>
        <Row>
            <Col xs={12} className=''>
                <div>
                    <p className="text-center color"> Staff Selection Commission Exams Test</p>
                </div>

                <div>

                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={Logoimg} />
                                    <Card.Body>
                                        <Card.Title>SSC CGL</Card.Title>
                                    </Card.Body>
                                    <Button variant="info"> Click here </Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
        </Row>
        </Container>
        </div>

        </>
    )
} */}
