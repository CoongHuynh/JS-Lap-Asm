'use strict';
let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

// let dolphinsScores = [97, 112, 101];
// let koalasScores = [109, 95, 106];

let dolphinsAverage = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
let koalasAverage = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win the trophy!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win the trophy!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy.");
}
