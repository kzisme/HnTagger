var entries = document.getElementsByClassName("athing");

// This is where ~tag words~ that useres may be interested in are listed
// Ideally users will be able to add/delete to this in a later version.

var tagLine = [
    "js",
    "javascript",
    "android",
    "images"
];

for (var i = 0; i < entries.length; i++){
    // Create a new div container to work with
    var container = document.createElement("ncolor");
    var titleContainer = document.createElement("tcolor");
 
    // Get the elements with class 'rank' from the current entry
    var rankElement = entries[i].getElementsByClassName("rank");

    // Create a new text node to hold the rank text
    var tagText = document.createTextNode(rankElement[0].textContent + " ");
 
    // Get the elements with class 'sitestr' from the current entry
    var siteElement = entries[i].getElementsByClassName("sitestr");    
   
    // If you got some elements, add the contents of the first one to tagText
    // Check to see if the ~News~ tag should be added
    if (siteElement.length > 0) {
        tagText.textContent += siteElement[0].textContent + " ";
    }
    
    // Loops through the links on the page and finds the "Title"
    // Then compares each title to the array tagLine.
    var titleElement = entries[i].getElementsByTagName("a")[1].innerHTML;
    for (var j = 0; j < tagLine.length; j++) {
        if (titleElement.toLowerCase().indexOf(tagLine[j]) > -1) {
            tagText.textContent += tagLine[j] + " ";
        }
    }

    // Put the text node into the container
    container.appendChild(tagText);

    var sitebit = entries[i].getElementsByClassName("sitebit")[0];
    // Checks to see where the tag should be added
    if (sitebit == undefined) {
        // This breaks on ASK HN posts since there is no link to append
        // and that is what we are searching from currently.
         sitebit = entries[i].getElementsByTagName("a")[0];
    }
    
    // Put the new div into the current entry
    sitebit.parentNode.insertBefore(container, sitebit.nextSibling);
}
