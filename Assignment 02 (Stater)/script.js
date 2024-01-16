"use strict";

const submitBtn = document.getElementById("submit-btn");
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

const tableBodyEl = document.getElementById("tbody");
const healthyBtn = document.getElementById("healthy-btn");
const bmiBtn = document.getElementById("bmi-btn");

// tạo biến tạm cho hàm healthyCheck
let healthyCheck = true;

// mảng chứa thông tin tất cả thú cưng
renderTableData(petArr);

// Bắt sự kiện khi ăn chọn vàotypeInput để hiển thị loại giống theo đúng loại Dog Cat
typeInput.addEventListener("click", renderBreed);
// Hãm hiển thị các loại giống đúng với theo từng loại Dog - Cat
function renderBreed() {
  breedInput.innerHTML = "<option>Select Breed</option>";

  const breedDogs = breedArr.filter((breedItem) => breedItem.type === "Dog");
  const breedcats = breedArr.filter((breedItem) => breedItem.type === "Cat");

  // Nếu type là Dog
  if (typeInput.value === "Dog") {
    breedDogs.forEach(function (breedItem) {
      const option = document.createElement("option");
      option.innerHTML = `${breedItem.breed}`;
      breedInput.appendChild(option);
    });
    // Nếu type là Cat
  } else if (typeInput.value === "Cat") {
    breedcats.forEach(function (breedItem) {
      const option = document.createElement("option");
      option.innerHTML = `${breedItem.breed}`;
      breedInput.appendChild(option);
    });
  }
}

// hàm sử lý chức năng nút submit
submitBtn.addEventListener("click", function () {
  //1. lấy dữ liệu nhập vào từ người dùng
  const data = {
    id: idInput.value,
    name: nameInput.value,
    type: typeInput.value,
    age: parseInt(ageInput.value),
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date(),
  };

  const validate = validateData(data);

  //nếu dữ liệu đã chuẩn mới được thêm vào mảng
  if (validate) {
    petArr.push(data);
    saveToStorage("petArr", petArr);
    //xóa trống trường thông tin đã nhập
    clearInput();
    // hiển thị dữ liệu đã nhập lên bảng
    renderTableData(petArr);
  }
});

// hàm xóa trống thông tin về ban đầu
function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  typeInput.value = "Select Type";
  breedInput.value = "Select Breed";
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
  vaccinatedInput.checked = false;
}

// hàm xóa thông tin 1 thú cưng khỏi bảng
const deletePet = (petId) => {
  // Confirm before deletePet
  if (confirm("Are you sure?")) {
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].id === petId)
        //xóa hàng
        petArr.splice(i, 1);
      saveToStorage("petArr", petArr);
      renderTableData(petArr);
    }
  }
};

// kiểm tra xem thú cưng đã được tiêm đầy đủ chưa
healthyBtn.addEventListener("click", function () {
  if (healthyCheck === true) {
    // Hiển thị thú cưng khỏe mạnh
    const healthyPetArr = [];
    // lọc ra mảng các thú cưng khỏe mạnh
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized)
        healthyPetArr.push(petArr[i]);
    }

    //sau khi lọc thì gọi hàm renderTableData để hiển thị thú cưng
    renderTableData(healthyPetArr);

    // Thay đổi thành nút "Show all pet"
    healthyBtn.textContent = "Show All Pet";
    //cập nhập lại biến tạm
    healthyCheck = false;
  } else {
    // hiển thị lại tất cả các thú cưng
    renderTableData(petArr);

    // Thay đổi thành nút "Show all pet"
    healthyBtn.textContent = "Show Healthy Pet";
    // cập nhập lại biến tạm
    healthyCheck = true;
  }
});

function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
                  <th scope="row">${petArr[i].id}</th>
                  <td>${petArr[i].name}</td>
                  <td>${petArr[i].age}</td>
                  <td>${petArr[i].type}</td>
                  <td>${petArr[i].weight}</td>
                  <td>${petArr[i].length}</td>
                  <td>${petArr[i].breed}</td>
                  <td>
                    <i class="bi bi-square-fill" style="color: ${
                      petArr[i].color
                    }"></i>
                  </td>
                  <td><i class="bi ${
                    petArr[i].vaccinated
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i></td>
                  <td><i class="bi ${
                    petArr[i].dewormed
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i></td>
                  <td><i class="bi ${
                    petArr[i].sterilized
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i></td>
                  
                  <td>
                  ${displayTime(petArr[i].date).slice(8, 10)}
                  /${displayTime(petArr[i].date).slice(5, 7)}
                  /${displayTime(petArr[i].date).slice(0, 4)}
                  </td>
    
                  <td>
                  <button class="btn btn-danger" onclick="deletePet('${
                    petArr[i].id
                  }')">Delete</button>
                   </td>
    `;
    tableBodyEl.appendChild(row);
  }
}

// Hàm hiển thị thời gian
function displayTime(date) {
  if (typeof date === "string") {
    return date;
  } else if (typeof date === "object") {
    return JSON.parse(JSON.stringify(date));
  }
}
//Kiểm tra trùng ID
function isUniqueID(id) {
  for (let i = 0; i < petArr.length; i++)
    if (petArr[i].id === id) {
      return true;
    }
  return false;
}

// Validate dữ liệu hợp lệ
function validateData(data) {
  const id = data.id;
  const name = data.name;
  const age = data.age;
  const weight = data.weight;
  const length = data.length;
  const type = data.type;
  const breed = data.breed;
  let check = true;

  // validate data
  // kiểm tra có trường dữ liệu nào trống không
  if (id.trim() === "") {
    alert("Please input for ID");
    check = false;
  }

  if (name.trim() === "") {
    alert("Please input for Name");
    check = false;
  }

  if (isNaN(age)) {
    alert("Please input for Age");
    check = false;
  }

  if (isNaN(weight)) {
    alert("Please input for Weight");
    check = false;
  }

  if (isNaN(length)) {
    alert("Please input for Length");
    check = false;
  }

  // if (color) {
  //   alert("Please input for màu Color");
  //   check = false;
  // }

  if (type === "Select Type") {
    alert("Please select Type!");
    check = false;
  }
  console.log(data);
  // Kiểm tra trường Breed đã được chọn
  if (breed === "Select Breed") {
    alert("Please select Breed!");
    check = false;
  }
  if (isUniqueID(id)) {
    alert("ID must be unique!");
    check = false;
  }

  if (age < 1 || age > 15) {
    alert("Age must be between 1 and 15");
    check = false;
  }

  if (weight < 1 || weight > 15) {
    alert("Weight must be between 1 and 15!");
    check = false;
  }

  if (length < 1 || length > 100) {
    alert("Length must be between 1 and 100!");
    check = false;
  }

  return check;
}
