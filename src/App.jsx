import React, { useEffect, useState } from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import Header from './components/Header/Header';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import ROUTE from './constants/routes';
import LoginPage from './pages/Login/LoginPage';
import RegistrationPage from './pages/Registration/RegistrationPage';

const App = () => {
  // state hooks
  const [courses, setCourses] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  const [coursesPageIsHidden, setCoursesPageStatus] = useState(false);
  const [filteredCourses, setfilteredCourses] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  // Lifecycle hooks
  useEffect(() => {
    axios.get('http://localhost:3000/authors/all')
      .then((res) => setAllAuthors(res.data.result));
    axios.get('http://localhost:3000/courses/all')
      .then((res) => setCourses(res.data.result));
    /*    setAllAuthors(db.mockedAuthorsList);
    setCourses(db.mockedCourseList); */
  }, []);

  const onFormSubmit = (email, password) => {
    const body = {
      email,
      password,
    };

    axios.post('http://localhost:3000/login', {
      ...body,
    })
      .then((response) => {
        localStorage.setItem('token', response.data.result);
      }).then(setIsAuth(true))
      .catch((error) => {
        console.log(error);
      });
  };

  const showEditCourseForm = () => {
    setCoursesPageStatus(true);
  };

  const showCreateCourseForm = () => {
    setCoursesPageStatus(true);
  };

  // func for searching
  const searchCourse = (searchString) => {
    if (searchString) {
      const searchedCourses = [...courses]
        .filter((course) => course.id.toLowerCase().includes(searchString.toLowerCase())
          || course.title.toLowerCase().includes(searchString.toLowerCase()));
      setfilteredCourses(searchedCourses);
    } else {
      setfilteredCourses([]);
    }
  };

  const registerSubmit = (name, email, password) => {
    const body = {
      name,
      email,
      password,
    };

    axios.post('http://localhost:3000/register', {
      ...body,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="content">
        <Header />
        <Switch>
          <Route exact name="app" path="/" handler={App}>
            {isAuth || localStorage.getItem('token') ? (
              <>
                <Redirect from="/" to="courses" />
                <Route path="/courses" name="courses" handler={CoursesPage} />
              </>
            ) : (
              <>
                <Redirect from="/" to="login" />
                <Route path="/login" name="login" handler={LoginPage} />
              </>
            )}

          </Route>
          <Route
            exact
            path={ROUTE.LOGIN}
            component={() => <LoginPage onFormSubmit={onFormSubmit} />}
          />
          <Route
            path={ROUTE.REGISTRATION}
            component={() => <RegistrationPage registerSubmit={registerSubmit} />}
          />
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
      </div>
    </>
  );
};

export default App;
