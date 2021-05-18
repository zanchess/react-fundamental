import { GET_AUTHORS } from './actionTypes';

export function setAuthors(authors) {
  return {
    type: GET_AUTHORS,
    authors,
  };
}
