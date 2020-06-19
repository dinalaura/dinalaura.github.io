const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
//  console.table(jsonObject);
  const prophets = jsonObject['prophets'];

  prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let image = document.createElement('img');



    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    p2.innerHTML = `Place of Birth: ${prophet.birthplace}`;
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', prophet.name);


    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(image);


    document.querySelector('div.cards').appendChild(card);
    
  });
});