export var setAuthToken = (token) => {

  return {
    type: 'SET_AUTH_TOKEN',
    token
  }

};

export var toggleDrawer = (drawer) => {

  return {
    type: 'TOGGLE_DRAWER',
    drawer: true
  }

};
