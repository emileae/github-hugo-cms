import React from 'react';
import { Route, Link } from 'react-router-dom';

// get redux connect
var {connect} = require('react-redux');
var actions = require('actions');

// extras
import firebase from './../firebase';
import githubProvider from './../firebase';
import axios from 'axios';
var base64 = require('base-64');/// need base64 to decode github repo data

// supplementary components
import Post from './Post.jsx';

class PostList extends React.Component {

  constructor(props) {
    super(props);
  }

  fetchContent (props) {
    var {token, dispatch} = props;
    axios
    .get(`https://api.github.com/repos/emileae/hugo-sample-site/contents/content/post?access_token=${token}`)
    .then(function(response) {
      console.log(response);
      dispatch(actions.setContentList('post', response.data));
      // var decodedData = base64.decode(response.data.content);
      // console.log(response.data.content);
      // console.log(decodedData);
      console.log(response.statusCode) // 200
    })
  }

  // call this to get the data to populate the page
  componentWillMount(){
    this.fetchContent(this.props);
    console.log("props: ", this.props);
  }

  render() {

    var posts = this.props.post;// list of post titles and github info

    var renderPosts = () => {
      if (posts.length === 0){
        return (
          <p className="container__message">
            No posts.
          </p>
        )
      }
      return posts.map((post, idx) => {
        return (
          <li key={`list-${idx}`}>
            <Link key={`link-${idx}`} to={`/post/${idx}`}>
              {post.name}
            </Link>
            </li>
        );
      })
    };

    return (
      <div>
        <p>Post List</p>
        <ul>
          {renderPosts()}
        </ul>
      </div>
    )
  }
}

export default connect(state => state)(PostList);
