import React, { useEffect, useState } from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import ROUTE from './constants/routes';
import LoginPage from './pages/Login/LoginPage';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { logIn } from './store/user/actionCreators';
import { setCourses } from './store/courses/actionCreators';
import { setAuthors } from './store/authors/actionCreators';

const App = () => {
  const authors = useSelector((state) => state.authorsReducer.authors);
  const courses = useSelector((state) => state.coursesReducer.courses);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  // state hooks
  const [filteredCourses, setfilteredCourses] = useState([]);

  const history = useHistory();

  // Lifecycle hooks
  useEffect(() => {
    dispatch(setAuthors());
    dispatch(setCourses());
  }, []);

  const onFormSubmit = (email, password) => {
    const body = {
      email,
      password,
    };
    history.push(ROUTE.COURSES);
    dispatch(logIn({ email, password }));
  };

  // func for searching
  const searchCourse = (searchString) => {
    if (searchString) {
      const searchedCourses = courses
        .filter((course) => course.id.toLowerCase().includes(searchString.toLowerCase())
          || course.title.toLowerCase().includes(searchString.toLowerCase()));
      setfilteredCourses(searchedCourses);
    } else {
      setfilteredCourses([]);
    }
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
            component={() => (
              <LoginPage
                isAuth={isAuth}
                onFormSubmit={onFormSubmit}
              />
            )}
          />
          <Route
            path={ROUTE.REGISTRATION}
            component={() => <RegistrationPage />}
          />
          <Route
            path={ROUTE.COURSES}
            component={() => (
              <CoursesPage
                filteredCourses={filteredCourses.length ? filteredCourses : null}
                allAuthors={authors}
                searchCourse={searchCourse}
              />
            )}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
