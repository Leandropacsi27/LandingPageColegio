// dark-mode.js
document.addEventListener("DOMContentLoaded", function () {
  const htmlElement = document.documentElement;
  const darkModeToggle = document.getElementById("darkModeToggle");
  // Unificar preferencia y colores
  const isDarkMode =
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (isDarkMode) {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  function setThemeColors() {
    if (htmlElement.classList.contains("dark")) {
      document.body.style.backgroundColor = "#101922";
      document.body.style.color = "#F6F7F8";
    } else {
      document.body.style.backgroundColor = "#f6f7f8";
      document.body.style.color = "#18181B";
    }
  }
  setThemeColors();
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      htmlElement.classList.toggle("dark");
      if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      setThemeColors();
    });
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
      setThemeColors();
    }
  });

  // Drawer menu (hamburguesa)
  const drawerToggle = document.getElementById("drawerToggle");
  const closeDrawer = document.getElementById("closeDrawer");
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  if (drawerToggle && drawer && overlay) {
    drawerToggle.addEventListener("click", function () {
      drawer.classList.remove("-translate-x-full");
      drawer.classList.add("translate-x-0");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }
  if (closeDrawer && drawer && overlay) {
    closeDrawer.addEventListener("click", function () {
      drawer.classList.remove("translate-x-0");
      drawer.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }
  if (overlay && drawer) {
    overlay.addEventListener("click", function () {
      drawer.classList.remove("translate-x-0");
      drawer.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }
  if (drawer) {
    const links = drawer.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        drawer.classList.remove("translate-x-0");
        drawer.classList.add("-translate-x-full");
        if (overlay) {
          overlay.classList.add("hidden");
        }
        document.body.style.overflow = "";
      });
    });
  }
});
