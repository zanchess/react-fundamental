import React from 'react';
import { Button } from 'react-bootstrap';
import './selected-authors.scss';

const SelectAuthor = ({ author, deleteAuthorHandle }) => (
  <>
    <div className="author-list">
      <span>{author}</span>
      <Button name={author} onClick={deleteAuthorHandle} className="btn-group__author" variant="primary">
        Delete author
      </Button>
    </div>
  </>
);

export default SelectAuthor;
