import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCA2Wm1Bw7BqfFbX8BEPrwxC6FMpdOrrU4",
    authDomain: "node-shell-test.firebaseapp.com",
    databaseURL: "https://node-shell-test.firebaseio.com",
    projectId: "node-shell-test",
    storageBucket: "node-shell-test.appspot.com",
    messagingSenderId: "1080499590127"
  };
  firebase.initializeApp(config);
} catch (e) {

};

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
