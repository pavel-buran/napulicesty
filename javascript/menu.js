document.addEventListener("click", function(e) {
  const button = e.target.closest("#menu-button");
  if (!button) return;
  e.preventDefault();
  const menu = document.getElementById("menu-content");

  if (menu) {
    menu.classList.toggle("open");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let currentFile = window.location.pathname.split("/").pop();

  // když jsme na úvodní stránce adresáře
  if (!currentFile) {
    currentFile = "index.html";
  }

  const links = document.querySelectorAll("#menu-content a");
  const currentPage = document.getElementById("current-page");

  for (const link of links) {
    const linkFile = link.getAttribute("href").split("/").pop();
    if (linkFile === currentFile) {
      currentPage.textContent = link.textContent.trim();
      break;
    }
  }
});