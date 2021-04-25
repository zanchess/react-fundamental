import React, { useEffect, useState } from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import CreateCoursePage from './pages/CreateCoursePage/CreateCoursePage';
import EditCoursePage from './pages/EditCoursePage/EditCoursePage';
import CourseInfoPage from './pages/CourseInfoPage/CourseInfoPage';
import db from './db';
import ROUTE from './constants/routes';

const App = () => {
  // state hooks
  const [courses, setCourses] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  const [isEditPage, setEditPageStatus] = useState(false);
  const [coursesPageIsHidden, setCoursesPageStatus] = useState(false);
  const [filteredCourses, setfilteredCourses] = useState([]);

  // Lifecycle hooks
  useEffect(() => {
    /* axios
      .get('http://localhost:3001/api/authors')
      .then((res) => setAllAuthors(res.data));
    axios
      .get('http://localhost:3001/api/courses')
      .then((res) => setCourses(res.data)); */
    setAllAuthors(db.mockedAuthorsList);
    setCourses(db.mockedCourseList);
  }, []);

  // Changing conditions for rendering
  const hideCreateCourseForm = () => {
    setCoursesPageStatus(false);
  };

  const hideEditCourseForm = () => {
    setCoursesPageStatus(false);
    setEditPageStatus(false);
  };

  const showEditCourseForm = () => {
    setCoursesPageStatus(true);
    setEditPageStatus(true);
  };

  const showCreateCourseForm = () => {
    setCoursesPageStatus(true);
  };

  // Conditions for renderind form
  const renderCourseForm = () => {
    if (coursesPageIsHidden && !isEditPage) {
      return (
        <CreateCoursePage
          hideCreateCourseForm={hideCreateCourseForm}
        />
      );
    }
    if (coursesPageIsHidden && isEditPage) {
      return (
        <EditCoursePage
          hideEditCourseForm={hideEditCourseForm}
        />
      );
    }
    return null;
  };

  // func for searching
  const searchCourse = (searchString) => {
    /* axios
      .get('http://localhost:3001/api/courses')
      .then((res) => setCourses(res.data)); */
    if (searchString) {
      const searchedCourses = db.mockedCourseList
        .filter((course) => course.id.toLowerCase().includes(searchString.toLowerCase())
          || course.title.toLowerCase().includes(searchString.toLowerCase()));
      setfilteredCourses(searchedCourses);
    } else {
      setfilteredCourses([]);
      setCourses(db.mockedCourseList);
    }
  };

  return (
    <>
      <div className="content">
        <Header />
        <Switch>
          <Route
            path={ROUTE.COURSES}
            component={() => (
              <CoursesPage
                courses={filteredCourses.length ? filteredCourses : courses}
                allAuthors={allAuthors}
                showCreateCourseForm={showCreateCourseForm}
                showEditCourseForm={showEditCourseForm}
                searchCourse={searchCourse}
                coursesPageIsHidden={coursesPageIsHidden}
              />
            )}
          />
        </Switch>
        <div className={coursesPageIsHidden ? 'courses-form visible' : 'courses-form hidden'}>
          {coursesPageIsHidden ? renderCourseForm() : null}
        </div>
      </div>
    </>
  );
};

export default App;
