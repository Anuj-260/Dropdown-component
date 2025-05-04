document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const toggle = document.querySelector(".dropdown-toggle");
    const menu = document.querySelector(".dropdown-menu");
    const items = document.querySelectorAll(".dropdown-item");

    let selectedIndex = -1;

    // Toggle dropdown on click
    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    
    });

    // Select an item on click
    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            toggle.textContent = item.textContent;
            menu.classList.remove("show");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            menu.classList.remove("show");
        }
    });


    // Keyboard navigation
    toggle.addEventListener("keydown", (e) => {
      
        if (e.key === "ArrowDown") {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % items.length;
            highlightItem();

        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + items.length) % items.length;
            highlightItem();

        } else if (e.key === "Enter") {
            e.preventDefault();
            if (selectedIndex >= 0) {
                toggle.textContent = items[selectedIndex].textContent;
                menu.classList.remove("show");
            }
        }
    });

    function highlightItem() {
      items.forEach(item => item.classList.remove("active"));
      items[selectedIndex].classList.add("active");

        }

});
