import { LOG_IN, LOG_OUT } from './actionTypes';

const initialState = {
  user: {
    isAuth: false,
    name: '',
    email: '',
    token: '',
  },
};

function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      console.log(action);
      return {
        user: {
          ...action.user,
        },
      };
    default:
      break;
  }
  return state;
}

export default user;
