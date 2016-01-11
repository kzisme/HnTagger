// This is where ~tag words~ that useres may be interested in are listed
// Ideally users will be able to add/delete to this in a later version.

var tagLine = [
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
    var container = document.createElement("ncolor");
    var titleContainer = document.createElement("tcolor");

    // Create an array to hold the rank text
    var tagTextArr = [thing.getElementsByClassName("rank")[0].textContent];
 
    // Get the elements with class 'sitestr' from the current entry
    var siteElement = thing.getElementsByClassName("sitestr");    
   
    // If you got some elements, add the contents of the first one to tagText
    // Check to see if the ~News~ tag should be added
    if (siteElement.length > 0) {
        tagTextArr.push(siteElement[0].textContent);
    }
    
    // Create a text node and put it into the container
	// Joins an element of the array tagTextArr with a " "
    container.appendChild(document.createTextNode(tagTextArr.join(" ")));

    // Loops through the links on the page and finds the "Title"
    // Then compares each title to the array tagLine.
    var titleTd = thing.getElementsByClassName("title")[1]
    var titleText = titleTd.innerHTML;
    
    titleContainer.textContent += tagLine.filter(function(tag) {
    	return titleText.toLowerCase().indexOf(tag) != -1;
    }).join(" ");
    
    titleTd.appendChild(container);
    if (titleContainer.textContent.length > 0) {
        titleTd.appendChild(titleContainer);
    }
});
