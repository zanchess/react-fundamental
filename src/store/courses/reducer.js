import { ADD_COURSE, GET_COURSES } from './actionTypes';

const initialState = {
  courses: [],
};

function courses(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        courses: [...action.courses],
      };
    default:
      break;
  }
  return state;
}

export default courses;
