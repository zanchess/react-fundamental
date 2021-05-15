import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

const initialState = {
  courses: [],
};

function authors(state = initialState, action) {
  switch (action.type) {
    case GET_AUTHORS:
      return {
        authors: [...action.authors],
      };
    default:
      break;
  }
  return state;
}

export default authors;
