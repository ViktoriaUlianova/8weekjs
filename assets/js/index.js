// function addErrorClass(elemId) {
//     let el = document.getElementById(elemId);
//     el.className = "error-input";
// }

// function addErrorClassToAllInputs() {
//     addErrorClass('first-name');
//     addErrorClass('last-name');
//     addErrorClass('adress');

// }

// setInterval(addErrorClassToAllInputs, 2000);


// fetch("https://api.github.com/ViktoriaUlianova").then(response => console.log(response))
//     .catch(error => console.log(error));

fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/Sweden/rub/en-GB/?query=Novosibirsk", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9943b8f7a3msh16e980abbb6fd11p1d1915jsn036ce0aa36f3",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });