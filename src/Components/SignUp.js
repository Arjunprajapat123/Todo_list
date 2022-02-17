import React, { Component } from "react";
import "../App.css";
import axios from "axios";

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function SignUp() {

    const [name , setname] = useState("")
    const [mobile , setmobile] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const [id , setid] = useState(nanoid())

    const handleclick = async()=>{

        setid(nanoid());

        await axios.post("http://localhost:3000/signup" , {
            name , mobile , email , password , id
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
 
    return (
        <>
        {console.log(name , mobile , email , password)}
            <div className="bg-img">
                <Container fluid>
                    <Row className="login">
                        <Col xs={4}>
                            <div>

                                <h2 className="text-center mt-4"> Sign Up </h2> <br/>
                                <form className="mt-4">
                                    <label> Your Name </label>
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                        >
                                        </input>
                                    <br/>

                                    <label> Mobile No. </label>
                                    <input 
                                        type="text" 
                                        placeholder="Mobile number" 
                                        className="form-control"
                                        value={mobile}
                                        onChange={(e) => setmobile(e.target.value)}
                                       
                                        ></input>
                                    <br/>
                                    
                                    <label> Email Address </label>
                                    <input 
                                        type="text" 
                                        placeholder="Email Address" 
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        ></input>
                                    <br/>
                                    
                                    <label> Password </label>
                                    <input 
                                        type="text" 
                                        placeholder="Password" 
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        ></input>

                                    <br/>
                                    <span className="d-flex justify-content-center">
                                        <Link to='/main'>
                                        <Button onClick={handleclick} className="mt-3 mb-3" variant="primary" type="submit" >
                                            Sign up
                                        </Button>
                                        </Link>
                                    </span>
                                    <br/>
                                    <p className="d-flex justify-content-center">
                                        Already have an Account ? <a className="mx-3" href="#login"> Sign In </a>
                                    </p>

                                </form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}