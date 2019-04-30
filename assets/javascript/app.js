$(document).ready(function() {

    // Eliminate CORS issue
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
 });
 
 var queryURL = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1h1kdw0j957_1651t&address=2636+SW+21+Court&citystatezip=Miami+FL+33133"
 console.log(queryURL)
 
 $.ajax({
    url: queryURL,
    contentType: 'application/json',
    method: "GET"
 })
 .then(function(response){
    console.log(response.all[0])
 
 
    // create for loop
    // send the info to the html
 })
});