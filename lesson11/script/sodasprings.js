/*-----------------------Weather Summary------------------------------------------*/
const weatherSummary = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=195414e543ad58fb7aea951c77ee178a&units=imperial";
fetch(weatherSummary)
    .then((response) => response.json())
    .then((jsObject) => {


        const condition = document.querySelector('#condition');
        const temp = document.querySelector('#temp');
        const high = document.querySelector('#high');
        const humidity = document.querySelector('#humidity');
        const speed = document.querySelector('#speed');

        condition.textContent = `${jsObject.weather[0].main}`;
        temp.textContent = `${jsObject.main.temp} °F`;
        high.textContent = `${jsObject.main.temp_max} °F`;
        humidity.textContent = `${jsObject.main.humidity}%`;
        speed.textContent = `${jsObject.wind.speed} mph`;

    });


    /*-----------------------Forecast------------------------------------------*/

const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=195414e543ad58fb7aea951c77ee178a&units=imperial";

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

    /*-----------------------Events------------------------------------------*/


    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
  const towns = jsonObject['towns'];

  towns.forEach(town => {
    if (town.name == "Soda Springs"){

    let card = document.createElement('div');

    let pt = document.createElement('p');
    let p0 = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');


    pt.innerHTML = `<strong><em>Upcoming Events:</em></strong>`;
    p0.innerHTML = `${towns[5].events[0]}`;
    p1.innerHTML = `${towns[5].events[1]}`;
    p2.innerHTML = `${towns[5].events[2]}`;


    card.appendChild(pt);
    card.appendChild(p0);
    card.appendChild(p1);
    card.appendChild(p2);


    document.querySelector('div.events').appendChild(card);

    }
    
  });
});


