//                  Lab 12.3
/////////////////////////////////////////////////////

"use strict";
let dogAge1 = [5, 2, 4, 1, 15, 8, 3];
let dogAge2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(age) {
  const humanAge =
    age
      .map((hmAge) => (hmAge > 2 ? 16 + hmAge * 4 : age * 2))
      .filter((hmAge) => hmAge > 18)
      .reduce((total, cur) => total + cur) /
    age
      .map((hmAge) => (hmAge > 2 ? 16 + hmAge * 4 : age * 2))
      .filter((hmAge) => hmAge > 18).length;

  console.log(humanAge);
}
calcAverageHumanAge(dogAge1);
calcAverageHumanAge(dogAge2);
