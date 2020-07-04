const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
  const towns = jsonObject['towns'];

  towns.forEach(town => {
    if (town.name == "Preston"){

    let card = document.createElement('div');

    let pt = document.createElement('p');
    let p0 = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');


    pt.innerHTML = `<strong><em>Upcoming Events:</em></strong>`;
    p0.innerHTML = `${town.events[0]}`;
    p1.innerHTML = `${town.events[1]}`;
    p2.innerHTML = `${town.events[2]}`;


    card.appendChild(pt);
    card.appendChild(p0);
    card.appendChild(p1);
    card.appendChild(p2);


    document.querySelector('div.events').appendChild(card);

    }
    
  });
});


