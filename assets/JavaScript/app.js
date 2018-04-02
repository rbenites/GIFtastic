/*jshint esversion: 6 */
window.onload = function () {
    //1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
    //    * We chose animals for our theme, but you can make a list to your own liking.
    var topics = ["Collie", "German Shepherd", "Bernese Mountain Dog", "Australian Shepherd", "Golden Retriever", "Siberian Husky", "Border Collie"];
    var resultNum = 9;

    // 2. Your app should take the topics in this array and create buttons in your HTML.
    // * Try using a loop that appends a button for each string in the array.

    function createTopicBtns() {
        var topicBtns = $("#dogBtns");
        for (i = 0; i < topics.length; i++) {
            var newTopicBtns = $("<button>" + topics[i] + "</buttons>");
            newTopicBtns.attr({
                "type": "button",
                "class": "btn btn-outline-secondary active m-2",
                "data-name": topics[i],
                "text": topics[i]
            });
            console.log(newTopicBtns);
            topicBtns.append(newTopicBtns);
        }
    }

    /*3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    */
   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=collie&api_key=ssisEaruVrcF1igPEGOT1LEyzqZkCvKZ";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });



        /*When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
        */

        /*Under every gif, display its rating (PG, G, so on).*/

        /*This data is provided by the GIPHY API.
        Only once you get images displaying with button presses should you move on to the next step.
        Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
        */
       
        createTopicBtns();


    //window on load end    
};