import { ADD_COURSE, GET_COURSES, DELETE_COURSE } from './actionTypes';

const initialState = {
  courses: [],
};

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        courses: [...action.courses],
      };
    case ADD_COURSE:
      return {
        courses: [...state.courses, action.newCourse],
      };
    case DELETE_COURSE:
      return {
        courses: [...action.courses],
      };
    default:
      break;
  }
  return state;
}

export default coursesReducer;
