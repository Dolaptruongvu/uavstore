import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

function LoginForm() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: '-150px' }}>
      <Form className="border p-4 rounded shadow" style={{ width: '520px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
