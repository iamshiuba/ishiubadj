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
 * The function `loadVideos` loads a list of videos onto a webpage, creating iframes for each video and
 * providing links to watch them.
 * @returns The `loadVideos` function loads a list of videos onto the webpage by creating iframe
 * elements for each video and appending them to the `videoContainer` element. The videos are sourced
 * from an array of video objects containing titles, video IDs, and URLs. The function also checks for
 * the existence of the `videoContainer` element and logs a warning if it is not found.
 */
function loadVideos() {
  const videos = [
    {
      title: "OVER-THINKING",
      videoId: "Ct5kE8KGnQM",
      url: "https://www.youtube.com/watch?v=Ct5kE8KGnQM",
    },
    {
      title: "Childhood Nostalgia",
      videoId: "2jfeauEQx7w",
      url: "https://www.youtube.com/watch?v=2jfeauEQx7w",
    },
    {
      title: "This Perfect World",
      videoId: "kFSdn2X1Ttw",
      url: "https://www.youtube.com/watch?v=kFSdn2X1Ttw",
    },
    {
      title: "Tragic Ending",
      videoId: "uf6PZ9WisZQ",
      url: "https://www.youtube.com/watch?v=uf6PZ9WisZQ",
    },
  ];

  const videoContainer = document.getElementById("videoContainer");

  if (!videoContainer) {
    console.warn("videoContainer não encontrado.");
    return;
  }

  videos.forEach((video) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    colDiv.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${video.videoId}?si=dca-S4qIp2txXlSA"
            title="${video.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div class="video-links">
            <a
              rel="noopener"
              class="link"
              href="${video.url}"
              target="_blank"
            >
              <strong>${video.title}</strong>
            </a>
          </div>
        `;

    videoContainer.appendChild(colDiv);
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
window.onload = function() {
  initializeLanguage();
  initializeTheme();
  loadVideos();
};