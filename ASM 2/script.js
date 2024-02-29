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
const healthyBtn = document.getElementById("healthy-btn");
const tBodyEl = document.getElementById("tbody");

// const petArr = [
//   {
//     id: "P000",
//     name: "Tom",
//     age: 2,
//     type: "Cat",
//     weight: 4,
//     length: 9,
//     color: "gray",
//     vaccinated: true,
//     dewormed: true,
//     sterilized: true,
//     date: new Date("2023-10-10"),
//   },
//   {
//     id: "P002",
//     name: "Tyke",
//     age: 4,
//     type: "Dog",
//     weight: 3,
//     length: 10,
//     color: "yellow",
//     breed: "Mixed Breed",
//     vaccinated: false,
//     dewormed: false,
//     sterilized: true,
//     date: new Date("2022-02-03"),
//     bmi: "?",
//   },
//   {
//     id: "P003",
//     name: "Tuke",
//     age: 2,
//     type: "Cat",
//     weight: 3.5,
//     length: 11,
//     color: "green",
//     breed: "Greyhound",
//     vaccinated: true,
//     dewormed: true,
//     sterilized: true,
//     date: new Date("2022-02-28"),
//     bmi: "?",
//   },
//   {
//     id: "P004",
//     name: "Tyke",
//     age: 5,
//     type: "Dog",
//     weight: 3,
//     length: 14,
//     color: "yellow",
//     breed: "Mixed Breed",
//     vaccinated: false,
//     dewormed: false,
//     sterilized: true,
//     date: new Date("2022-02-03"),
//     bmi: "?",
//   },
//   {
//     id: "P006",
//     name: "Tuke",
//     age: 4,
//     type: "Cat",
//     weight: 3.5,
//     length: 12,
//     color: "green",
//     breed: "Greyhound",
//     vaccinated: true,
//     dewormed: true,
//     sterilized: true,
//     date: new Date("2022-02-28"),
//     bmi: "?",
//   },
// ];

renderTableData(petArr);
submitBtn.addEventListener("click", clickSubmitBtn());

function clickSubmitBtn() {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: ageInput.value,
    type: parseInt(typeInput.value),
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.value,
    dewormed: dewormedInput.value,
    sterilized: sterilizedInput.value,
    date: new Date(),
  };

  const validate = validateData(data);

  if (validate) {
    petArr.push(data);
    clearInput();
    renderTableData(petArr);
  }
}
function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "";
  typeInput.value = "";
  breedInput.value = "";
  dewormedInput.value = "";
  sterilizedInput.value = "";
  vaccinatedInput.value = "";
}
function renderTableData(petArr) {
  tBodyEl.innerHTML = "";

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
        
                      <td>
                      <button class="btn btn-danger" onclick="deletePet('${
                        pet.id
                      }')">Delete</button>
                       </td>
        `;
    tBodyEl.appendChild(row);
  });
}

function displayTime(date) {
  if (typeof date === "string") {
    return date;
  } else if (typeof date === "object") {
    return JSON.parse(JSON.stringify(date));
  }
}

function validateData(petData) {
  let check = true;
  // kiểm tra;
  if (isUniqueId(petData.id)) {
    alert("Please input for ID");
    check = false;
  }

  if (petData.name.trim() === "") {
    alert("Please input for Name");
    check = false;
  }
  if (isNaN(petData.age)) {
    alert("Please input for Age");
    check = false;
  }
  if (isNaN(petData.weight)) {
    alert("Please input for Weight");
    check = false;
  }
  if (isNaN(length)) {
    alert("Please input for Length");
    check = false;
  }
  if (petData.type === "Select Type") {
    alert("Please input for Type");
    check = false;
  }
  if (petData.breed === "Select Breed") {
    alert("Please input for Breed");
    check = false;
  }
  if (petData.age < 1 || petData.age > 15) {
    alert("Age must be between 1 and 15");
    check = false;
  }

  if (petData.weight < 1 || petData.weight > 15) {
    alert("Weight must be between 1 and 15");
    check = false;
  }

  if (petData.length < 1 || petData.length > 15) {
    alert("Age must be between 1 and 15");
    check = false;
  }

  return check;
}

function isUniqueId(id) {
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].id === id) return true;
    else return false;
  }
}
