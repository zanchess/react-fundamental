import { ADD_COURSE, DELETE_COURSE, GET_COURSES } from './actionTypes';

export function addCourse(newCourse) {
  return {
    type: ADD_COURSE,
    newCourse,
  };
}

export function setCourses(courses) {
  return {
    type: GET_COURSES,
    courses,
  };
}

export function deleteCourse(courses) {
  return {
    type: DELETE_COURSE,
    courses,
  };
}
