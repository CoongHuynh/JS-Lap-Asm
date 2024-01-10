'use strict';
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsScore1 = calcAverage(44, 23, 71);
const koalasScore1 = calcAverage(65, 54, 49);

const dolphinsScore2 = calcAverage(85, 54, 41);
const koalasScore2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins.");
  }
}

checkWinner(dolphinsScore1, koalasScore1);
checkWinner(dolphinsScore2, koalasScore2);