import React from 'react';

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
            <MenuItem onClick={handleToggleDrawer}>Menu Item</MenuItem>
            <MenuItem onClick={handleToggleDrawer}>Menu Item 2</MenuItem>
          </Drawer>
        <Login/>
      </div>
    )
  }
}

export default connect(state => state)(Home);
