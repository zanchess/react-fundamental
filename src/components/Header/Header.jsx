import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './header.scss';

const Header = () => (
  <>
    <Navbar className="nav" expand="lg" variant="light" bg="dark">
      <Container>
        <h1>React foundation</h1>
      </Container>
    </Navbar>
  </>
);

export default Header;
