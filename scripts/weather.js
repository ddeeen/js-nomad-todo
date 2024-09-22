const locTag = document.querySelector(".weather-box__location");
const weatherTag = document.querySelector(".weather-box__weather");
const temperTag = document.querySelector(".weather-box__temperature");

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiKey = "c85a36730f8feceac4404e9130242737";

  weather = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      locTag.innerText = json.name;
      weatherTag.innerText = `${json.main.temp}°C`;
      temperTag.innerText = json.weather[0].main;
    });
}

function error() {
  locTag.innerText = "-";
  weatherTag.innerText = "-";
  temperTag.innerText = "-";
}

if (!navigator.geolocation) {
  locTag.innerText = "-";
  weatherTag.innerText = "-";
  temperTag.innerText = "-";
} else {
  navigator.geolocation.getCurrentPosition(success, error);
}
