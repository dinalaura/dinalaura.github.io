const requestURL = 'https://dinalaura.github.io/finalproject/data/rentals.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
console.table(jsonObject);
  const rentals = jsonObject['rentals'];

  rentals.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let image = document.createElement('img');



    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    p2.innerHTML = `Place of Birth: ${prophet.birthplace}`;
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);


    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(image);


    document.querySelector('div.cards').appendChild(card);
    
  });
});