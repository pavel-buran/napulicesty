document.addEventListener("click", function(e) {
    const button = e.target.closest("#menu-button");
    if (!button) return;
    e.preventDefault();

    const menu = document.getElementById("menu-content");

    if (menu) {
        menu.classList.toggle("open");
    }
});
