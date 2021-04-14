import React from 'react';
import './app.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import CoursesPage from './pages/CoursesPage/CoursesPage';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Header />
          <LoginPage />
          <CoursesPage />
        </div>
      </>
    );
  }
}

export default App;
