import React ,{Component} from "react";
import "../App.css"
import { Link } from "react-router-dom";

import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from "react-bootstrap";

export default function Contents() {

    return(
        <>
            <div>
                <Container fluid>
                    <Row>
                        <Col xs = {12} className="p-0">

                            <div className="bg-img">

                            <Navbar>
                                <Container>
                                    <Navbar.Brand className="heading"> S.S.C. Exams Test series </Navbar.Brand>
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className="justify-content-end">
                                        <Navbar.Text>

                                            <Link to="/login" className="mr-4 heading"> Log in </Link>

                                            <Link to='/signup'>
                                              <Button variant="outline-light"> Sign Up </Button>
                                            </Link>
                                           
                                        </Navbar.Text>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>

                                <div className="contents">
                                        <h1> Tests are available </h1> <br/>
                                    <Link to="/signup">
                                        <Button variant="outline-light"> Sign Up </Button>
                                    </Link>
                                </div>
                                
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}