/*-----------------------Weather Summary------------------------------------------*/
const weatherSummary = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=195414e543ad58fb7aea951c77ee178a&units=imperial";
fetch(weatherSummary)
    .then((response) => response.json())
    .then((jsObject) => {


        const current = document.querySelector('#current-temp');
        const high = document.querySelector('#high');
        const humidity = document.querySelector('#humidity');
        const speed = document.querySelector('#speed');

        current.textContent = `${jsObject.weather[0].main}`;
        high.textContent = `${jsObject.main.temp} °F`;
        humidity.textContent = `${jsObject.main.humidity}%`;
        speed.textContent = `${jsObject.wind.speed} mph`;

    });