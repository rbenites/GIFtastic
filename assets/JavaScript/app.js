$(document).ready(function(){

  var topics = ["StarWars", "Dogs", "X-Men", "BatMan", "SuperMan", "Avengers", "Spider-Man", "Wolverine", "video Games"];
  var $bt = $('<input/>').attr({ type: 'button' });
  $("#topics").append($bt);

  for (i = 0; i < topics.length; i++) {
    $('<button/>', {
      text: topics[i],
      id: 'btn_' + topics[i],
      click: function () {
        alert('hi');
      }
    });
  }

  //variable to hold the api URL for giphy url up to the ? then the API key  up tp the tag and then what it is searching for
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //at the end of the api key there is a limit of ten items
    topics + "&api_key=ssisEaruVrcF1igPEGOT1LEyzqZkCvKZ&limit=10";


  //ajax call that gets the data from the url
  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    //this pulls the response from the url
    .then(function (response) {
      var results = response.data;
      console.log(response);
      //
      for (var i = 0; i < results.length; i++) {
        //
        var gifDiv = $("<div class='item'>");
        //holds the parental rating of the GIF
        var rating = results[i].rating;
        //displays the rating
        var p = $("<p>").text("Rating: " + rating);
        //holds the images
        var searchImage = $("<img>");
        //displays the images
        searchImage.attr("src", results[i].images.fixed_height.url);
        //prepends rating
        gifDiv.prepend(p);
        // prepends image
        gifDiv.prepend(personImage);
        ////prepends the GIF
        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});

