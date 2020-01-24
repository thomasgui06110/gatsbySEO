import React from "react";
import { Form, Button } from "react-bootstrap";
import PrimaryLayout from "../layouts/PrimaryLayout";

export default () => (
  <PrimaryLayout colum="col-10">
    <div className="pt-5">
      <h1>Contact us</h1>
      <Form>
        <Form.Group controlId="contactFoerm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactFoerm.Subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Sujet..." />
        </Form.Group>
        <Form.Group controlId="contactFoerm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="contactFoerm.Message">
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  </PrimaryLayout>
);
