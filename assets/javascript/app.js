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

        movieDiv.append(pThree);

        var imgURL = response.Poster

        var image = $("<img>").attr("src", imgURL);

        movieDiv.append(image);

        $("#movie-view").prepend(movieDiv);
    });

// Second AJAX call to Utelly
//==================================================================
var term = "game of thrones"
var country = "us"
var movieLocation;


   var queryURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + term + "&country=" + country
   $.ajax({
       type: 'GET',
       url: queryURL,
       headers:{
           "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "5051d1fe69mshedc1cc9f23ffa38p118110jsn0a05732261dd"

       }
   }).then(function(data){
       console.log(data);
       console.log(data.results)
       console.log(data.results[0])
       console.log(data.results[0].locations[0].display_name)
       console.log(data.results[0].locations[1].display_name)

       var response = data.results[0].locations

       for (var i = 0; i < response.length; i++) {
            console.log(response[i].display_name)
            console.log(response[i].url)
       }




   });



});