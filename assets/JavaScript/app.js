window.onload = function () {

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=ssisEaruVrcF1igPEGOT1LEyzqZkCvKZ";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
    });


  };
