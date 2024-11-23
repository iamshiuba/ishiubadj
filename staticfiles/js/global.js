// Obtém a URL atual da página
const currentPage = window.location.pathname;
// Itera por todos os links na navegação
document.querySelectorAll('.nav-link').forEach(link => {
  // Verifica se o href do link corresponde ao caminho da página atual
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active'); // Adiciona 'active' ao link correspondente
  } else {
    link.classList.remove('active'); // Garante que outros links não tenham a classe
  }
});

function initializeLanguage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(selectedLanguage);

  const radioButton = document.querySelector(
    `input[name="btnradio"][value="${selectedLanguage}"]`
  );
  if (radioButton) {
    radioButton.checked = true;
  }
}
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    const translation =
      translations[language][translationKey] || translationKey;
    element.innerHTML = translation;
  });

  localStorage.setItem("selectedLanguage", language);

  document.documentElement.setAttribute("lang", language);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-switcher").checked = true; // Set checkbox to reflect the theme
  } else {
    document.body.classList.remove("dark");
    document.getElementById("theme-switcher").checked = false; // Set checkbox to reflect the theme
  }
}
function toggleTheme() {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark", !isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "light" : "dark");
}
document
  .getElementById("theme-switcher")
  .addEventListener("change", toggleTheme);

function loadPlaylists() {
  const playlists = [
    {
      title: "Singles (2024)",
      playlistId: "PLxUVZPvKMNEcKd2omhOo6aH6egvDd5_nB",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEcKd2omhOo6aH6egvDd5_nB",
    },
    {
      title: "Singles (2023)",
      playlistId: "PLxUVZPvKMNEc923Z8otdwQQ8TXSN3VdZK",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEc923Z8otdwQQ8TXSN3VdZK",
    },
    {
      title: "Remixes",
      playlistId: "PLxUVZPvKMNEeppHxrsS-7yeMGzY6fvRqK",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEeppHxrsS-7yeMGzY6fvRqK",
    },
    {
      title: "Piano Tutorial",
      playlistId: "PLxUVZPvKMNEfSLaVSQH4EP6isdzPdyFIG",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEfSLaVSQH4EP6isdzPdyFIG",
    },
    {
      title: "Unreleased Songs",
      playlistId: "PLxUVZPvKMNEdrWnFay_1VSI184mL94Jsx",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEdrWnFay_1VSI184mL94Jsx",
    },
    {
      title: "Volumes",
      playlistId: "PLxUVZPvKMNEetfIuzffSPH3FYIDwVUWUt",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEetfIuzffSPH3FYIDwVUWUt",
    },
  ];

  const playlistContainer = document.getElementById("playlistContainer");

  if (!playlistContainer) {
    console.warn("playlistContainer não encontrado.");
    return;
  }

  playlists.forEach((playlist) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    colDiv.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=${playlist.playlistId}"
            title="${playlist.title}"
            width="768px"
            height="432px"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div class="playlist-links">
            <a
              rel="noopener"
              class="link"
              href="${playlist.url}"
              target="_blank"
            >
              <strong>${playlist.title}</strong>
            </a>
          </div>
        `;

    playlistContainer.appendChild(colDiv);
  });
}

window.onload = function () {
  initializeLanguage();
  initializeTheme();
  loadPlaylists();
};
