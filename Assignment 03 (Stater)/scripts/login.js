"use strict";

const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  const isValidate = validate();
  if (isValidate) {
    const user = userArr.find(
      (item) =>
        item.userName === inputUserName.value &&
        item.password === inputPassword.value
    );

    if (user) {
      alert("Đăng nhập thành công !");
      saveToStorage("activeUser", user);
      window.location.assign("../index.html");
    } else alert("Thông tin đăng nhập không đúng !");
  }
});

function validate() {
  if (inputUserName.value === "" || inputPassword.value === "") {
    alert("Vui lòng nhập đầy đủ thông tin !");
    return false;
  }
  return true;
}
