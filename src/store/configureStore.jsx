var redux = require('redux');
var {authTokenReducer, toggleDrawerReducer, setContentListReducer} = require('reducers');
import {contents} from './../settings/ContentSettings.js';// describes the structure of the content... may be different for different hugo projects

export var configure = () => {
  var combineReducerObject = {
    token: authTokenReducer,
    drawer: toggleDrawerReducer,
    post: setContentListReducer
  }

  // for (var i=0; i<contents.length; i++){
  //   // combineReducerObject[contents[i]] = setContentListReducer[contents[i]];
  //   setContentListReducer[contents[i]] === undefined ? combineReducerObject[contents[i]] = [] : combineReducerObject[contents[i]] = combineReducerObject[contents[i]];
  // };
  // console.log("combineReducerObject: ", combineReducerObject);

  // the setContentListReducer is dynamic, it may set a number of different state keys, like 'posts' or 'pages'... some content list
  // combineReducerObject[setContentListReducer['key']] = setContentListReducer[setContentListReducer['key']];


  var reducer = redux.combineReducers(combineReducerObject);

  // TODO: fix these dev tools
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


  return store;

};
