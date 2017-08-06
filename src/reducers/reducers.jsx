import {contents} from './../settings/ContentSettings.js';// describes the structure of the content... may be different for different hugo projects

// create the default contents state
var defaultContents = {};
for (var i=0; i<contents.length; i++){
  defaultContents[contents[i]] = [];
};
console.log("defaultContents: ", defaultContents);

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
      return action.drawer;
    default:
      return state;
  }
};

// export var setContentListReducer = (state = defaultContents, action) => {
export var setContentListReducer = (state = [], action) => {
  console.log("----set content list reducer: ", action);
  switch (action.type) {
    case 'SET_CONTENT_LIST':
      // var newContentState = {content: {
      //   post: action[action.key]
      // }};
      // // newContentState["content"][action.key] = action[action.key];// these keys are based on settings/ContentSettings.js
      // console.log("new content state: ", newContentState);
      // return newContentState;

      // return Object.assign({}, state, {
      //   post: action[action.key]
      // });

      return action.post

    default:
      return state;
  }
};
