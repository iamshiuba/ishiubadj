function initializeTheme() {
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const isDarkMode = savedTheme === "dark";
    
    document.body.classList.toggle("dark", isDarkMode);
    document.getElementById("theme-switcher").checked = isDarkMode;
  }
  
  function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    document.getElementById("theme-switcher").addEventListener("change", toggleTheme);
  });