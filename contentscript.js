var tags = new Array();
var entries = document.getElementsByClassName("athing");
 
for (var i = 0; i < entries.length; i++){
    // Create a new div container to work with
    var container = document.createElement("div");
 
    // Get the elements with class 'rank' from the current entry
    var rankElements = entries[i].getElementsByClassName("rank");
    // Create a new text node to hold the rank text
    var rankText = document.createTextNode(rankElements[0].textContent);
    // Save the rankText for later I guess?
    tags.push(rankText);
 
    // Get the elements with class 'sitestr' from the current entry
    var siteElements = entries[i].getElementsByClassName("sitestr");    
    // If you got some elements, add the contents of the first one to rankText
    if (siteElements) {
        rankText.textContent += siteElements[0].textContent + " ";
    }
 
    // Put the text node into the container
    container.appendChild(rankText);
 
    // Put the new div into the current entry
    entries[i].appendChild(container);
}
