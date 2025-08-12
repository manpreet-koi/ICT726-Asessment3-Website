document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".nav-toggler");
    const menu = document.getElementById("main-navigation");
  
    toggler.addEventListener("click", function () {
      const isExpanded = toggler.getAttribute("aria-expanded") === "true";
  
      toggler.classList.toggle("active");
      menu.classList.toggle("active");
  
      toggler.setAttribute("aria-expanded", String(!isExpanded));
    });
  });
  