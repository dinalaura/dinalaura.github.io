//var string = document.lastModified;
//document.getElementById("date").textContent = string;
/*
try{
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("date").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert ("Error with code or your browser does not support Locale");
}
*/

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
let fulldate = dayName + "," + d.getDate() + " " + monthName + " " + d.getFullYear();

document.getElementById("date").textContent = fulldate;
