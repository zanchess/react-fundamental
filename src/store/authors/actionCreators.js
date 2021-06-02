import axios from 'axios';
import { GET_AUTHORS } from './actionTypes';

export const setAuthors = () => (dispatch) => {
  axios.get('http://localhost:3000/authors/all')
    .then((res) => {
      dispatch({ type: GET_AUTHORS, authors: res.data.result });
    });
};
