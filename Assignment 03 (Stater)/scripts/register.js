"use strict";

const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPassConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  // Lấy dữ liệu nhập vào từ form
  const user = new user(
    inputFirstName.value,
    inputLastName.value,
    inputPassword.value,
    inputUserName.value
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

function validate(data) {}
