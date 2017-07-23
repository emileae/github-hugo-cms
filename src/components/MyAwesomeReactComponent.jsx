import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

// get redux connect
var {connect} = require('react-redux');


var actions = require('actions');

import firebase from './../firebase';
import githubProvider from './../firebase';
import axios from 'axios';
var base64 = require('base-64');/// check what to import

var githubToken = '';

const githubLogin = () => {
  var githubProvider = new firebase.auth.GithubAuthProvider();
  githubProvider.addScope('repo');
  firebase.auth().signInWithPopup(githubProvider).then(function(result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
    console.log("signed in with token... ", token);
    var {dispatch} = this.props;
    console.log("dispatch: ", dispatch);
    dispatch(actions.setAuthToken(token));
    githubToken = token;// TODO: fix this using redux store
    // The signed-in user info.
    var user = result.user;
    console.log("user... ", user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("errorMessage", errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

// TODO
// need to sort out a dynamic structure so that user can easily get a list of posts/pages/social links etc... to easily edit

const testGithubAPI = () => {
  axios
  .get('https://api.github.com/repos/emileae/hugo-sample-site/contents/content')
  .then(function(response) {
    console.log(response);
    var decodedData = base64.decode(response.data.content);
    console.log(response.data.content);
    console.log(decodedData);
    console.log(response.statusCode) // 200
  })
}

const testGithubPutAPI = () => {

  console.log("token: ", githubToken);

  ///repos/:owner/:repo/contents/:path
  var input = {
    "message": "test put via API",
    "content": base64.encode("Hello github API")
  }
  axios
  .put(`https://api.github.com/repos/emileae/hugo-sample-site/contents/content/post/api_post_2.md?access_token=${githubToken}`, input)
  .then(function(response) {
    console.log(response);
    var decodedData = base64.decode(response.data.content);
    console.log(response.data.content);
    console.log(decodedData);
    console.log(response.statusCode) // 200
  })
}

const MyAwesomeReactComponent = () => (
  <div>
    <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <RaisedButton label="Github Login" onClick={githubLogin} />
    <br></br>
    <RaisedButton label="Test Github API" onClick={testGithubAPI} />
    <br></br>
    <RaisedButton label="Test PUT Github API" onClick={testGithubPutAPI} />
  </div>
);

export default connect()(MyAwesomeReactComponent);
