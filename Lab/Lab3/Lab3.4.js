'use strict';
let language = prompt('Enter a language:');
let message;

switch (language) {
  case 'Chinese':
  case 'Mandarin':
    message = 'MOST number of native speakers!';
    break;
  case 'Spanish':
    message = '2nd place in number of native speakers';
    break;
  case 'English':
    message = '3rd place';
    break;
  case 'Hindi':
    message = 'Number 4';
    break;
  case 'Arabic':
    message = '5th most spoken language';
    break;
  default:
    message = 'Great language too :D';
}

console.log(message);