import React, { Component } from "react";
import "../App.css"

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <>
            <div className="bg-img">
                <Container fluid className="p-0">
                    <Row className="login"> 
                        <Col xs={4} className="p-0">
                            <div className="mt-5">

                            <h2 className="text-center"> Sign In </h2> <br/>
                                <Form>
                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <br/>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        <div className="d-flex justify-content-end">
                                            <a className="mx-3" href="#login"> Forget Password ?</a>
                                        </div>
                                    </Form.Group>
                                    
                                    <div className="d-flex justify-content-center">
                                        <Link to={"/main"}>
                                        <Button className="mt-3 mb-3" variant="primary" type="submit">
                                            Sign in
                                        </Button>
                                        </Link>
                                    </div>
                                    
                                </Form>
                                <p className="d-flex justify-content-center">
                                    Don't have Account ? <a className="mx-3" href="#login"> Create an Account </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}