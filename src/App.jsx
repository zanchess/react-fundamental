import React, { useEffect, useState } from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import ROUTE from './constants/routes';
import LoginPage from './pages/Login/LoginPage';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { logIn, logOut } from './store/user/actionCreators';
import { getCourses } from './store/courses/actionCreators';
import { getAuthors } from './store/authors/actionCreators';

const App = (props) => {
  console.log(props);
  // state hooks
  const [allAuthors, setAllAuthors] = useState([]);
  const [coursesPageIsHidden, setCoursesPageStatus] = useState(false);
  const [filteredCourses, setfilteredCourses] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const history = useHistory();

  // Lifecycle hooks
  useEffect(() => {
    axios.get('http://localhost:3000/authors/all')
      .then((res) => {
        props.getAuthors(res.data.result);
      });
    axios.get('http://localhost:3000/courses/all')
      .then((res) => {
        props.getCourses(res.data.result);
      });
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
        console.log(response);
        setIsAuth(true);
        localStorage.setItem('token', response.data.result);
        history.push(`${ROUTE.COURSES}`);
        props.logIn({
          isAuth: true,
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.result,
        });
      })
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
            {props.isAuth || localStorage.getItem('token') ? (
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
            component={() => <RegistrationPage registerSubmit={registerSubmit} />}
          />
          <Route
            path={ROUTE.COURSES}
            component={() => (
              <CoursesPage
                courses={filteredCourses.length ? filteredCourses : props.courses}
                allAuthors={props.authors}
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

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user,
    courses: state.courses.courses,
    authors: state.authors.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: (user) => dispatch(logIn(user)),
    getCourses: (courses) => dispatch(getCourses(courses)),
    getAuthors: (authors) => dispatch(getAuthors(authors)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
