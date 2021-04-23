import React, { useState } from 'react';
import './searching.scss';
import { Button, Form } from 'react-bootstrap';

const Searching = ({ searchCourse }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChande = (event) => {
    setSearchValue(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    searchCourse(searchValue);
  };
  return (
    <>
      <Form className="searching" onSubmit={searchHandler}>
        <Form.Group className="searching__group">
          <Form.Control onChange={handleChande} value={searchValue} className="searching__input" type="text" placeholder="search..." />
          <Button onClick={searchHandler} variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Searching;
