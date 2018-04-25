function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(
    init
)

function init() {
    $("ol.carousel-indicators li").on("click", backToTop)
}
