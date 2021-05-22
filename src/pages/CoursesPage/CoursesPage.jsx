import React, { useEffect } from 'react';
import './courses-page.scss';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Courses from '../../components/Courses/Courses';
import ROUTE from '../../constants/routes';
import CourseInfoPage from '../CourseInfoPage/CourseInfoPage';
import CreateCoursePage from '../CreateCoursePage/CreateCoursePage';
import UpdateCourse from '../../components/UpdateCourse/UpdateCourse';
import { setCourses } from '../../store/courses/actionCreators';
import { setAuthors } from '../../store/authors/actionCreators';

const CoursesPage = ({
  searchCourse,
}) => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authorsReducer.authors);
  const courses = useSelector((state) => state.coursesReducer.courses);
  console.log(authors);

  useEffect(() => {
    dispatch(setAuthors());
    dispatch(setCourses());
  }, []);

  return (
    <Switch>
      <Route
        exact
        path={ROUTE.COURSES}
        component={() => (
          <Courses
            courses={courses}
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
