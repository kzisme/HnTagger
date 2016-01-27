// This is where ~tag words~ that useres may be interested in are listed
// Ideally users will be able to add/delete to this in a later version.

var tagKeyWords = [
    "css",
    "js",
    "javascript",
    "android",
    "python",
    "ruby",
    "java",
    "c#",
    "C++",
    "php",
    "sql",
    "vim"

];

Array.prototype.slice.call(document.getElementsByClassName("athing")).
    forEach(function(thing) {
    // Create elements to be appended (change to valid HTML later)
    var titleContainer = document.createElement("tcolor");

    // Loops through the links on the page and finds the "Title"
    // Then compares each title to the array tagKeyWords.
    var titleTd = thing.getElementsByClassName("title")[1]
    var titleText = titleTd.innerHTML;

    titleContainer.textContent += tagKeyWords.filter(function(tag) {
        return titleText.toLowerCase().indexOf(tag) != -1;
    }).join(" ");

    if (titleContainer.textContent.length > 0) {
        titleTd.appendChild(titleContainer);
    }
});
