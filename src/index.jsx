import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();// call the redux store...

store.subscribe(()=> {
  console.log("new state: ", store.getState());
});

// store.dispatch(actions.setAuthToken('asdfghgfdsfdgfhggf'));

// material-ui
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login.jsx';

const title = 'My Minimal React Webpack Babel Setup';

const App = () => (
  <MuiThemeProvider>
    <Login />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
