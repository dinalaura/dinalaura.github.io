/*Active*/

var header = document.getElementById("lista");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*end of Active*/

/*date*/

let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + d.getFullYear();

document.getElementById("date").textContent = fulldate;
/*End of date*/

/*banner pancakes*/

const banner = document.getElementById('banner');
if (d.getDay() == 5) {
  banner.style.display = 'block';
}
else {
  banner.style.display = 'none';
}
/*End of banner pancakes*/

/*responsive*/

const button = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

button.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

/*End of reponsive*/
