var redux = require('redux');
var {authTokenReducer, toggleDrawerReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    token: authTokenReducer,
    drawer: toggleDrawerReducer
  });

  // TODO: fix these dev tools
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


  return store;

};
