var entries = document.getElementsByClassName("athing");

// This is where ~tag words~ that useres may be interested in are listed
// Ideally users will be able to add/delete to this in a later version.

var tagLine = [
    "js",
    "javascript",
    "andriod"
];

	if(tagLine.length > 0){
		tagLine.includes(document.querySelector("td.title").textContent.toLowerCase());
        // If this returns...one of the items were included? I think?
        console.log("hellz yeahhh");

        // We are going to end up using .map since we will probably have to map
        // and know which elements were matched to specific selectors

        // `['foo','baz'].find(s => s.indexOf('ba') > -1).map(s => {var el = document.createElement('div'); el.textContent = s; return el})
        }

for (var i = 0; i < entries.length; i++){
    // Create a new div container to work with
    var container = document.createElement("ncolor");
 
    // Get the elements with class 'rank' from the current entry
    var rankElements = entries[i].getElementsByClassName("rank");
    // Create a new text node to hold the rank text
    var rankText = document.createTextNode(rankElements[0].textContent + " ");
 
    // Get the elements with class 'sitestr' from the current entry
    var siteElements = entries[i].getElementsByClassName("sitestr");    
    // If you got some elements, add the contents of the first one to rankText
    // Check to see if the ~News~ tag should be added
    if (siteElements.length > 0) {
        rankText.textContent += siteElements[0].textContent + " ";
        
    }
    // Put the text node into the container
    container.appendChild(rankText);

    var sitebit = entries[i].getElementsByClassName("sitebit")[0];
    // Checks to see where the tag should be added
    if (sitebit == undefined) {
         sitebit = entries[i].getElementsByTagName("a")[0];
    }
    // Put the new div into the current entry
    sitebit.parentNode.insertBefore(container, sitebit.nextSibling);
}
