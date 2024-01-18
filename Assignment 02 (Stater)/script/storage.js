"use strict";
// - Thêm được Animation khi click vào Sidebar.
const navel = document.getElementById("sidebar");
navel.addEventListener("click", function () {
  this.classList.toggle("active");
});

// Dữ liệu data cho sẳn mặc định để test mà không cần nhập lúc ban đầu
const data0 = {
  id: "P000",
  name: "Tom",
  age: 3,
  type: "Dog",
  weight: 5,
  length: 50,
  color: "#33d13e",
  breed: "Pug",
  vaccinated: true,
  dewormed: false,
  sterilized: true,
  date: new Date("2023-04-17"),
};
const data1 = {
  id: "P001",
  name: "Tom",
  age: 3,
  type: "Cat",
  weight: 5,
  length: 50,
  color: "#c33232",
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date("2024-01-01"),
};
const data2 = {
  id: "P002",
  name: "Tyke",
  age: 5,
  type: "Dog",
  weight: 3,
  length: 40,
  color: "#285f9a",
  breed: "Mixed Breed",
  vaccinated: false,
  dewormed: false,
  sterilized: false,
  date: new Date("2024-01-24"),
};

// dữ liệu breed cho sản để dể test chức năng khói cần nhập lúc ban đầu
const breed1 = {
  breed: "Mixed Breed",
  type: "Dog",
};
const breed2 = {
  breed: "Tabby",
  type: "Cat",
};
const breed3 = {
  breed: "chó Phú Quốc",
  type: "Dog",
};
const breed4 = {
  breed: "Mèo mướp",
  type: "Cat",
};
const breed5 = {
  breed: "Pug",
  type: "Dog",
};
const breed6 = {
  breed: "Murn Kin",
  type: "Cat",
};

// Lấy dữ liệu petArr
if (!getFromStorage("petArr")) {
  // gần dữ liệu để test
  saveToStorage("petArr", [data0, data1, data2]);
}
const petArr = getFromStorage("petArr");
// lấy dữ liệu breedArr
if (!getFromStorage("breedArr")) {
  // gần dữ liệu để test
  saveToStorage("breedArr", [breed1, breed2, breed3, breed4, breed5, breed6]);
}
const breedArr = getFromStorage("breedArr");
// Hàm lấy dữ liệu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// Hàm lưu dữ liệu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
