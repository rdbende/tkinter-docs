window.onscroll = function() {tutScrollFunc()};

const card = document.querySelector("#main__card")

function isInViewport() {
    const rect = card.getBoundingClientRect();
    return rect.top + 100 <= window.innerHeight;
}

function tutScrollFunc() {
    if (isInViewport()) {
        card.style.transform = "translateY(0)";
        card.style.opacity = 1;
    }
}