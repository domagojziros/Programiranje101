document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.querySelector(".scroll-down");
    const icon = scrollDown.querySelector("i");

    if (scrollDown) {
        scrollDown.addEventListener("click", function () {
            if (window.scrollY < window.innerHeight / 2) {

                window.scrollTo({
                    top: window.innerHeight, 
                    behavior: "smooth"
                });
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");
            } else {
                
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                icon.classList.remove("fa-chevron-up");
                icon.classList.add("fa-chevron-down");
            }
        });

        
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