const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
  const towns = jsonObject['towns'];

  towns.forEach(town => {
    if (town.name == "Fish Haven"){

    let card = document.createElement('div');

    let pt = document.createElement('p');
    let p0 = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');



    pt.innerHTML = `<strong><em>Upcoming Events:</em></strong>`;
    p0.innerHTML = `${towns[1].events[0]}`;
    p1.innerHTML = `${towns[1].events[1]}`;
    p2.innerHTML = `${towns[1].events[2]}`;
    p3.innerHTML = `${towns[1].events[3]}`;



    card.appendChild(pt);
    card.appendChild(p0);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);



    document.querySelector('div.events').appendChild(card);

    }
    
  });
});


