import { GET_AUTHORS } from './actionTypes';

const initialState = {
  authors: [],
};

function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AUTHORS:
      console.log(action.authors);
      return {
        authors: [...action.authors],
      };
    default:
      break;
  }
  return state;
}

export default authorsReducer;
