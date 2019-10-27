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

function renderCoffeeSelect(coffee) {
    var html = "<option value=\"" + coffee.name + "\">";
    html += "" + coffee.name;
    html += "</option>";

    return html;
}

function renderCoffeesForSelect(coffees) {
    var html = '';
    coffees.forEach(function (coffee) {
        html += renderCoffeeSelect(coffee);
    });

    return html;
}


// this function keeps the submitNewCoffee button from actually submitting anything, merely reloading JS

var noSubmit = function (e) {
    e.preventDefault();

};

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

//this creates a new object based on user input
//function createNewCoffeeObject() {
    //var newCoffeeObject = {};
    //newCoffeeObject.name = newCoffeeName.value;
    //newCoffeeObject.roast = newCoffeeRoast.value;
    // newCoffeeObject.id = coffees.length + 1;
    //return selectionOrder.innerHTML = renderCoffees(coffees)
    // newCoffeeObject.name = document.getElementById("addCoffee").value;
    // newCoffeeObject.roast = document.getElementById('newCoffeeSelection').value;
    // return newCoffeeObject;
//}
var newCoffeeName = document.querySelector('#addCoffee');
var newCoffeeRoast = document.querySelector('#newCoffeeSelection');

// this triggers the new object event upon clicking submit
document.getElementById("addCoffee").value;
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
var addCoffee = document.querySelector('#newCoffeeSelection');
tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
// roastSelection.addEventListener('change', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
addCoffee.addEventListener('click',  updateCoffees);





//this is me trying to make the new beans pop up but FAILING
// function renderNewObject(createNewCoffeeObject) {
//     var html = '<div class="coffee-card card d-flex align-items-center border-0 m-2">';
//     html += '<div class="card-body m-3 w-100 d-flex justify-content-center "><img src="img/bean.png" height="50px" alt="">' + '</div>';
//     html += '<span>' + createNewCoffeeObject.name + '</span>';
//     html += '<span>' + createNewCoffeeObject.roast + '</span>';
//     html += '</div>';
//
//     return html;
// }
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
//these next two don't work because second parameter is not an object
//document.getElementById("submitNewCoffee").addEventListener("click", renderNewObject);
//console.log(coffees);
//this turns the entire array of coffees (including newly added coffees) to a string
// var stringCoffees = JSON.stringify(coffees);
// this stores it in localstorage (the cloud)
// localStorage.setItem("locallyStoredCoffee", stringCoffees);
//this function takes the inputted coffee name and roast and adds it to the array
//var pushToArray = function () {
//    coffees.push(createNewCoffeeObject());
//    //if we want to manually assign just this id #, but it's at the end of the object
//    coffees[coffees.length - 1].id = (coffees.length - 1);
//    //store it in cloud
//    localStorage.setItem("locallyStoredCoffee", JSON.stringify(coffees));
//    tbody.innerHTML = renderCoffees(coffees);
//    //log to see coffee
//    console.log(coffees);
//    return selectionOrder.innerHTML = renderCoffees(coffees);
//};
// this takes it from the cloud and turns it back into array
// var objectifiedStringCoffees = JSON.parse(localStorage.getItem("locallyStoredCoffee"));
// console.log(objectifiedStringCoffees);
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
