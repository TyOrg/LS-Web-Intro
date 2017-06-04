// Change the background color of the entire document to red
document.body.style.backgroundColor = "red";

// Change the background color of just the "about me" portion to blue
document.body.querySelector("h1").style.backgroundColor = "blue";

// Change the font-family of the entire document to sans-serif
document.body.style.fontFamily = "sans-serif";

// Add your nickname
document.getElementById("nickname").innerHTML = "Irma";

// Add your favorites
document.getElementById("favorites").innerHTML = "Filming, coding";

// Add your hometown
document.getElementById("hometown").innerHTML = "Miami, FL";

// Create a new img element and set its src attribute to a picture of you. 
var img = document.createElement("img");
img.src = "https://preview.ibb.co/bzccDF/Full_Size_Render_3.jpg";
document.body.appendChild(img);
