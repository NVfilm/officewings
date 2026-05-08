function searchCity(){

    const city =
    document.getElementById("cityInput").value.toLowerCase();

    if(city === "gurgaon"){
        alert("Showing coworking spaces in Gurgaon");
    }

    else if(city === "delhi"){
        alert("Showing coworking spaces in Delhi");
    }

    else if(city === "noida"){
        alert("Showing coworking spaces in Noida");
    }

    else if(city === "greater noida"){
        alert("Showing coworking spaces in Greater Noida");
    }

    else{
        alert("Location coming soon");
    }

}
