document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuBtn = document.querySelector(".menu-btn");

    function toggleMenu() {
        menu.classList.toggle("show");
    }

    function closeMenu(event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("show");
        }
    }

    menuBtn.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);

    // Smooth scrolling for all menu links
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            menu.classList.remove("show"); // Close menu after clicking
        });
    });
});
