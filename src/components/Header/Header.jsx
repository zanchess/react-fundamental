import React from 'react';
import { Button } from 'react-bootstrap';
import './header.scss';

const Header = () => (
  <>
    <nav className="nav">
      <h1>React foundation</h1>
      <div className="nav__login">
        <span className="nav__login-name">Login</span>
        <Button className="nav__logout-btn" variant="link">Log out</Button>
      </div>
    </nav>
  </>
);

export default Header;
