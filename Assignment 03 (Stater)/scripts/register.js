"use strict";

const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPassConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  // Lấy dữ liệu nhập vào từ form
  const user = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUserName.value,
    inputPassword.value
  );
  //   Gọi hàm validate để kiểm tra form hợp lệ
  const isvalidate = validate(user);

  if (isvalidate) {
    // Khởi tạo user mới với các dữ liệu hợp lệ
    userArr.push(user);
    // Thêm user vào mảng, lưu mảng vào localStorage
    saveToStorage("userArr", userArr);

    alert("Tài khoản đã được tạo");
    // Chuyển trang đến màn hình login
    window.location.assign("../pages/login.html");
  }
});

function validate(user) {
  // let isValidate = true;

  // // Kiểm tra các trường không được bỏ trống
  // if (inputFirstName.value.trim() === "") {
  //   alert("Vui lòng nhập First Name !");
  //   isValidate = false;
  // }

  // if (inputLastName.value.trim() === "") {
  //   alert("Vui lòng nhập Last Name !");
  //   isValidate = false;
  // }

  // if (inputUserName.value.trim() === "") {
  //   alert("Vui lòng nhập Username !");
  //   isValidate = false;
  // }

  // if (inputPassword.value === "") {
  //   alert("Vui lòng nhập Password !");
  //   isValidate = false;
  // }

  // if (inputPassConfirm.value === "") {
  //   alert("Vui lòng nhập Confirm Password !");
  //   isValidate = false;
  // }

  // // Kiểm tra username không trùng
  // if (userArr.some((item) => item.username === inputUserName.value)) {
  //   alert("Username đã tồn tại !");
  //   isValidate = false;
  // }

  // // Kiểm tra password và confirm password giống nhau
  // if (inputPassword.value !== inputPassConfirm.value) {
  //   alert("Password và Confirm Password không giống nhau !");
  //   isValidate = false;
  // }

  // // Kiểm tra password có ít nhất 8 ký tự
  // if (inputPassword.value.trim().length < 8) {
  //   alert("Password phải có ít nhất 8 ký tự !");
  //   isValidate = false;
  // }

  // return isValidate;

  // Kiểm tra xem các trường có bị bỏ trống không
  if (
    !user.firstName ||
    !user.lastName ||
    !user.userName ||
    !user.password ||
    !inputPassConfirm.value
  ) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return false;
  }

  // Kiểm tra xem Username đã tồn tại trong mảng userArr hay chưa
  const isDuplicateUsername = userArr.some(
    (existingUser) => existingUser.userName === user.userName
  );
  if (isDuplicateUsername) {
    alert("Username đã tồn tại. Vui lòng chọn một username khác.");
    return false;
  }

  // Kiểm tra xem Password và Confirm Password có giống nhau không
  if (user.password !== inputPassConfirm.value) {
    alert("Password và Confirm Password không khớp.");
    return false;
  }

  // Kiểm tra xem Password có ít nhất 8 ký tự không
  if (user.password.length < 8) {
    alert("Password phải có ít nhất 8 ký tự.");
    return false;
  }

  // Nếu tất cả các điều kiện đều đúng, trả về true
  return true;
}
