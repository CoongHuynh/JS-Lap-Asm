'use strict';


let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
  if (listOfNeighbours[i].length >= 2) {
    for (let j = 1; j < listOfNeighbours[i].length; j++) {
      console.log(listOfNeighbours[i][j]);
    }
  }
}