const apiKey = "7f593f46b4c4c74d480e6d3102095673";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(cityName) {
  const response = await fetch(apiURL + `&q=${cityName}&appid=${apiKey}`);

  // Display error on invalid city names
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }

  let data = await response.json();
  console.log(data);

  // Changing the City Name
  document.querySelector(".city").innerHTML = data.name;
  // Temp
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  // Wind Speed
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  // Humidity
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  // Change weather icons
  let weatherCondition = data.weather[0].main.toLowerCase();
  if (weatherCondition == "clear")
    document.querySelector(".weather-icon").src = "images/clear.png";
  else if (weatherCondition == "clouds")
    document.querySelector(".weather-icon").src = "images/clouds.png";
  else if (weatherCondition == "drizzle")
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  else if (weatherCondition == "mist")
    document.querySelector(".weather-icon").src = "images/mist.png";
  else if (weatherCondition == "rain")
    document.querySelector(".weather-icon").src = "images/rain.png";
  else if (weatherCondition == "snow")
    document.querySelector(".weather-icon").src = "images/snow.png";
}

document.querySelector(".search button").addEventListener("click", () => {
  let cityName = document.querySelector(".search input").value;
  if (cityName === "") alert("Enter City Name");
  else checkWeather(cityName);
});
document.querySelector(".search input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let cityName = document.querySelector(".search input").value;
    if (cityName === "") alert("Enter City Name");
    else checkWeather(cityName);
  }
});
