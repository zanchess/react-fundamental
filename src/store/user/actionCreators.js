import { LOG_IN, LOG_OUT } from './actionTypes';

function logIn() {
  return {
    type: LOG_IN,
  };
}

function logOut() {
  return {
    type: LOG_OUT,
  };
}

export default {
  logIn,
  logOut,
};
