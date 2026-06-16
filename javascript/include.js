async function loadIncludes() {
  const elements = document.querySelectorAll("[data-include]");

  await Promise.all(
    [...elements].map(async (element) => {
      const file = element.dataset.include;

      try {
        const response = await fetch(file);

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        element.innerHTML = await response.text();
      } catch (error) {
        console.error(`Include failed: ${file}`, error);
        element.innerHTML = "";
      }
    })
  );

  setActiveNavigation();
  setCurrentPageName();
}

function normalizePath(path) {
  if (path === "/" || path === "") return "/index.html";

  return path
    .replace(/\/$/, "/index.html")
    .replace(/\/index\.html$/, "/index.html");
}

function setActiveNavigation() {
  const currentPath = normalizePath(window.location.pathname);
  const navLinks = document.querySelectorAll("[data-nav-link]");

  navLinks.forEach((link) => {
    const linkPath = normalizePath(new URL(link.href).pathname);
    const isActive = linkPath === currentPath;

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setCurrentPageName() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const currentPage = document.getElementById("current-page");
  const links = document.querySelectorAll("#menu-content a");

  if (!currentPage) return;

  for (const link of links) {
    if (link.getAttribute("href") === currentFile) {
      currentPage.textContent = link.textContent.trim();
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", loadIncludes);
