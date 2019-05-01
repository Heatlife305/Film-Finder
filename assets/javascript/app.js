$(document).ready(function() {

    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)

        var movieDiv = $("<div class='movie'>");

        var rating = response.Rated;

        var pOne = $("<p>").text("Rating: " + rating);

        movieDiv.append(pOne);

        var released = response.Release;

        var pTwo = $("<p>").text("Released: " + released);

        movieDiv.append(pTwo);

        var plot = response.Plot;

        var pThree = $("<p>").text("Plot: " + plot);



        $("#movie-view").prepend(movieDiv);
    });

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var movieInput = $("#movie-input")
    })




});