"use strict";

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const findBtn = document.getElementById("find-btn");
const tableBodyEl = document.getElementById("tbody");
const formEl = document.getElementById("container-form");

// mảng chứa thông tin tất cả thú cưng
renderTableData(petArr);

findBtn.addEventListener("click", function () {
  // tạo mản bản sao thỏa các điều kiện lọc
  let petArrFind = petArr;
  // lọc thông tin theo id nhập vào
  if (idInput.value) {
    petArrFind = petArrFind.filter((pet) => pet.id.includes(idInput.value));
  }

  //   lọc thông tin theo tên
  if (nameInput.value) {
    petArrFind = petArrFind.filter((pet) => pet.name.includes(nameInput.value));
  }

  // Lọc thông tin theo type
  if (typeInput.value !== "Select Type") {
    petArrFind = petArrFind.filter((pet) => pet.type === typeInput.value);
  }

  // lọc thông tin theo breed
  if (breedInput.value !== "Select Breed") {
    petArrFind = petArrFind.filter((pet) => pet.breed === breedInput.value);
  }

  //   lọc thông tin có tích chọn vaccinated hay không
  if (vaccinatedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.vaccinated === true);
  }
  //   lọc thông tin có tích chọn dewormed  hay không
  if (dewormedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.dewormed === true);
  }
  //   lọc thông tin có tích chọn sterilized hay không
  if (sterilizedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.sterilized === true);
  }
  renderTableData(petArrFind);
});

function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  petArr.forEach((pet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                      <th scope="row">${pet.id}</th>
                      <td>${pet.name}</td>
                      <td>${pet.age}</td>
                      <td>${pet.type}</td>
                      <td>${pet.weight}</td>
                      <td>${pet.length}</td>
                      <td>${pet.breed}</td>
                      <td>
                        <i class="bi bi-square-fill" style="color: ${
                          pet.color
                        }"></i>
                      </td>
                      <td><i class="bi ${
                        pet.vaccinated
                          ? "bi-check-circle-fill"
                          : "bi-x-circle-fill"
                      }"></i></td>
                      <td><i class="bi ${
                        pet.dewormed
                          ? "bi-check-circle-fill"
                          : "bi-x-circle-fill"
                      }"></i></td>
                      <td><i class="bi ${
                        pet.sterilized
                          ? "bi-check-circle-fill"
                          : "bi-x-circle-fill"
                      }"></i></td>
                      
                      <td>
                      ${displayTime(pet.date).slice(8, 10)}
                      /${displayTime(pet.date).slice(5, 7)}
                      /${displayTime(pet.date).slice(0, 4)}
                      </td>
                                 
      `;
    tableBodyEl.appendChild(row);
  });
}

// Hàm hiển thị thời gian
function displayTime(date) {
  if (typeof date === "string") {
    return date;
  } else if (typeof date === "object") {
    return JSON.parse(JSON.stringify(date));
  }
}

renderBreed();

function renderBreed() {
  breedArr.forEach(function (breedItem) {
    const option = document.createElement("option");
    option.innerHTML = `${breedItem.breed}`;
    breedInput.appendChild(option);
  });
}
