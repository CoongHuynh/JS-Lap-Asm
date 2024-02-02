"use strict";
"use strict";
// - Thêm được Animation khi click vào Sidebar.
const navel = document.getElementById("sidebar");
navel.addEventListener("click", function () {
  this.classList.toggle("active");
});

// Dữ liệu data cho sẳn mặc định để test mà không cần nhập lúc ban đầu

// Lấy dữ liệu userArr
if (!getFromStorage("userArr")) {
  // gần dữ liệu để test
  saveToStorage("userArr", [data0, data1, data2]);
}
const userArr = getFromStorage("userArr");
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
