import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import './header.scss';

const Header = () => (
  <>
    <Navbar className="nav" expand="lg" variant="light" bg="dark">
      <Container>
        <h1>React foundation</h1>
        <div className="nav__login">
          <span className="nav__login-name">Login</span>
          <Button className="nav__logout-btn" variant="link">Log out</Button>
        </div>
      </Container>
    </Navbar>
  </>
);

export default Header;
