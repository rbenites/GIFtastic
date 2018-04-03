/*jshint esversion: 6 */
window.onload = function () {
    //1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
    //    * We chose animals for our theme, but you can make a list to your own liking.
    var topics = ["Collie"/*, "German Shepherd", "Bernese Mountain Dog", "Australian Shepherd", "Golden Retriever", "Siberian Husky", "Border Collie"*/];
    var resultNum = 1;

    // 2. Your app should take the topics in this array and create buttons in your HTML.
    // * Try using a loop that appends a button for each string in the array.

    function createTopicBtns() {   
        $("#dogBtns").empty();    
        var topicBtns = $("#dogBtns");
        for (i = 0; i < topics.length; i++) {
            var newTopicBtns = $("<button>" + topics[i] + "</buttons>");
            newTopicBtns.attr({
                "type": "button",
                "class": "dog_btn btn-outline-secondary active m-2",
                "data-name": topics[i],
                "text": topics[i]
            });
            console.log(newTopicBtns);
            console.log(topicBtns);
            topicBtns.append(newTopicBtns);
        }
    }

    /*3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    */
    /*This data is provided by the GIPHY API.
 Only once you get images displaying with button presses should you move on to the next step.
 */
    function dogGifs() {
        var search = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ssisEaruVrcF1igPEGOT1LEyzqZkCvKZ&limit=" + resultNum;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data;
            for (i = 0; i < resultNum; i++) {
                var newDogDiv = $("<div>");
                /*Under every gif, display its rating (PG, G, so on).*/
               var rating = $("<p>").text("Rating: " + results[i].rating).addClass("my-0");
                dogImage = $("<img>").attr({
                    "src": results[i].images.fixed_height_still.url,
                    "type":"button",
                    "data-still": results[i].images.fixed_height_still.url,
                    "data-animate": results[i].images.fixed_height.url,
                    "data-state": "still",
                    "class": "gif btn-outline-secondary active m-2"
                });
                newDogDiv.addClass("my-3 col-lg-4");
                newDogDiv.append(dogImage);
                newDogDiv.append(rating);
                $("#dogGifs").append(newDogDiv);
            }
        });

    }

    /*
 Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
 */
    $("#newDogs").on("click", function (event) {
        event.preventDefault();
        var dog = $("#dogSearchField").val().trim();
        topics.push(dog);
        createTopicBtns();
    });

    /*When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    */
    $(".gif").on("click", function () {
        var status = $(this).attr("data-state");
        var animate = $(this).attr("data-animate");
        var still = $(this).attr("data-still");
        if (state === "still") {
            $(this).attr({
                "src": "animate",
                "data-state": "animate"
            });
            console.log(state);
        } else {
            $(this).attr({
                "src": "still",
                "data-state": "still"
            });
            console.log(state);
        }

    });

    createTopicBtns();
    $(document).on("click", ".dog_btn", dogGifs);

    //window on load end    
};