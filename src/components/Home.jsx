import React from 'react';
import { Route, Link } from 'react-router-dom';

// get redux connect
var {connect} = require('react-redux');
// var store = require('configureStore').configure();// call the redux store...
var actions = require('actions');

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Login from './Login.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  toggleDrawer (props, drawer) {
    var {dispatch} = this.props;
    var drawerState = drawer;
    console.log("drawerState....", drawerState);
    dispatch(actions.toggleDrawer(drawerState));
  }

  render() {
    var props = this.props;

    var handleToggleDrawer = () => {
      console.log("props: ", props);
      var drawer = props.drawer;
      this.toggleDrawer(props, drawer);
    }

    console.log("render props drawer: ", props.drawer);

    return (
      <div>
        <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={handleToggleDrawer}
        />
            <Drawer
              open={props.drawer}
              docked={false}
              onRequestChange={handleToggleDrawer}
            >
                  <MenuItem onClick={handleToggleDrawer}>
                    <Link to={`/login`}>Login</Link>
                  </MenuItem>
                  <MenuItem onClick={handleToggleDrawer}>
                    <Link to={`/`}>Home</Link>
                  </MenuItem>
            </Drawer>
        <Route path="/login" component={Login} />
      </div>
    )
  }
}

export default connect(state => state)(Home);
