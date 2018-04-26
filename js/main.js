function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function navHoverEffect(e) {
    $(e.target.parentNode.firstChild).css("color", "rgba(0, 0, 0, 1)")
}

function navHoverEffectOut(e) {
    $(e.target.parentNode.firstChild).css("color", "rgba(165, 165, 165, 255)");

}

$(document).ready(
    init
)

function init() {
    $("ol.carousel-indicators li").on("click", backToTop)
    $("nav ul li a").on("mouseover", navHoverEffect);
    $("nav ul li a").on("mouseleave", navHoverEffectOut);
}
