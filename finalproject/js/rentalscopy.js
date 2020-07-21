
fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
console.table(jsonObject);
  const rentals = jsonObject['rentals'];

  rentals.forEach(rentals => {
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
  

    document.getElementById('rt1').appendChild(td1);
    document.getElementById('rt2').appendChild(td2);
    document.getElementById('rt3').appendChild(td3);
    document.getElementById('rt4').appendChild(td4);
    document.getElementById('rt5').appendChild(td5);
    document.getElementById('rt6').appendChild(td6);

    
  });
});