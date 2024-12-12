document.addEventListener("DOMContentLoaded", () => {  
  const themeSwitcher = document.getElementById("theme-switcher");  
  
  // Inicialização do tema  
  function initializeTheme() {  
      const savedTheme = localStorage.getItem("theme") ||   
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");  
      
      if (savedTheme === "dark") {  
          document.body.classList.add("dark");  
          updateThemeButtonIcon(true);  
      } else {  
          document.body.classList.remove("dark");  
          updateThemeButtonIcon(false);  
      }  
  }  

  // Função para atualizar o ícone do botão  
  function updateThemeButtonIcon(isDark) {  
      const icon = themeSwitcher.querySelector('i');  
      if (isDark) {  
          icon.classList.remove('fa-moon');  
          icon.classList.add('fa-sun');  
      } else {  
          icon.classList.remove('fa-sun');  
          icon.classList.add('fa-moon');  
      }  
  }  

  // Alternar tema  
  function toggleTheme() {  
      const isDarkMode = document.body.classList.toggle("dark");  
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");  
      updateThemeButtonIcon(isDarkMode);  
  }  

  // Adicionar evento de clique ao botão  
  themeSwitcher.addEventListener("click", toggleTheme);  

  // Inicializar tema  
  initializeTheme();  
});