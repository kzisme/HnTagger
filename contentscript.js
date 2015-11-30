var tags = new Array();
var rank = document.getElementsByClassName("rank");
for (var i = 0; i < rank.length; i++){
    var tag = document.createTextNode(rank[i].textContent + " ");
    tags.push(tag);
}

var site = document.getElementsByClassName("sitestr");
for (var i = 0; i < site.length; i++){
    tags[i].textContent += site[i].textContent + " ";
}

var table = document.getElementsByClassName("athing");
for (var i = 0; i < table.length; i++){
    table[i].appendChild(tags[i]);
}
