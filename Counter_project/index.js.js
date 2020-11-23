// Declaring variables for each IDS
var counter = document.getElementById("counter-number");
var Increment = document.getElementById("increment");
var Decrement = document.getElementById("decrement");

var number = 0;

Increment.addEventListener("click", function(){
    number++;
    counter.innerHTML = number;
});

Decrement.addEventListener("click", function(){
    number--;
    counter.innerHTML = number;
});