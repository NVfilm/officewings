function searchCity(){

const city =
document.getElementById("cityInput").value.toLowerCase();

if(city === "gurgaon"){
window.location.href =
"https://www.google.com/search?q=gurgaon+coworking+space";
}

else if(city === "delhi"){
window.location.href =
"https://www.google.com/search?q=delhi+coworking+space";
}

else if(city === "noida"){
window.location.href =
"https://www.google.com/search?q=noida+coworking+space";
}

else if(city === "greater noida"){
window.location.href =
"https://www.google.com/search?q=greater+noida+coworking+space";
}

else{
alert("Available Cities: Gurgaon, Delhi, Noida, Greater Noida");
}

}
