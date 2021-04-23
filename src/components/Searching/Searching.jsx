import React, { useState } from 'react';
import './searching.scss';
import { Button, Form } from 'react-bootstrap';

const Searching = () => (
  <>
    <Form className="searching">
      <Form.Group className="searching__group">
        <Form.Control className="searching__input" type="text" placeholder="search..." />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  </>
);

export default Searching;
