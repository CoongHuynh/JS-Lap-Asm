//                  Lab 12.2
/////////////////////////////////////////////////////

"use strict";
let dogAge1 = [5, 2, 4, 1, 15, 8, 3];
let dogAge2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(age) {
  // cách 1
  // let humanAge =[];
  // age.forEach(function (age, index) {
  //   age > 2 ? (humanAge[index] = 16 + age * 4) : (humanAge[index] = age * 2);
  // });

  // cách 2
  const humanAge = age.map(function (ages, index) {
    return ages > 2 ? 16 + ages * 4 : age * 2;
  });
  let filterAge = humanAge.filter(function (hmAge) {
    return hmAge > 18;
  });
  // console.log(filterAge);
  let result =
    filterAge.reduce(function (total, cur) {
      return total + cur;
    }) / filterAge.length;

  console.log(result);
}
calcAverageHumanAge(dogAge1);
calcAverageHumanAge(dogAge2);
