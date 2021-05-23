import React from 'react';
import './courses-page.scss';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Courses from '../../components/Courses/Courses';
import ROUTE from '../../constants/routes';
import CourseInfoPage from '../CourseInfoPage/CourseInfoPage';
import CreateCoursePage from '../CreateCoursePage/CreateCoursePage';
import UpdateCourse from '../../components/UpdateCourse/UpdateCourse';

const CoursesPage = ({
  searchCourse,
  filteredCourses,
}) => {
  const authors = useSelector((state) => state.authorsReducer.authors);
  const courses = useSelector((state) => state.coursesReducer.courses);

  return (
    <Switch>
      <Route
        exact
        path={ROUTE.COURSES}
        component={() => (
          <Courses
            courses={filteredCourses || courses}
            allAuthors={authors}
            searchCourse={searchCourse}
          />
        )}
      />
      <Route path={`${ROUTE.COURSES}${ROUTE.ADD}`} component={() => <CreateCoursePage />} />
      <Route path={`${ROUTE.COURSES}/update/:id`} component={() => <UpdateCourse courses={courses} allAuthors={authors} />} />
      <Route path={`${ROUTE.COURSES}/:id`} component={() => <CourseInfoPage courses={courses} allAuthors={authors} />} />
    </Switch>
  );
};

export default CoursesPage;
