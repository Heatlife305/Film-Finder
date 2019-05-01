$(document).ready(function() {

    var queryURL = "https://www.omdbapi.com/?t=inception&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    });






});