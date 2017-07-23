export var authTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return action.token;
    default:
      return state;
  }
}
