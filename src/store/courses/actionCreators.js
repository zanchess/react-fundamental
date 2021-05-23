import axios from 'axios';
import {
  ADD_COURSE,
  DELETE_COURSE,
  GET_COURSES,
  UPDATE_COURSE,
} from './actionTypes';

export const addCourse = (newCourse) => (dispatch) => {
  const token = localStorage.getItem('token');
  console.log(newCourse);

  axios.post('http://localhost:3000/courses/add', newCourse, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADD_COURSE,
        newCourse: res.data.result,
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

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

  axios.put(`http://localhost:3000/courses/${updatedCourse.id}`, updatedCourse, {
    headers: {
      Authorization: token,
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
