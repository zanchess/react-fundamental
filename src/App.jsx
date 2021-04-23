import React, { useEffect, useState } from 'react';
import './app.scss';
import axios from 'axios';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import CreateCoursePage from './pages/CreateCoursePage/CreateCoursePage';
import EditCoursePage from './pages/EditCoursePage/EditCoursePage';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  const [isEditPage, setEditPageStatus] = useState(false);
  const [coursesPageIsHidden, setCoursesPageStatus] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/authors')
      .then((res) => setAllAuthors(res.data));
    axios
      .get('http://localhost:3001/api/courses')
      .then((res) => setCourses(res.data));
  }, []);

  const renderCourseForm = () => {
    if (coursesPageIsHidden && !isEditPage) {
      return (
        <CreateCoursePage
          hideCreateCourseForm={hideCreateCourseForm}
        />
      );
    }
    if (coursesPageIsHidden && isEditPage) return <EditCoursePage />;
  };

  const showEditCourseForm = () => {
    setCoursesPageStatus(true);
    setEditPageStatus(true);
  };

  const showCreateCourseForm = () => {
    setCoursesPageStatus(true);
  };

  const hideCreateCourseForm = () => {
    setCoursesPageStatus(false);
  };

  const hideEditCourseForm = () => {
    setCoursesPageStatus(false);
    setEditPageStatus(false);
  };

  return (
    <>
      <div className="content">
        <Header />
        <div className={coursesPageIsHidden ? 'courses-page hidden' : 'courses-page visible'}>
          <CoursesPage
            courses={courses}
            allAuthors={allAuthors}
            showCreateCourseForm={showCreateCourseForm}
          />
        </div>
        <div className={coursesPageIsHidden ? 'courses-form visible' : 'courses-form hidden'}>
          {renderCourseForm()}
        </div>
      </div>
    </>
  );
};

export default App;
