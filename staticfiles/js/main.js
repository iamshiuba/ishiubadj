/**
 * The `initializeLanguage` function sets the selected language based on the value stored in
 * localStorage and checks the corresponding radio button.
 */
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

/**
 * The function `setLanguage` allows for dynamic translation of elements on a webpage based on the
 * selected language and stores the selected language in local storage.
 * @param language - The `language` parameter is a string that represents the selected language for
 * translation.
 */
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

/* The code `document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      setLanguage(this.value);
    });
  });` is selecting all input elements with the attribute `name="btnradio"` on the webpage. It then
  iterates over each of these input elements using the `forEach` method. */
document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    setLanguage(this.value);
  });
});

/**
 * The above JavaScript functions initialize and toggle a dark theme for a webpage based on user
 * preference and store the theme choice in local storage.
 */
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

/**
 * The function `toggleTheme` toggles between dark and light themes on a webpage based on the user's
 * preference stored in local storage.
 */
function toggleTheme() {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark", !isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "light" : "dark");
}
document
  .getElementById("theme-switcher")
  .addEventListener("change", toggleTheme);

/**
 * The function `loadPlaylists` dynamically loads YouTube playlists onto a webpage using data from an
 * array of playlist objects.
 * @returns The `loadPlaylists` function returns nothing (`undefined`) explicitly, but it does have a
 * `return;` statement that will exit the function early if the `playlistContainer` element is not
 * found in the document.
 */

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

/**
 * The function `showMenu` toggles the responsive class on an element with the id "myTopnav" to show or
 * hide a menu.
 */
function showMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Call loadVideos after the page is fully rendered
window.onload = function () {
  initializeLanguage();
  initializeTheme();
  loadPlaylists();
};
