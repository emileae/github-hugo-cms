import _ from 'lodash';
import './style.scss';
import dragonBallImage from './dragonball.gif';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myImg = new Image();
  myImg.src = dragonBallImage;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
