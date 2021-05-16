import React from 'react';
import { Button } from 'react-bootstrap';
import './header.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import ROUTE from '../../constants/routes';
import { logOut } from '../../store/user/actionCreators';

const Header = (props) => {
  const history = useHistory();
  console.log(props);

  const logoOutHandle = () => {
    console.log(props);
    props.logOut({
      isAuth: false,
      name: '',
      mail: '',
      token: '',
    });
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    history.push(`${ROUTE.LOGIN}`);
  };
  return (
    <>
      <nav className="nav">
        <h1>React foundation</h1>
        <div className={`nav__login ${props.user.isAuth ? 'show_log-out' : 'hide_log-out'}`}>
          <span className="nav__login-name ">Login</span>
          <Button onClick={logoOutHandle} className="nav__logout-btn" variant="link">Log out</Button>
        </div>
      </nav>
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: (emptyUser) => dispatch(logOut(emptyUser)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
