"use strict";

// Dữ liệu mặc định cho users nếu không có trong localStorage
const defaultUsers = [];

// Lấy dữ liệu từ localStorage hoặc sử dụng dữ liệu mặc định
const users = getFromStorage("userArr") || defaultUsers;

// Chuyển đổi dữ liệu thành đối tượng User và lưu vào mảng userArr
const userArr = users.map((userData) => parseUser(userData));

// Lấy dữ liệu từ localStorage và chuyển đổi thành đối tượng User
let activeUser = getFromStorage("activeUser")
  ? parseUser(getFromStorage("activeUser"))
  : null;

// Dữ liệu mặc định cho todos nếu không có trong localStorage
const defaultTodos = [];

// Lấy dữ liệu từ localStorage hoặc sử dụng dữ liệu mặc định
const todos = getFromStorage("todoArr") || defaultTodos;

// Chuyển đổi dữ liệu thành đối tượng Task và lưu vào mảng todoArr
const todoArr = todos.map((taskData) => parseTask(taskData));

// Hàm lấy dữ liệu từ localStorage dựa trên key
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Hàm lưu dữ liệu vào localStorage dựa trên key
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Hàm chuyển đổi dữ liệu thành đối tượng User
function parseUser(userData) {
  return new User(
    userData.firstName,
    userData.lastName,
    userData.userName, // Dễ nhầm lẫn, phải là userName chứ không phải useName
    userData.password,
    userData.pageSize, // Có thể sai chính tả, nên kiểm tra lại
    userData.category
  );
}

// Hàm chuyển đổi dữ liệu thành đối tượng Task
function parseTask(taskData) {
  return new Task(taskData.task, taskData.owner, taskData.isDone);
}
