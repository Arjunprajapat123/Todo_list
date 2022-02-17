import React, { Component } from "react";

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navb() {

    return (
        <>
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={12}>

                            <Navbar>
                                <Container>
                                    <Navbar.Brand href="#home"> S.S.C. Exams Test series </Navbar.Brand>
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className="justify-content-end">
                                        <Navbar.Text>
                                            <Link  to="/login"> Log in </Link>

                                            <Link to='/signup'>
                                              <Button variant="outline-success"> Sign Up </Button>
                                            </Link>
                                           
                                        </Navbar.Text>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}