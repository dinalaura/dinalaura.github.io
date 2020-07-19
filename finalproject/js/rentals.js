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
    let pt = document.createElement('p');
    let pr = document.createElement('p');
    let pw = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let image = document.createElement('img');


    pt.innerHTML = `<strong>${rentals.rentaltype}</strong>`;
    p1.innerHTML = `Max. Persons: ${rentals.maxpersons}`;
    pr.innerHTML = `<em>Reservation</em>`;
    p2.innerHTML = `Half Day (3 hrs): ${rentals.reservation[0]['halfday']}`;
    p3.innerHTML = `Full Day: ${rentals.reservation[1]['fullday']}`;
    pw.innerHTML = `<em>Walk-In</em>`;
    p4.innerHTML = `Half Day (3 hrs): ${rentals.walkin[0]['halfday']}`;
    p5.innerHTML = `Full Day: ${rentals.walkin[1]['fullday']}`;
    image.setAttribute('src', 'images/' + rentals.photo);
    image.setAttribute('alt', `${rentals.rentaltype}`);

    card.appendChild(pt);
    card.appendChild(p1);
    card.appendChild(pr);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(pw);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(image);


    document.querySelector('div.rentals').appendChild(card);
    
  });
});