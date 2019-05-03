$(document).ready(function() {

    // Grabs the user input and calls upon the getMovies function
    $("#search-btn").on("click", function(event) {
        event.preventDefault();
        console.log($("#input-movie").val().trim())
        let searchInput = $("#input-movie").val().trim();
        getMovies(searchInput);
    });

// This function activates both of the ajax calls and gets the data the user requested 
function getMovies(searchInput) {
    var queryURL = "https://www.omdbapi.com/?t=" + searchInput + "&apikey=trilogy";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)

        // Creating a div to hold our movie info 
        var movieDiv = $("<div class='movie'>");

        var title = response.Title;

        var pZero = $("<p>").text("Title: " + title);

        movieDiv.append(pZero);

        var rating = response.Rated;

        var pOne = $("<p>").text("Rating: " + rating);

        movieDiv.append(pOne);

        var released = response.Released;

        var pTwo = $("<p>").text("Released: " + released);

        movieDiv.append(pTwo);

        var plot = response.Plot;

        var pThree = $("<p>").text("Plot: " + plot);

        movieDiv.append(pThree);

        var imdbScore = response.imdbRating;

        var pFour = $("<p>").text("IMDB Rating: " + imdbScore);

        movieDiv.append(pFour);

        var imgURL = response.Poster;

        var image = $("<img>").attr("src", imgURL);

        movieDiv.append(image);

        $("#movie-info").prepend(movieDiv);
    
    
// Second AJAX call to Utelly
//==================================================================
var country = "us"

   var queryURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + searchInput + "&country=" + country
   $.ajax({
       type: 'GET',
       url: queryURL,
       headers:{
           "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "5051d1fe69mshedc1cc9f23ffa38p118110jsn0a05732261dd"

       }
   }).then(function(data){
       console.log(data.results[0]);

       var response = data.results[0].locations;

       for (var i = 0; i < response.length; i++) {
            console.log(response[i].display_name);

            // Utelly locations name and link
            var locationsName = response[i].display_name;

            var locationsURL = response[i].url;
            console.log(locationsURL);

            var pFive = $("<p>").text("Watch it here: ");

            movieDiv.append(pFive);

            // Creates a link and holds the locations URL inside and displays the appropriate name
            var pSix = $("<a href=" + locationsURL + "</a>").text(locationsName);

            pFive.append(pSix);

       }

    });

});

} // End of getMovies function

});