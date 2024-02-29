'use strict';


let populations = [10, 1441, 332, 83];
let percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log('Percentages 2:', percentages2);