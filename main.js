"use strict";


// #coffeeArray
var coffees;
if (localStorage.getItem('locallyStoredCoffee') === null) {
    coffees = [

        {id: 1, name: 'Light City', roast: 'Light'},
        {id: 2, name: 'Half City', roast: 'Light'},
        {id: 3, name: 'Cinnamon', roast: 'Light'},
        {id: 4, name: 'City', roast: 'Medium'},
        {id: 5, name: 'American', roast: 'Medium'},
        {id: 6, name: 'Breakfast', roast: 'Medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'Dark'},
        {id: 9, name: 'New Orleans', roast: 'Dark'},
        {id: 10, name: 'European', roast: 'Dark'},
        {id: 11, name: 'Espresso', roast: 'Dark'},
        {id: 12, name: 'Viennese', roast: 'Dark'},
        {id: 13, name: 'Italian', roast: 'Dark'},
        {id: 14, name: 'French', roast: 'Dark'}
    ];
} else {
    coffees = JSON.parse(localStorage.getItem('locallyStoredCoffee'))
}
localStorage.setItem("locallyStoredCoffee", JSON.stringify(coffees));

//this generates cards for each bean and stores as html
function renderCoffee(coffee) {
    var html = '<div class="coffee-card card d-flex align-items-center border-0 m-2">';
    html += '<div class="card-body m-3 w-100 d-flex justify-content-center "><img src="img/bean.png" height="50px" alt="">' + '</div>';
    html += '<span>' + coffee.name + '</span>';
    html += '<span>' + coffee.roast + '</span>';
    html += '</div>';
    return html;
}

// this section of functions
// goes through the array of objects(new or old)
// of bean cards and stores it as html, which is displayed in id "coffees"

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
} 

// this function keeps the submitNewCoffee button from actually submitting anything, merely reloading JS

//creates a new coffee
function addCoffee(){
    var newCoffeeObject = {};
    newCoffeeObject.name = newCoffeeName.value;
    newCoffeeObject.roast = newCoffeeRoast.value;
    newCoffeeObject.id = coffees.length + 1;
    coffees.push(newCoffeeObject);
    localStorage.setItem("locallyStoredCoffee", JSON.stringify(coffees));
    tbody.innerHTML = renderCoffees(coffees);
    return selectionOrder.innerHTML = renderCoffee(coffees);
}

var newCoffeeName = document.querySelector('#madCoffee');
var newCoffeeRoast = document.querySelector('#newCoffeeSelection');

// this triggers the new object event upon clicking submit

document.getElementById("submitNewCoffee").addEventListener("click", addCoffee);

// this is the functionality of the first submit button
function updateCoffees(e) {
    // this updates javascript without submitting form
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// this is the sort function for finding the right coffee
function chooseCoffee() {
    var html = "";
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(document.getElementById("inputCoffee").value.toLowerCase())) {
            console.log(coffees.name);
            html = html + renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;
    }
}

//this allows for sorting upon keystroke
document.getElementById("inputCoffee").addEventListener("keyup", chooseCoffee);

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var selectionOrder = document.querySelector(("coffee-order"));
addCoffee = document.querySelector('#newCoffeeSelection');
tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
// roastSelection.addEventListener('change', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
addCoffee.addEventListener('click',  updateCoffees);
