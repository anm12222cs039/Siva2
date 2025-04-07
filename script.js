const apiKey = "d92fcc34c4b01f6c3c4cbd9705969e10";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404) {
        document.querySelector(".weather").style.display = "none";
        alert("Invalid city name");
        return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414927.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4151/4151022.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
