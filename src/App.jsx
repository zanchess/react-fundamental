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
    axios.get('http://localhost:3000/authors/all')
      .then((res) => {
        dispatch(setAuthors(res.data.result));
      });
    axios.get('http://localhost:3000/courses/all')
      .then((res) => {
        dispatch(setCourses(res.data.result));
      });
  }, []);

  const onFormSubmit = (email, password) => {
    const body = {
      email,
      password,
    };

    axios.post('http://localhost:3000/login', body)
      .then((response) => {
        localStorage.setItem('token', response.data.result);
        history.push(ROUTE.COURSES);
        dispatch(logIn({
          isAuth: true,
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.result,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
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
                courses={filteredCourses.length ? filteredCourses : courses}
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
