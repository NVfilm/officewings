function searchCity() {

    let city = document.getElementById("cityInput").value.toLowerCase();

    if(city === "gurgaon"){
        window.location.href = "#gurgaon";
    }

    else if(city === "delhi"){
        window.location.href = "#delhi";
    }

    else if(city === "noida"){
        window.location.href = "#noida";
    }

    else if(city === "greater noida"){
        window.location.href = "#greaternoida";
    }

    else{
        alert("Location not found");
    }

}
