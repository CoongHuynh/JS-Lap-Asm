'use strict';
/*
1. Sử dụng object từ bài tập trước, in string sau ra console: 'Finland has 6 million finnish-speaking people, 
    3 neighbouring countries and a capital called Helsinki.'
2. Tăng dân số của đất nước thêm hai triệu người bằng cách sử dụng dấu chấm (object.population), 
và sau đó giảm đi hai triệu người bằng dấu ngoặc (object['population']) để truy cập vào các thuộc tính. */

let myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'Finnish',
    population: 6000000,
    neighbours: ['Sweden', 'Norway', 'Russia'],
  };


console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language} 
  --speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called 
  ${myCountry.capotal}`);


myCountry.population += 2000000;
console.log(" updated population", myCountry.population);

myCountry[population] -= 2000000;
console.log(" updated population", myCountry['population']);