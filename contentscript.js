var entries = document.getElementsByClassName("athing");
var tagLine = ["js","javascript","andriod"];

	if(tagLine.length > 0){
		tagLine.includes(document.querySelector("td.title").textContent.toLowerCase());
        console.log("hellz yeahhh");
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
