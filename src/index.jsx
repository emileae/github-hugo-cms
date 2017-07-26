import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
import { HashRouter } from 'react-router-dom';// use HashRouter since this is a static site, browserrouter is for server rendered sites

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
import Home from './components/Home.jsx';

const title = 'My Minimal React Webpack Babel Setup';

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
