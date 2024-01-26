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

const petArr = [
  {
    id: "P000",
    name: "Tom",
    age: "3",
    type: "Cat",
    weight: "5",
    length: "50",
    color: "gray",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    date: new date("2023-12-1"),
  },
  {
    id: "P002",
    name: "Tyke",
    age: "5",
    type: "Dog",
    weight: 3,
    length: 40,
    color: "yellow",
    breed: "Mixed Breed",
    vaccinated: false,
    dewormed: false,
    sterilized: true,
    date: new Date("2022-02-03"),
    bmi: "?",
  },
  {
    id: "P003",
    name: "Tuke",
    age: "6",
    type: "Cat",
    weight: 3.5,
    length: 20,
    color: "green",
    breed: "Greyhound",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    date: new Date("2022-02-28"),
    bmi: "?",
  },
  {
    id: "P004",
    name: "Tyke",
    age: "5",
    type: "Dog",
    weight: 3,
    length: 40,
    color: "yellow",
    breed: "Mixed Breed",
    vaccinated: false,
    dewormed: false,
    sterilized: true,
    date: new Date("2022-02-03"),
    bmi: "?",
  },
  {
    id: "P006",
    name: "Tuke",
    age: "6",
    type: "Cat",
    weight: 3.5,
    length: 20,
    color: "green",
    breed: "Greyhound",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    date: new Date("2022-02-28"),
    bmi: "?",
  },
];

submitBtn.addEventListener("click", clickSubmitBtn());

const clickSubmitBtn = function () {
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
    date: new date(),
  };

  const validate = validateData(data);

  if (validate) {
    petArr.push(data);
    clearInput();
    renderTableData(petArr);
  }
};

function validateData(petData) {}
