document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.querySelector(".scroll-down");
    const icon = scrollDown.querySelector("i");

    if (scrollDown) {
        scrollDown.addEventListener("click", function () {
            if (window.scrollY < window.innerHeight / 2) {
                // Ako smo na vrhu, skrolaj dolje
                window.scrollTo({
                    top: window.innerHeight, 
                    behavior: "smooth"
                });
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");
            } else {
                // Ako smo dolje, skrolaj gore
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                icon.classList.remove("fa-chevron-up");
                icon.classList.add("fa-chevron-down");
            }
        });

        // Prati skrol i mijenja smjer strelice
        window.addEventListener("scroll", function () {
            if (window.scrollY > window.innerHeight / 2) {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");
            } else {
                icon.classList.remove("fa-chevron-up");
                icon.classList.add("fa-chevron-down");
            }
        });
    }
});
