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

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');


    p1.innerHTML = `<strong><em>Upcoming Events:</em></strong>`;
    p2.innerHTML = `${town.events[0]}`;
    p3.innerHTML = `${town.events[1]}`;
    p4.innerHTML = `${town.events[2]}`;


    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);


    document.querySelector('div.events').appendChild(card);

    }
    
  });
});


