"use strict";



function renderCoffee(coffee) {
    var html = '<div class="coffee-card card d-flex align-items-center border-0 m-2">';
    html += '<div class="card-body m-3 w-100 d-flex justify-content-center "><img src="img/bean.png" height="50px" alt="">' + '</div>';
    html += '<span>' + coffee.name + '</span>';
    html += '<span>' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High',
        roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'}
];
// var coffeeInput =

function chooseCoffee(){
    var html = "";
    for(var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(inputCoffee.value.toLowerCase())) {
            console.log(coffees.name);
            html = html + renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;

    }

}


document.getElementById("inputCoffee").addEventListener("keyup", chooseCoffee);

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

/*
function renderCoffee(coffee) {
    var html = '<div class="card">';
    if (coffee.roast === "Light") {
        html += '<div class= "Light">' +
            '<img src="img/bean.png" height="50px" alt="">'+ coffee.name + '</div>';
    }else if (coffee.roast === "medium"){
        html += '<div class= "Medium">' +
            '<img src="img/bean.png" height="50px" alt="">'+ coffee.name + '</div>';
    }else {
        html += '<div class = "Dark">' +
            '<img src="img/bean.png" height="50px" alt="">' + '</div>' +
            coffee.name + '</div>';
    }
    // html += '<span class ="roast-type">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}




function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];


function chooseCoffee(){
    var theCoffee = coffeeSearch.value;
    var theRoast = roastSelection.value;
    var coffeeArr = [];
    coffees.forEach(function(coffee){
       if ((coffee.name.toLowerCase()).includes(theCoffee.toLowerCase()
       === true && coffee.roast === theRoast) || (theRoast === "Show All" && (coffee.name.toLowerCase()).includes(theCoffee.toLowerCase())
       === true)) {
           coffeeArr.push(coffee);
       }
    });
    main.innerHTML = renderCoffee(coffeeArr);
}




document.getElementById("inputCoffee").addEventListener("keyup", chooseCoffee);




var main = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

main.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', renderCoffees);*/

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
