export var setAuthToken = (token) => {

  return {
    type: 'SET_AUTH_TOKEN',
    token
  }

};

export var toggleDrawer = (drawer) => {
  return {
    type: 'TOGGLE_DRAWER',
    drawer: !drawer
  }
};

export var setContentList = (contentKey, content) => {
  console.log("dispatched action: setContentList - - - - -");
  var actionObject = {
    type: 'SET_CONTENT_LIST',
    key: contentKey
  }
  actionObject[contentKey] = content;
  console.log("actionObject: ", actionObject);
  return actionObject;
}
