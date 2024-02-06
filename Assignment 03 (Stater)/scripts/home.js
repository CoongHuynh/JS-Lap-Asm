"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();

function displayHome() {
  if (activeUser) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";

    welcomMessage.textContent = `Welcom ${activeUser.firstName}`;
  } else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}

btnLogout.addEventListener("click", function () {
  const isLogout = confirm("Bạn có chắc muốn đăng xuất không ?");
  if (isLogout) {
    activeUser = null;
    saveToStorage("activeUser", activeUser);
    displayHome();
  }
});
