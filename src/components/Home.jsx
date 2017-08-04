import React from 'react';

// get redux connect
var {connect} = require('react-redux');
var store = require('configureStore').configure();// call the redux store...
var actions = require('actions');

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Login from './Login.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.props = props;
  }

  toggleDrawer (props) {
    var {dispatch} = this.props;
    console.log("props....", props);
    console.log("dispatch....", dispatch);
    dispatch(actions.toggleDrawer(store.getState().drawer));
  }

  render() {
    var props = this.props;
    var handleToggleDrawer = () => {
      this.toggleDrawer(props)
    }

    return (
      <div>
        <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={handleToggleDrawer}
        />
        <Drawer open={store.getState().drawer}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        <Login/>
      </div>
    )
  }
}

export default connect()(Home);
