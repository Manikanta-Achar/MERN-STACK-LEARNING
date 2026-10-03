const APPID = "72d2492cfef8d1c8810fde047e8266a0";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

const searchValue = document.querySelector(".search-input input");
const img = document.querySelector(".search-input img");
const degree = document.querySelector(".degree p");
const humiText = document.querySelector(".humidity-text h2");
const windSpeed = document.querySelector(".wind-text h2");

img.addEventListener("click", async () => {
  const URL = `${BASE_URL}q=${searchValue.value}&appid=${APPID}&units=metric.json`;
  const respond = await fetch(URL);
  const data = await respond.json();
  const temp = Math.round(data["main"]["temp"] - 273.15);
  degree.innerText = `${temp}°C`;
  const city = degree.parentElement.querySelector("h1");
  city.innerText = searchValue.value.toUpperCase();

  const humidity = data["main"]["humidity"];
  humiText.innerText = `${humidity}%`;

  const wind = data["wind"]["speed"];
  windSpeed.innerText = `${wind} km/h`;
});
