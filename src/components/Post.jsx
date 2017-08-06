import React from 'react';
import { Link } from 'react-router-dom';

// get redux connect
var {connect} = require('react-redux');
// var store = require('configureStore').configure();// call the redux store...
var actions = require('actions');

import githubProvider from './../firebase';
import axios from 'axios';


class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  fetchContent (props) {

    var posts = props.post;// list of post titles and github info
    var {postIndex} = props.match.params
    var {token, dispatch} = props;

    axios
    .get(`${posts[postIndex].download_url}?access_token=${token}`)
    .then(function(response) {
      console.log("........ got markdown content???");
      console.log(response);
      // dispatch(actions.setContentList('post', response.data));
      // var decodedData = base64.decode(response.data.content);
      // console.log(response.data.content);
      // console.log(decodedData);
      console.log(response.statusCode) // 200
    });


  }

  // call this to get the data to populate the page
  componentWillMount(){
    this.fetchContent(this.props);
  }

  render() {

    return (
      <div>
        <p>hello post page...</p>
      </div>
    )
  }
}

export default connect(state => state)(Post);
