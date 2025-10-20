import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";


export default function LoginForm(props) {

    const handleLogin=e=>{
        e.preventDefault();
        const formElements =e.currentTarget.elements;
        
        console.log('form elements:', formElements);
        const formValues= formElements.map(element=>element)
    }



    return (
        <>
            <Form onSubmit={handleLogin}>
                      <Form.Group className="mb-3" controlId="loginForm.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                     <Form.Group className="mb-3" controlId="loginForm.password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">LOGIN</Button>
            </Form>

        </>
    )
}