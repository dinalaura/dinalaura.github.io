const requestURL = 'https://dinalaura.github.io/finalproject/data/rentals.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
//console.table(jsonObject);
  const rentals = jsonObject['rentals'];

  rentals.forEach(rentals => {
    let card = document.createElement('section');
    let p0 = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let image = document.createElement('img');



    p0.innerHTML = `${rentals.rentaltype}`;
    p1.innerHTML = `${rentals.maxpersons}`;
    p2.innerHTML = `${rentals.reservation[0]['halfday']}`;
    p3.innerHTML = `${rentals.reservation[1]['fullday']}`;
    p4.innerHTML = `${rentals.walkin[0]['halfday']}`;
    p5.innerHTML = `${rentals.walkin[1]['fullday']}`;
    image.setAttribute('src', rentals.imageurl);
    image.setAttribute('alt', `${rentals.rentaltype}`);


    card.appendChild(p0);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(image);


    document.querySelector('div.rentals').appendChild(card);
    
  });
});