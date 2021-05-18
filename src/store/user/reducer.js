import { LOG_IN, LOG_OUT } from './actionTypes';

const initialState = {
  user: {
    isAuth: false,
    name: '',
    email: '',
    token: '',
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      console.log(action);
      return {
        user: {
          ...action.user,
        },
      };
    case LOG_OUT:
      console.log(LOG_OUT);
      return {
        user: {
          ...action.emptyUser,
        },
      };
    default:
      break;
  }
  return state;
}

export default userReducer;
