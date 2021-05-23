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

export const updateCourse = (updatedCourse) => (dispatch) => {
  const token = localStorage.getItem('token');
  console.log(updatedCourse);

  axios.put(`http://localhost:3000/courses/${updatedCourse.id}`, updatedCourse, {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      dispatch({
        type: UPDATE_COURSE,
        updatedCourse: res.data.result,
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
};
