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

const submitBtn = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");
const formEl = document.getElementById("container-form");

// mảng chứa thông tin tất cả thú cưng
renderTableData(petArr);
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
        
      
                    <td><button  type="button" style="background-color: #ffc107; color:#000;" class="btn btn-danger">Edit</button></td>
      `;
    tableBodyEl.appendChild(row);
  });
  editEvent();
}

// Hàm hiển thị thời gian
function displayTime(date) {
  if (typeof date === "string") {
    return date;
  } else if (typeof date === "object") {
    return JSON.parse(JSON.stringify(date));
  }
}

function editEvent() {
  const editElList = document.querySelectorAll(".btn.btn-danger");
  editElList.forEach((editEl) => {
    // sự kiện click vào nút edit
    editEl.addEventListener("click", function () {
      // lấy id của thú cưng được edit
      const id = editEl.parentElement.parentElement.children[0].innerHTML;
      // gọi gầm edit để edit
      editPet(id);
    });
  });
}

//////
// Hàm chỉnh sữa dữ liệu thông tin thú cưng
function editPet(id) {
  // hiện lại form nhập dữ liệu
  formEl.classList.remove("hide");
  // tìm đến dữ liệu của thú cưng cần edit
  const pet = petArr.find((petItem) => petItem.id === id);
  // hiển thị những thông tin của thú cưng lên form nhập
  idInput.value = pet.id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  weightInput.value = pet.weight;
  lengthInput.value = pet.length;
  colorInput.value = pet.color;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;
  // để hiển thị đúng các loại giống cho từng loại Dog - Cat khi người dùng
  renderBreed();
  // hiển thị dữ liệu loại giống thú cưng ( dữ liệu ban đầu trước khi edit)
  breedInput.value = `${pet.breed}`;
}

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
  };

  const validate = validateData(data);

  //nếu dữ liệu đã chuẩn mới được thêm vào mảng
  if (validate) {
    const index = petArr.findIndex((pet) => pet.id === data.id); // hiển thị dữ liệu đã nhập lên bảng
    data.date = petArr[index].date;

    petArr[index] = data;
    saveToStorage("petArr", petArr);

    formEl.classList.add("hide");
    renderTableData(petArr);
  }
});

// Validate dữ liệu hợp lệ
function validateData(data) {
  const name = data.name;
  const age = data.age;
  const weight = data.weight;
  const length = data.length;
  const type = data.type;
  const breed = data.breed;

  // Biến để kiểm tra dữ liệu có hợp lệ hay không
  let check = true;

  // validate data
  // kiểm tra có trường dữ liệu nào trống không

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

// "use strict";

// const submitBtn = document.getElementById("submit-btn");
// const idInput = document.getElementById("input-id");
// const nameInput = document.getElementById("input-name");
// const ageInput = document.getElementById("input-age");
// const typeInput = document.getElementById("input-type");
// const weightInput = document.getElementById("input-weight");
// const lengthInput = document.getElementById("input-length");
// const colorInput = document.getElementById("input-color-1");
// const breedInput = document.getElementById("input-breed");
// const vaccinatedInput = document.getElementById("input-vaccinated");
// const dewormedInput = document.getElementById("input-dewormed");
// const sterilizedInput = document.getElementById("input-sterilized");

// const tableBodyEl = document.getElementById("tbody");
// const formEl = document.getElementById("container-form");

// // mảng chứa thông tin tất cả thú cưng
// renderTableData(petArr);
// function renderTableData(petArr) {
//   tableBodyEl.innerHTML = "";
//   for (let i = 0; i < petArr.length; i++) {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//                     <th scope="row">${petArr[i].id}</th>
//                     <td>${petArr[i].name}</td>
//                     <td>${petArr[i].age}</td>
//                     <td>${petArr[i].type}</td>
//                     <td>${petArr[i].weight}</td>
//                     <td>${petArr[i].length}</td>
//                     <td>${petArr[i].breed}</td>
//                     <td>
//                       <i class="bi bi-square-fill" style="color: ${
//                         petArr[i].color
//                       }"></i>
//                     </td>
//                     <td><i class="bi ${
//                       petArr[i].vaccinated
//                         ? "bi-check-circle-fill"
//                         : "bi-x-circle-fill"
//                     }"></i></td>
//                     <td><i class="bi ${
//                       petArr[i].dewormed
//                         ? "bi-check-circle-fill"
//                         : "bi-x-circle-fill"
//                     }"></i></td>
//                     <td><i class="bi ${
//                       petArr[i].sterilized
//                         ? "bi-check-circle-fill"
//                         : "bi-x-circle-fill"
//                     }"></i></td>

//                     <td>
//                     ${displayTime(petArr[i].date).slice(8, 10)}
//                     /${displayTime(petArr[i].date).slice(5, 7)}
//                     /${displayTime(petArr[i].date).slice(0, 4)}
//                     </td>

//                     <td><button  type="button" style="background-color: #ffc107; color:#000;" class="btn btn-danger">Edit</button></td>
//       `;
//     tableBodyEl.appendChild(row);
//   }
//   editEvent();
// }

// function editEvent() {
//   const editElList = document.querySelectorAll(".btn.btn-danger");
//   editElList.forEach((editEl) => {
//     // sự kiện click vào nút edit
//     editEl.addEventListener("click", function () {
//       // lấy id của thú cưng được edit
//       const id = editEl.parentElement.parentElement.children[0].innerHTML;
//       // gọi gầm edit để edit
//       editPet(id);
//     });
//   });
// }

// //////
// // Hàm chỉnh sữa dữ liệu thông tin thú cưng
// function editPet(id) {
//   // hiện lại form nhập dữ liệu
//   formEl.classList.remove("hide");
//   // tìm đến dữ liệu của thú cưng cần edit
//   const pet = petArr.find((petItem) => petItem.id === id);
//   // hiển thị những thông tin của thú cưng lên form nhập
//   idInput.value = id;
//   nameInput.value = pet.name;
//   ageInput.value = pet.age;
//   typeInput.value = pet.type;
//   weightInput.value = pet.weight;
//   lengthInput.value = pet.length;
//   colorInput.value = pet.color;
//   vaccinatedInput.checked = pet.vaccinated;
//   dewormedInput.checked = pet.dewormed;
//   sterilizedInput.checked = pet.sterilized;
//   // để hiển thị đúng các loại giống cho từng loại Dog - Cat khi người dùng
//   renderBreed();
//   // hiển thị dữ liệu loại giống thú cưng ( dữ liệu ban đầu trước khi edit)
//   breedInput.value = `${pet.breed}`;
// }

// // Bắt sự kiện khi ăn chọn vàotypeInput để hiển thị loại giống theo đúng loại Dog Cat
// typeInput.addEventListener("click", renderBreed);
// // Hãm hiển thị các loại giống đúng với theo từng loại Dog - Cat
// function renderBreed() {
//   breedInput.innerHTML = "<option>Select Breed</option>";

//   const breedDogs = breedArr.filter((breedItem) => breedItem.type === "Dog");
//   const breedcats = breedArr.filter((breedItem) => breedItem.type === "Cat");

//   // Nếu type là Dog
//   if (typeInput.value === "Dog") {
//     breedDogs.forEach(function (breedItem) {
//       const option = document.createElement("option");
//       option.innerHTML = `${breedItem.breed}`;
//       breedInput.appendChild(option);
//     });
//     // Nếu type là Cat
//   } else if (typeInput.value === "Cat") {
//     breedcats.forEach(function (breedItem) {
//       const option = document.createElement("option");
//       option.innerHTML = `${breedItem.breed}`;
//       breedInput.appendChild(option);
//     });
//   }
// }

// // hàm sử lý chức năng nút submit
// submitBtn.addEventListener("click", function () {
//   //1. lấy dữ liệu nhập vào từ người dùng
//   const data = {
//     id: idInput.value,
//     name: nameInput.value,
//     type: typeInput.value,
//     age: parseInt(ageInput.value),
//     weight: parseInt(weightInput.value),
//     length: parseInt(lengthInput.value),
//     color: colorInput.value,
//     breed: breedInput.value,
//     vaccinated: vaccinatedInput.checked,
//     dewormed: dewormedInput.checked,
//     sterilized: sterilizedInput.checked,
//     date: new Date(),
//   };

//   const validate = validateData(data);

//   //nếu dữ liệu đã chuẩn mới được thêm vào mảng
//   if (validate) {
//     saveToStorage("petArr");
//     //xóa trống trường thông tin đã nhập
//     clearInput();
//     // hiển thị dữ liệu đã nhập lên bảng
//     renderTableData(petArr);
//     formEl.classList.add("hide");
//   }
// });

// // Hàm hiển thị thời gian
// function displayTime(date) {
//   if (typeof date === "string") {
//     return date;
//   } else if (typeof date === "object") {
//     return JSON.parse(JSON.stringify(date));
//   }
// }

// // Validate dữ liệu hợp lệ
// function validateData(data) {
//   const name = data.name;
//   const age = data.age;
//   const weight = data.weight;
//   const length = data.length;
//   const type = data.type;
//   const breed = data.breed;
//   let check = true;

//   // validate data
//   // kiểm tra có trường dữ liệu nào trống không
//   if (id.trim() === "") {
//     alert("Please input for ID");
//     check = false;
//   }

//   if (name.trim() === "") {
//     alert("Please input for Name");
//     check = false;
//   }

//   if (isNaN(age)) {
//     alert("Please input for Age");
//     check = false;
//   }

//   if (isNaN(weight)) {
//     alert("Please input for Weight");
//     check = false;
//   }

//   if (isNaN(length)) {
//     alert("Please input for Length");
//     check = false;
//   }

//   if (type === "Select Type") {
//     alert("Please select Type!");
//     check = false;
//   }
//   console.log(data);
//   // Kiểm tra trường Breed đã được chọn
//   if (breed === "Select Breed") {
//     alert("Please select Breed!");
//     check = false;
//   }

//   if (age < 1 || age > 15) {
//     alert("Age must be between 1 and 15");
//     check = false;
//   }

//   if (weight < 1 || weight > 15) {
//     alert("Weight must be between 1 and 15!");
//     check = false;
//   }

//   if (length < 1 || length > 100) {
//     alert("Length must be between 1 and 100!");
//     check = false;
//   }

//   return check;
// }
