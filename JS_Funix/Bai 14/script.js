// "use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person("Jonas", 1991);
// console.log(jonas);

// //1. New {} is created
// //2. funtion is called, this = {}
// //3. {} linked to prototype / Liên kết đối tượng rỗng với nguyên mẫu
// //4. funtion automatically return {}

// const matilda = new Person("Matilda", 1993);
// const jack = new Person("Jack", 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// //Prototype

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// // jonas matilda  là nguyên mẫu của đối tượng được liên kết
// // person không phải là nguyên mẫu của Person
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // const PersonCL = class {};

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // thuộc tính calcAge sẽ được thêm vào thuộc tính nguyên mẫu 'prototype' của class PersonCL
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // greet(){
//   //   console.log(`Hey ${this.firstName}`);
//   // }
// }

// const jessica = new PersonCl("Jessica", 1996);
// console.log(jessica);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// //1. Các class không nên sử dụng trước khi được khai báo
// //2. Các class cũng là các first-class
// //3. các class được thực thi ở chế độ nghiêm ngặt 'strict mode'

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;

  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");

mike.introduce();
