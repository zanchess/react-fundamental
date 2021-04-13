import React from 'react';
import './app.scss';
import LoginPage from './pages/LoginPage/LoginPage';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <LoginPage />
        </div>
      </>
    );
  }
}

export default App;
