import axios from 'axios';
import {
  ADD_COURSE,
  DELETE_COURSE,
  GET_COURSES,
  UPDATE_COURSE,
} from './actionTypes';

export function addCourse(newCourse) {
  return {
    type: ADD_COURSE,
    newCourse,
  };
}

export const setCourses = () => (dispatch) => {
  axios
    .get('http://localhost:3000/courses/all')
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_COURSES, courses: res.data.result });
    });
};

export function deleteCourse(id) {
  return {
    type: DELETE_COURSE,
    id,
  };
}

export function updateCourse(updatedCourse) {
  console.log(updatedCourse);
  return {
    type: UPDATE_COURSE,
    updatedCourse,
  };
}
