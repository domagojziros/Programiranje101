document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollToTop").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});