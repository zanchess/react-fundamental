import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import ROUTE from '../../constants/routes';

const PrivatRouter = ({ path, children }) => {
  const { role } = useSelector((state) => state.userReducer.user);

  return (
    role === 'admin'
      ? <Route path={path}>{children}</Route>
      : <Redirect to={ROUTE.COURSES} />
  );
};

export default PrivatRouter;
