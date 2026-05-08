const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.toLowerCase().trim();

    if(city === "delhi"){
        document.getElementById("delhi")
        .scrollIntoView({ behavior: "smooth" });
    }

    else if(city === "gurgaon"){
        document.getElementById("gurgaon")
        .scrollIntoView({ behavior: "smooth" });
    }

    else if(city === "noida"){
        document.getElementById("noida")
        .scrollIntoView({ behavior: "smooth" });
    }

    else if(city === "greater noida"){
        document.getElementById("greaternoida")
        .scrollIntoView({ behavior: "smooth" });
    }

    else{
        alert("City not found");
    }

});
