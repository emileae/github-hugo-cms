var redux = require('redux');
var {authTokenReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    token: authTokenReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
