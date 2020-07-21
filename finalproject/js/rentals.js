const requestURL = 'https://dinalaura.github.io/finalproject/data/rentals.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
//console.table(jsonObject);
  const rentals = jsonObject['rentals'];

  rentals.forEach(rentals => {
    let card = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');


    td1.innerHTML = `${rentals.rentaltype}`;
    td2.innerHTML = `${rentals.maxpersons}`;
    td3.innerHTML = `$${rentals.reservation[0]['halfday']}`;
    td4.innerHTML = `$${rentals.reservation[1]['fullday']}`;
    td5.innerHTML = `$${rentals.walkin[0]['halfday']}`;
    td6.innerHTML = `$${rentals.walkin[1]['fullday']}`;
  
    card.appendChild(td1);
    card.appendChild(td2);
    card.appendChild(td3);
    card.appendChild(td4);
    card.appendChild(td5);
    card.appendChild(td6);

    document.getElementById('tr1').appendChild(card);


    let heading = document.createElement('h3');
    let div2 = document.createElement('div');
    let image = document.createElement('img');

image.setAttribute('src', 'images/' + `${rentals.photo}`);
image.setAttribute('alt', `${rentals.photo}`);
heading.innerHTML = `${rentals.rentaltype}`;

div2.appendChild(heading);
div2.appendChild(image);

    document.getElementById('rentalsimages').appendChild(div2);



    
  });
});


