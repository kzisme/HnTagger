// This is where ~tag words~ that useres may be interested in are listed
// Ideally users will be able to add/delete to this in a later version.

var tagKeyWords = [
    "js",
    "javascript",
    "android",
    "images",
    "park",
    "change",
    "web"
];

Array.prototype.slice.call(document.getElementsByClassName("athing")).
    forEach(function(thing) {
    // Create elements to be appended (change to valid HTML later)
    var rankSiteContainer = document.createElement("ncolor");
    var titleContainer = document.createElement("tcolor");

    // Create a text node and put it into the container of the rank and site
    // Joins an element of the array rankSiteArr with a " "
    rankSiteContainer.appendChild(document.createTextNode(rankSiteArr.join(" ")));

    // Loops through the links on the page and finds the "Title"
    // Then compares each title to the array tagKeyWords.
    var titleTd = thing.getElementsByClassName("title")[1]
    var titleText = titleTd.innerHTML;

    titleContainer.textContent += tagKeyWords.filter(function(tag) {
        return titleText.toLowerCase().indexOf(tag) != -1;
    }).join(" ");

    titleTd.appendChild(rankSiteContainer);
    if (titleContainer.textContent.length > 0) {
        titleTd.appendChild(titleContainer);
    }
});
