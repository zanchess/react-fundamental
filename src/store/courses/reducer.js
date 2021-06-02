import {
  ADD_COURSE,
  GET_COURSES,
  DELETE_COURSE,
  UPDATE_COURSE,
} from './actionTypes';

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
      const i = state.courses.findIndex((author) => author.id === action.id);
      const allCourses = [...state.courses];

      allCourses.splice(i, 1);
      return {
        courses: [...allCourses],
      };
    case UPDATE_COURSE:
      const courseIndex = state.courses
        .findIndex((course) => course.id === action.updatedCourse.id);
      const allCoursesArr = [...state.courses];
      allCoursesArr.splice(courseIndex, 1, action.updatedCourse);
      return {
        courses: [...allCoursesArr],
      };
    default:
      break;
  }
  return state;
}

export default coursesReducer;
