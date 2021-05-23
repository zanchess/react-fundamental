import React from 'react';
import { Button } from 'react-bootstrap';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ROUTE from '../../constants/routes';
import { logOut } from '../../store/user/actionCreators';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userReducer);

  const logoOutHandle = () => {
    dispatch(logOut({
      isAuth: false,
      name: '',
      mail: '',
      role: '',
      token: '',
    }));
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    history.push(`${ROUTE.LOGIN}`);
  };
  return (
    <>
      <nav className="nav">
        <h1>React foundation</h1>
        <div className={`nav__login ${localStorage.getItem('token') || isAuth ? 'show_log-out' : 'hide_log-out'}`}>
          <span className="nav__login-name ">Login</span>
          <Button onClick={logoOutHandle} className="nav__logout-btn" variant="link">Log out</Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
