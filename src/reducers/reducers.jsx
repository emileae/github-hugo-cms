export var authTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return action.token;
    default:
      return state;
  }
};

export var toggleDrawerReducer = (state = false, action) => {
  console.log("reducer - state: ", state);
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return action.drawer;
    default:
      return state;
  }
}
