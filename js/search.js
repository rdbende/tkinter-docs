function searchDocsInNavbar() {
    // This function is searches in the navbar <li> elements
    var input = document.getElementById("searchBar");
    var search = input.value.toUpperCase();
    var ul = document.getElementById("searchUl");
    var li = ul.getElementsByTagName("li");
    var i;

    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(search) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function searchDocsOnPage() {
    // This function searches only in the title of the cards,
    // also only in the part after the module name
    var input = document.getElementById("searchBar");
    var search = input.value.toUpperCase();
    var ul = document.getElementById("searchUl");
    var li = ul.getElementsByTagName("li");
    var i;
    console.log("hívva")

    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var div = a.getElementsByTagName("div")[0];
        var title = div.getElementsByClassName("link__title")[0];
        var txtValue = title.innerHTML.split(".")[1] || title.innerHTML;

        if (txtValue.toUpperCase().indexOf(search) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}