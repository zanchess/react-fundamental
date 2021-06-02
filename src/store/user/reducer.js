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
    default:
      break;
  }
  return state;
}

export default user;
