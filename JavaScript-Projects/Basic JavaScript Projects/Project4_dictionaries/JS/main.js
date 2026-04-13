//main.js

function my_Dictionary() {
    var movie = {
        Tilte: "The Avengers",
        Genre: "Action",
        Director: "Joss Whedon",
        Rating: "PG-13",
    };
    delete movie.Genre; //This removes the Genre KVP from the Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = movie.Genre; //This will display "undefined" because the Genre KVP was deleted from the Dictionary
}