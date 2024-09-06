// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap


import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

     
//all images here
import crmLogo from '../assets/images/crmLogo.svg';
import loginBg1 from '../assets/images/loginBg1.png';
import { Mail, Lock, ArrowRight,ArrowLeft } from 'react-feather';

const Login = () => {

    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();
    const handleSignIn = (event) => {
        event.preventDefault();
        // Here you can add logic for authentication
        navigate('/home');


    };

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <div className='crm-login-page'>
                <img src={loginBg1} alt="login-bg-image" className='crm-login-bg' />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6 crm-login-form'>

                            <Form>
                                <img src={crmLogo} alt="Crm-logo" />

                                {!isActive ? <div className='crmLoginForm'>
                                    <h4>Sign In</h4>
                                    <Form.Group className="mb-3 form-group" controlId="formGroupEmail">
                                        <Form.Label><Mail /> Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3 form-group" controlId="formGroupPassword">
                                        <Form.Label><Lock /> Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your password" />
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                        <Col className='col-6'>
                                            <Form.Check label="Remember me" />
                                        </Col>
                                        <Col className='col-6'>
                                            <a href='#' onClick={handleClick}>Forgot Password ?</a>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Col>
                                            <Button type="submit" onClick={handleSignIn}><ArrowRight /> Sign in</Button>
                                        </Col>
                                    </Form.Group>
                                </div> :


                                    <div className="crmLoginForm crmForgotForm">
                                        <h4>Forgot Password</h4>
                                        <Form.Group className="mb-3 form-group" controlId="formGroupEmail">
                                            <Form.Label><Mail /> Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" />
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3">
                                            <Col>
                                                <Button type="submit" onClick={handleSignIn}><ArrowRight /> Send Password Link </Button>
                                            </Col>
                                            <Col className='col-12 col-lg-12'>
                                            <Link  onClick={handleClick}><ArrowLeft /> Back to login</Link>
                                            </Col>
                                        </Form.Group>

                                    </div>
                                }
                            </Form>



                        </div>
                    </div>
                </div>
                <p className='crm-footer'>
                    © 2024. <a href=''>ESDS Software Solution Ltd.</a> All Rights Reserved.
                </p>
            </div>
        </>
    )
}

export default Login