"use strict";
// - Thêm được Animation khi click vào Sidebar.
const navel = document.getElementById("sidebar");
navel.addEventListener("click", function () {
  this.classList.toggle("active");
});
// Dữ liệu data cho sẳn mặc định để test mà không cần nhập lúc ban đầu
const data1 = {
  id: "P001",
  name: "Tom",
  age: 3,
  type: "cat",
  weight: 5,
  length: 50,
  color: "#000",
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date(),
};
const data2 = {
  id: "P002",
  name: "Tyke",
  age: 5,
  type: "Dog",
  weight: 3,
  length: 40,
  color: "#000",
  breed: "Mixed Breed",
  vaccinated: false,
  dewormed: false,
  sterilized: false,
  date: new Date(),
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

// Lấy dữ liệu petArr
if (!getFromStorage("petArr")) {
  // gần dữ liệu để test
  saveToStorage("petArr", [data1, data2]);
}
const petArr = getFromStorage("petArr");
// lấy dữ liệu breedArr
if (!getFromStorage("breedArr")) {
  // gán dữ liệu để test
  saveToStorage("breedArr", [breed1, breed2, breed3, breed4]);
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
