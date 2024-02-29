"use strict";
// sử lí animation cho thanh sidebar
const navel = document.getElementById("sidebar");
navel.addEventListener("click", function () {
  this.classList.toggle("active");
});

// khởi tạo dữ liệu thú cưng mẫu
const data0 = {
  id: "P000",
  name: "Tom",
  age: 3,
  type: "Dog",
  weight: 5,
  length: 19,
  color: "#33d13e",
  breed: "Pug",
  vaccinated: true,
  dewormed: false,
  sterilized: true,
  date: new Date("2023-04-07"),
};
const data1 = {
  id: "P001",
  name: "Tyka",
  age: 4,
  type: "Cat",
  weight: 6,
  length: 12,
  color: "#c33232",
  breed: "Tabby",
  vaccinated: true,
  dewormed: false,
  sterilized: true,
  date: new Date("2023-02-07"),
};
const data2 = {
  id: "P002",
  name: "Titi",
  age: 2,
  type: "Dog",
  weight: 3,
  length: 8,
  color: "#285f9a",
  breed: "Mixed Breed",
  vaccinated: true,
  dewormed: false,
  sterilized: true,
  date: new Date("2023-04-07"),
};

// khởi tạo dữ liệu breed sẵn có
const breed1 = {
  breed: "Mixed Breed",
  type: "Dog",
};

const breed2 = {
  breed: "Tabby",
  type: "Cat",
};
const breed3 = {
  breed: "Phú quốc",
  type: "Dog",
};
const breed4 = {
  breed: "Pug",
  type: "Dog",
};
const breed5 = {
  breed: "Murn Kin",
  type: "Cat",
};
const breed6 = {
  breed: "Mèo Mướp",
  type: "Dog",
};

// kiểm tra nếu như mảng petArr rỗng thì thêm dữ liệu data1, data2
if (!getFromStorage("petArr")) {
  saveToStorage("petArr", [data0, data1, data2]);
}

// khai báo và gán petArr cho mảng petArr ở localStorage
const petArr = getFromStorage("petArr");

// kiểm tra nếu như mảng breedArr rỗng thì thêm dữ liệu vào
if (!getFromStorage("breedArr")) {
  saveToStorage("breedArr", [breed1, breed2, breed3, breed4, breed5, breed6]);
}

// khai báo breedArr và gán dữ liệu từ dưới localStorage
const breedArr = getFromStorage("breedArr");

/** hàm nhận vào một biến và lấy dữ liệu từ localStorage gán vào biến đó */
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
/**Hàm nhận vào hai biến key, value. Sẽ thêm dữ liệu value vào biến key 
 mã hóa rồi lưu xuống localStorage
 */
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
