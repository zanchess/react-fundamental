import axios from 'axios';
import { LOG_IN, LOG_OUT } from './actionTypes';

export const logIn = (body) => (dispatch) => {
  axios.post('http://localhost:3000/login', body)
    .then((response) => {
      const token = response.data.result;
      localStorage.setItem('token', token);

      axios.get('http://localhost:3000/users/me', {
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: LOG_IN,
            user: {
              isAuth: true,
              name: res.data.result.name,
              email: res.data.result.email,
              role: res.data.result.role,
              id: res.data.result.id,
              token,
            },
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const authorizedLogIn = () => (dispatch) => {
  const token = localStorage.getItem('token');

  axios.get('http://localhost:3000/users/me', {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res.data.result.name);
      dispatch({
        type: LOG_IN,
        user: {
          isAuth: true,
          name: res.data.result.name,
          email: res.data.result.email,
          role: res.data.result.role,
          id: res.data.result.id,
          token,
        },
      });
    });
};

export function logOut(emptyUser) {
  return {
    type: LOG_OUT,
    emptyUser,
  };
}
