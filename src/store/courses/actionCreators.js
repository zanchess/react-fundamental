import { ADD_COURSE, GET_COURSES } from './actionTypes';

export function addCourse(newCourse) {
  return {
    type: ADD_COURSE,
    newCourse,
  };
}

export function getCourses(courses) {
  return {
    type: GET_COURSES,
    courses,
  };
}
