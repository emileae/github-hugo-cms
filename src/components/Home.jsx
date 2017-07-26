import React from 'react';

// get redux connect
var {connect} = require('react-redux');

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Login from './Login.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  toggleDrawer () {
    var {dispatch} = props;
    console.log("dispatch: ", dispatch);
    dispatch(actions.toggleDrawer(this.state.drawer));
  }

  render() {
    return (
      <div>
        <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer open={this.state.drawer}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      <Login/>
      </div>
    )
  }
}

export default connect()(Home);
