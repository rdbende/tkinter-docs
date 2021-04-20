window.onscroll = function() {scrollFunc()};

var topButton = document.getElementById("topButton");
var footer = document.getElementById("footer");

function footerInViewport() {
    const rect = footer.getBoundingClientRect();
    return rect.top <= window.innerHeight;
}

function scrollFunc() {
    if (document.documentElement.scrollTop > 200) {
        topButton.style.transform = "scale(1)";
    } else {
        topButton.style.transform = "scale(0)";
    }

    if (footerInViewport()) {
        topButton.style.bottom = "90px";
    } else {
        topButton.style.bottom = "20px";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}