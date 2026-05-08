console.log("OfficeWings Loaded");
function searchCity() {

    let city = document.getElementById("cityInput").value.toLowerCase();

    if(city === "delhi"){
        window.location.href = "#delhi";
    }

    else if(city === "mumbai"){
        window.location.href = "#mumbai";
    }

    else if(city === "bangalore"){
        window.location.href = "#bangalore";
    }

    else if(city === "gurgaon"){
        window.location.href = "#gurgaon";
    }

    else{
        alert("City not found");
    }

}
