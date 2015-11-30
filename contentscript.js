var tags = new Array();
var entries = document.getElementsByClassName("athing");
for (var i = 0; i < entries.length; i++){
    var rank = entries[i].getElementsByClassName("rank");
    var tag = document.createTextNode(rank[0].textContent + " ");
    tags.push(tag);
    var site = entries[i].getElementsByClassName("sitestr");
    if (site[0] != undefined){
        tags[i].textContent += site[0].textContent + " ";
    }
    entries[i].appendChild(tags[i]);
}
