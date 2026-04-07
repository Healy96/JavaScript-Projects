//main.js

//a function that uses the += operator
function myFunction() {
    var sentence = "I am learning"; //creating the variable
    sentence += " a lot from this course!"; //using the += operator to concatenate the string
    document.getElementById("Concatenate").innerHTML = sentence; //using document.getElementById()
}