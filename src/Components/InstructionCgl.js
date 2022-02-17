import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col, CardGroup, Card, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Instcgl() {
    return (
        <div className='bg-img'>
             <Container>
                    <Row>
                        <Col xs={12} className='mt-5'>
                            <div className='inst_page'>
                                <p> Totol Question : ----  100 </p>
                                <p> Given Time : ----  90 minits </p>
                                <p> Total Marks : ----  100 </p>
                                <br/><br/><br/>
                                <div className='inst-center'>
                                    <p> General Instructions </p>
                                    <ol type='1' start={1} style={{fontSize : "20px"}}>
                                        <li> The total duration of the examination is 90 minits. </li>
                                        <li> Total marks of the give examination test is 100 . </li>
                                        <li> Total subjects are maths , reasoning , general knowledge , english </li>
                                        <li> ................................................................................................</li>
                                        <li> ................................................................................................</li>
                                        <li> ................................................................................................</li>
                                        <li> ................................................................................................</li>
                                        <br/>
                                        <p style={{color : "Green"}}>  Best Of Luck ! </p>
                                    </ol>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={12} className='mt-5'>
                            <div className='test_take_button'>

                                <Link to={"/cgl"}>
                                <Button variant="primary outline-black"> Back </Button>
                                </Link>
                                
                                
                                <Link to={"/teststart"} >
                                <Button variant="primary outline-black"> Take Test </Button>
                                </Link>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
