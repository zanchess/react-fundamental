import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

export function addAuthor(authorInfo) {
  return {
    type: ADD_AUTHOR,
    authorInfo,
  };
}

export function getAuthors(authors) {
  console.log(authors);
  return {
    type: GET_AUTHORS,
    authors,
  };
}
