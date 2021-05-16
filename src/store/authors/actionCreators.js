import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

export function addAuthor(authorInfo) {
  return {
    type: ADD_AUTHOR,
    authorInfo,
  };
}

export function getAuthors(authors) {
  return {
    type: GET_AUTHORS,
    authors,
  };
}
