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

    h2.textContent = prophet.name + ' ' + prophet.lastname;
    p1.innerHTML = "<strong>" + prophet.birthdate + "</strong>";

    card.appendChild(h2);
    card.appendChild(p1);

    document.querySelector('div.cards').appendChild(card);
    
  });
});