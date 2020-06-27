/*-----------------------Forecast------------------------------------------*/

const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=195414e543ad58fb7aea951c77ee178a&units=imperial";

fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.table(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        //console.log(fivedayforecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day + 1}`).textContent = `${forecast.main.temp} °F`;
            document.getElementById(`dayofweek${day + 1}`).textContent = weekdays[d.getDay()];
            const imagesrc = 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description;
            document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
            day++;
        });
    });

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

/*-------------------------Windchill------------------------------------------*/

        function output() {
            let tempF = parseFloat(document.getElementById("high").textContent);
            let speed = parseFloat(document.getElementById("speed").textContent);
        
            let output = windChill(tempF, speed);
        
            document.getElementById("windchill").textContent = output;
        }
        
        function windChill(tempF, speed) {
            if (tempF <= 50 && speed >= 3) {
                let t = tempF;
                let s = speed;
                let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        
                return f.toFixed(2);
        
            }
            else {
        
                let na = "N/A";
                return na;
            }
        }
        
        output()
        
        