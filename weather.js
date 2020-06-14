const weather = document.querySelector(".date");
const API_KEY = "c718f3fb58db9d0100a0b9ed85bbd0c1";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  localStorage.setItem("coords", JSON.stringify(coordsObj));
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("errer");
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function checkLocalStorage() {
  const coords = localStorage.getItem("coords");
  if (coords === null) {
    getCoords();
  } else {
    const parseCoords = JSON.parse(coords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  checkLocalStorage();
}
init();
