'use strict';
let language = prompt('Enter a language:');
let population = prompt('Enter the population:');
let isIsland = prompt('Is it an island? Yes or No');

if (language === 'English' && population < 50000000 && isIsland === 'No') {
  console.log("You should live in Portugal :)");
} else {
  console.log("Portugal does not meet your criteria :(");
}