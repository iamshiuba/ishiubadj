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
    colDiv.className = "card";

    colDiv.innerHTML = `
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=${playlist.playlistId}"
              title="${playlist.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div class="card-body">
              <a
                type="button"
                rel="noopener"
                class="btn"
                href="${playlist.url}"
                target="_blank"
              >
              ${playlist.title}
              </a>
            </div>
          `;

    playlistContainer.appendChild(colDiv);
  });
}

window.onload = function () {
  loadPlaylists();
};
