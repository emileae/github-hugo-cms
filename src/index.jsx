import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
import { HashRouter as Router } from 'react-router-dom';

var actions = require('actions');
var store = require('configureStore').configure();// call the redux store...

store.subscribe(()=> {
  console.log("new state: ", store.getState());
});

// material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// components
import Home from './components/Home.jsx';

const title = 'My Minimal React Webpack Babel Setup';

// const MyApp = () => (
//   <MuiThemeProvider>
//     <Home />
//   </MuiThemeProvider>
// );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
);
