const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const city = document
        .getElementById("cityInput")
        .value
        .trim()
        .toLowerCase();

    if(city === "delhi"){

        window.open(
            "https://www.google.com/search?q=best+coworking+spaces+in+delhi",
            "_blank"
        );

    }

    else if(city === "gurgaon"){

        window.open(
            "https://www.google.com/search?q=best+coworking+spaces+in+gurgaon",
            "_blank"
        );

    }

    else if(city === "noida"){

        window.open(
            "https://www.google.com/search?q=best+coworking+spaces+in+noida",
            "_blank"
        );

    }

    else if(city === "greater noida"){

        window.open(
            "https://www.google.com/search?q=best+coworking+spaces+in+greater+noida",
            "_blank"
        );

    }

    else{

        alert("Please enter: Delhi, Gurgaon, Noida or Greater Noida");

    }

});
