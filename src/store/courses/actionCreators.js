import { ADD_COURSE, GET_COURSES } from './actionTypes';

export function addCourse(courseInfo) {
  return {
    type: ADD_COURSE,
    courseInfo,
  };
}

export function getCourses(courses) {
  console.log(courses);
  return {
    type: GET_COURSES,
    courses,
  };
}
