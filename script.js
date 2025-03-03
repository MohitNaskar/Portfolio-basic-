 //scroll bar or progress bar logic
 window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    document.querySelector(".scroll-bar").style.width = scrollPercentage + "%";
});


//menu button logic
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

    // Dynamically update the menu based on the visible section
    function updateMenu() {
        const aboutSection = document.getElementById("intro");
        const projectsSection = document.getElementById("projects");

        const aboutLink = document.querySelector(".menu a[href='#intro']");
        const projectsLink = document.querySelector(".menu a[href='#projects']");

        const scrollPosition = window.scrollY;

        if (scrollPosition >= aboutSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
            // Hide "About" when in About section
            if (aboutLink) aboutLink.style.display = "none";
            if (projectsLink) projectsLink.style.display = "block";
        } else if (scrollPosition >= projectsSection.offsetTop) {
            // Hide "Projects" when in Projects section
            if (projectsLink) projectsLink.style.display = "none";
            if (aboutLink) aboutLink.style.display = "block";
        }
    }

    // Run function on scroll
    window.addEventListener("scroll", updateMenu);

    // Run once on page load to set initial state
    updateMenu();
});
function scrollToPage2() {
    document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
}
/* Logic for 2nd page git button*/
document.addEventListener("DOMContentLoaded", function () {
    function toggleWorksButton() {
        const page2 = document.getElementById("page2");
        const worksButton = document.querySelector("#page2 .works-btn");
        if (window.scrollY >= page2.offsetTop && window.scrollY < page2.offsetTop + page2.offsetHeight) {
            document.body.classList.add("page2-active");
        } else {
            document.body.classList.remove("page2-active");
        }
    }

    window.addEventListener("scroll", toggleWorksButton);
    toggleWorksButton(); // Run on load to check the initial position
});


/* Footer Buttons */
document.addEventListener("DOMContentLoaded", function () {
    const pages = ["intro", "page2","project1","project2"]; // Ordered page IDs
    let currentPageIndex = 0;

    function updateButtons() {
        // Hide "Previous" button on the first page
        document.getElementById("prev-btn").style.display = currentPageIndex === 0 ? "none" : "inline-block";
        // Hide "Next" button on the last page
        document.getElementById("next-btn").style.display = currentPageIndex === pages.length - 1 ? "none" : "inline-block";
    }

    function navigatePage(direction) {
        if (direction === 1 && currentPageIndex < pages.length - 1) {
            currentPageIndex++; // Move to next page
        } else if (direction === -1 && currentPageIndex > 0) {
            currentPageIndex--; // Move to previous page
        }

        // Scroll to the new section
        document.getElementById(pages[currentPageIndex]).scrollIntoView({ behavior: "smooth" });

        updateButtons(); // Update button visibility
    }

    // Detect initial page position when page loads
    function detectCurrentPage() {
        const scrollY = window.scrollY;
        pages.forEach((page, index) => {
            const section = document.getElementById(page);
            if (section && scrollY >= section.offsetTop - 100) {
                currentPageIndex = index;
            }
        });
        updateButtons();
    }

    // Add event listeners to the buttons
    document.getElementById("prev-btn").addEventListener("click", () => navigatePage(-1));
    document.getElementById("next-btn").addEventListener("click", () => navigatePage(1));

    // Run detection on scroll and load
    window.addEventListener("scroll", detectCurrentPage);
    detectCurrentPage();
});
