//var string = document.lastModified;
//document.getElementById("date").textContent = string;

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
