/* This JavaScript code snippet is used to add an "active" class to the navigation link that
corresponds to the current page. Here's a breakdown of what it does: */
const currentPage = window.location.pathname;
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});