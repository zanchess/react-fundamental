import React from 'react';
import { Button } from 'react-bootstrap';
import './select-author.scss';

const SelectAuthor = ({ author, selectedAuthors, selectAuthorHandle }) => (
  <>
    <div className="author-list">
      <span>{author}</span>
      <Button name={author} onClick={selectAuthorHandle} className="btn-group__author" variant="primary" disabled={selectedAuthors.find((a) => a.name === author)}>
        Add author
      </Button>
    </div>
  </>
);

export default SelectAuthor;
