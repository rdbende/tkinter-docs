window.onscroll = function() {scrollFunc()};

const topButton = document.getElementById("topButton");
const footer = document.getElementById("footer");
const card = document.querySelector("#main__card")

function footerInViewport() {
    const rect = footer.getBoundingClientRect();
    return rect.top <= window.innerHeight;
};

function cardInViewport() {
    if (card != null) {
        const rect = card.getBoundingClientRect();
        return rect.top + 50 <= window.innerHeight;
    };
};

function scrollFunc() {
    if (document.documentElement.scrollTop > 200) {
        topButton.style.transform = "scale(1)";
    } else {
        topButton.style.transform = "scale(0)";
    };

    if (footerInViewport()) {
        topButton.style.bottom = "100px";
    } else {
        topButton.style.bottom = "20px";
    };

    if (cardInViewport()) {
        card.style.transform = "translateY(0)";
        card.style.opacity = 1;
    };
};

function scrollToTop() {
    document.documentElement.scrollTop = 0;
};

scrollFunc()