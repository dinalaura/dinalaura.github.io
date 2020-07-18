const requestURL = 'https://dinalaura.github.io/finalproject/data/rentals.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
console.table(jsonObject);
  const rentals = jsonObject['rentals'];

  rentals.forEach(rentals => {
    let card = document.createElement('section');
    let p0 = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let image = document.createElement('img');



    p0.textContent = `${rentals.rentaltype} ${rentals.maxpersons}`;
    p1.innerHTML = `${rentals.rentaltype}`;
    p2.innerHTML = `${rentals.rentaltype}`;
    image.setAttribute('src', rentals.imageurl);
    image.setAttribute('alt', `${rentals.rentaltype}`);


    card.appendChild(p0);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(image);


    document.querySelector('div.cards').appendChild(card);
    
  });
});