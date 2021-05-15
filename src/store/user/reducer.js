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
  console.log(action);
  switch (action.type) {
    case LOG_IN:
      return {
        ...action.user,
      };
    case LOG_OUT:
      console.log(LOG_OUT);
      return {
        ...action.emptyUser,
      };
    default:
      break;
  }
  return state;
}

export default user;
