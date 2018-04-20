/*jshint esversion: 6 */
window.onload = function () {
    //Giphy items
    var queryAddress = "https://api.giphy.com/v1/gifs/";
    var searchParamater = "search?q=";
    var limit = "&limit=" + limitNum;
    var limitNum = 1;
    var apiKey = "&api_key=ssisEaruVrcF1igPEGOT1LEyzqZkCvKZ";

    //predefined topics
    var topics = ["Collie", "German Shepherd", "Bernese Mountain Dog", "Australian Shepherd", "Golden Retriever", "Siberian Husky", "Border Collie"];
    
    var topicBtns = $("#dogBtns");
    
    //for loop to create the topic buttons from the topics array
    for (var i = 0; i < topics.length; i++) {
        var topicButton = $('<button>');
        topicButton.attr('data-name', topics[i]);
        topicButton.attr('class',"btn btn-outline-secondary m-2");
        topicButton.text(topics[i]);
        topicBtns.append(topicButton);
        console.log(topicButton);
    }
    
    $("#SearchField").on('submit', function () {
        event.preventDefault();
        var dog = $('#dogSearchField').val().trim();
        topics.push(dog);
        var topicButton = $('<button>');
        topicButton.attr({
            'data-name': topics[topics.length - 1],
            'class': "btn btn-outline-secondary m-2",
            'text': topics[topics.length - 1]
        });
        topicButton.text(topics[i]);
        topicBtns.append(topicButton);

        console.log(topicBtns);
    });

    $('body').on('click', 'button', function () {
        var topic = $(this).attr('data-name');
        search=$(this).attr('data-name');
        var query = searchParamater + search;
        var queryUrl = queryAddress + query + apiKey + limit;

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(queryUrl);
            console.log(response);

            var results = response.data;
            var returnedGifs = $('#returnedGifs');
            for (var g = 0; g < results.length; g++) {
                var stillGifs = results[g].images.fixed_height_still.url;
                var animatedGifs = results[g].images.original.url;
                var gifImg = $('<img>');
                gifImg.attr({
                    "src": stillGifs,
                    "animated": animatedGifs
                });
                returnedGifs.append(gifImg);
            }
            $('img').on('click', function () {
                var animatedUrl = $(this).attr('animated');
                $(this).attr('src', animatedUrl);
            });
        });
        console.log($(this).attr('data-name'));
    });
    
    //window on load end
};