document.addEventListener("DOMContentLoaded", () => {
  const playStopButton = document.getElementById("play-stop-button");
  const audioElements = document.querySelectorAll("audio");
  const muteCheckboxes = document.querySelectorAll(".mute-checkbox");
  let isPlaying = false;

  // Initially mute all audio elements
  audioElements.forEach((audio) => {
    audio.muted = true;
  });

  // Play or stop all audio elements
  playStopButton.addEventListener("click", () => {
    if (!isPlaying) {
      audioElements.forEach((audio) => {
        audio.play();
      });
      playStopButton.textContent = "Stop";
    } else {
      audioElements.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; // Reset to start
      });
      playStopButton.textContent = "Play";
    }
    isPlaying = !isPlaying;
  });

  // Mute/Unmute audio based on checkbox state
  muteCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      audioElements[index].muted = !checkbox.checked;
    });
  });
});
