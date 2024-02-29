"use strict";
let Julia = [3, 5, 2, 12, 7];
let Kate = [4, 1, 15, 8, 3];
let Julia2 = [9, 16, 6, 8, 3];
let Kate2 = [10, 5, 6, 1, 4];

function checkDogs(dogJulia, dogKate) {
  // cách 1
  // dogJulia.map(function (pre) {
  //   return pre;
  // });
  // dogJulia.pop();
  // dogJulia.shift();

  // cách 2
  const arrJulia = dogJulia.slice(1, dogJulia.length - 1);

  console.log(arrJulia);
  console.log(dogKate);
  const dogAge = [...arrJulia, ...dogKate];
  console.log(dogAge);

  dogAge.forEach(function (ele, index) {
    ele >= 3
      ? console.log(`Dog number ${index} is an adult, and is ${ele} years old`)
      : console.log(`Dog number ${index} is still a puppy`);
  });
}
checkDogs(Julia, Kate);
console.log(Julia);
console.log(Kate);
