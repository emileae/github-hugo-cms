export var authTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return action.token;
    default:
      return state;
  }
};

export var toggleDrawerReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      console.log('drawer in reducer......',action.drawer);
      return action.drawer;
    default:
      return state;
  }
}
