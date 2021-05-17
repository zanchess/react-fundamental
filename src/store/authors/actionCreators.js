import { GET_AUTHORS } from './actionTypes';

export function getAuthors(authors) {
  return {
    type: GET_AUTHORS,
    authors,
  };
}
