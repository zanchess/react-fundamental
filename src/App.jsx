import React from 'react';
import './app.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import Searching from './components/Searching/Searching';
import CreatePage from './pages/CreatePage/CreatePage';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Header />
          <LoginPage />
        </div>
      </>
    );
  }
}

export default App;
