function searchDocsInNavbar() {
    // This function is searches in the navbar <li> elements
    var input = document.getElementById("searchBar");
    var search = input.value.toUpperCase();
    var ul = document.getElementById("searchUl");
    var li = ul.getElementsByTagName("li");

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
    var search = input.value.toLowerCase();
    var ul = document.getElementById("searchUl");
    var li = ul.getElementsByTagName("li");
    var resultLabel = document.getElementById("resultNumber");
    var visibles = 0;

    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var div = a.getElementsByTagName("div")[0];
        var title = div.getElementsByClassName("link__title")[0];
        var txtValue = title.innerHTML.split(".")[1] || title.innerHTML;
        

        if (txtValue.toLowerCase().indexOf("no result!") > -1) {
            li[i].remove()
        } else if (txtValue.toLowerCase().indexOf(search) > -1) {
            li[i].style.display = "initial";
            visibles++;
        } else {
            li[i].style.display = "none";
        }
    }

    if (visibles < 1) {
        var noResult = document.createElement("li");
        noResult.innerHTML = `<a style="cursor: default;" id="noResult"><div class="card link__card">
                                    <p class="link__title">No result!</p>
                                    <p class="link__desc">There seems to be no match for "`
                                    + input.value
                                    + `"</p></div></a>`;
        ul.appendChild(noResult);
    }

    if (li.length != visibles & visibles != 0) {
        if (visibles > 1) {
            resultLabel.innerHTML = visibles + " results";
        } else {
            resultLabel.innerHTML = visibles + " result";
        }
    } else {
        resultLabel.innerHTML = ""
    }
}

function searchDocsOnLoad() {
    var input = document.getElementById("searchBar");
    const searchString = window.location.search;
    const parameters = new URLSearchParams(searchString);
    input.value = parameters.get('q').toLowerCase();
    searchDocsOnPage();
}
