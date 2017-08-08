// JavaScript source code
var tag = ["Mario", "Zelda", "Link", "Luigi", "Yoshi", "ARMS", "Pikachu", "Splatoon", "Mii", "Nintendo"];

function loadButtons() {
    console.log("hello");
    $("#buttons").empty();
    for (var i = 0; i < tag.length; i++) {
        var gifBtn = $("<button>");
        $(gifBtn).attr("data-tag", tag[i]);
        $(gifBtn).attr("class", "gifButton");
        $(gifBtn).html(tag[i]);
        $(gifBtn).appendTo("#buttons");
    }
    i = 0;
};

