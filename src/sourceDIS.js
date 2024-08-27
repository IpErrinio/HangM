const audio = new Audio("assets/alAArm.wav");

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  showFullscreenImage();

  audio.play().catch((error) => {
    console.error("Error playing audio:", error);
  });

  setTimeout(() => {
    alert("Nie rób tego! Co source zachciało się przeglądac???");

    audio.pause();
    audio.currentTime = 0;

    closeFullscreenImage();
  }, 100);
});

document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.key === "u") ||
    (e.ctrlKey && e.shiftKey && e.key === "I")
  ) {
    e.preventDefault();

    showFullscreenImage();

    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });

    setTimeout(() => {
      alert("Nie rób tego!");

      audio.pause();
      audio.currentTime = 0;

      closeFullscreenImage();
    }, 100);
  }
});

function showFullscreenImage() {
  const fullscreenImageContainer = document.getElementById(
    "fullscreenImageContainer"
  );
  fullscreenImageContainer.style.display = "flex";
}

function closeFullscreenImage() {
  const fullscreenImageContainer = document.getElementById(
    "fullscreenImageContainer"
  );
  fullscreenImageContainer.style.display = "none";
}
