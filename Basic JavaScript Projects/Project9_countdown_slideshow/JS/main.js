//main.js

//Countdown timer function
function countdown() {

    //gets the input from the user
    var seconds = document.getElementById("seconds").value;

    //function to perform the countdown
    function tick() {
        seconds = seconds - 1;
        TimeRanges.HTML = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's up!");
        }
    }
    tick();
}