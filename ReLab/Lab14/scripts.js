"use strict";
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const form = document.querySelector(".top-banner form");
const apiKey = "d253c4b61e00b8b50238af3c98f73a71";
const input = document.querySelector("input");

const renderWeather = function (data) {
  const { main, name, sys, weather } = data;
  const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
  const html = `
      <li class="city">
      <div class="container">  
        <h3 class="city-name">${data.name}  <sup>${
    data.sys.country
  }</sup></h3>    
        <p class="city-temp"> ${data.main.temp.toFixed(0)} <sup >°C</sup> </p>
        <img  class="city-icon" src="${icon}" alt="Weather Icon">
        <figcaption>${data.weather[0].description}</figcaption>
      </div>
    </li>    
    `;
  list.insertAdjacentHTML("beforeend", html);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  //  let inputVal = "HaNoi";

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderWeather(data);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});
