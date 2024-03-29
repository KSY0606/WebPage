const API_KEY = config.apikey;

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        if(`${data.weather[0].main}` === "Clouds") {
            weather.innerText = `☁️ / ${data.main.temp}°`
        }else if(`${data.weather[0].main}` === "Rain") {
            weather.innerText = `☔ / ${data.main.temp}°`
        }else if(`${data.weather[0].main}` === "Snow") {
            weather.innerText = `⛄ / ${data.main.temp}°`
        }else if(`${data.weather[0].main}` === "Thunderstorm") {
            weather.innerText = `⚡ / ${data.main.temp}°`
        }else {
            weather.innerText = `☀️ / ${data.main.temp}°`
        }
        console.log(lat, lon);
    });
}
function onGeoError() {
    alert("현재 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
