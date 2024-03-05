document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio-player");
  const audioSource = document.getElementById("audio-source");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const volumeSlider = document.getElementById("volume");
  const volumeDisplay = document.getElementById("volume-display");
  const playlist = document.getElementById("playlist");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const currentTimeDisplay = document.getElementById("current-time");
  const songProgress = document.getElementById("song-progress");
  const durationDisplay = document.getElementById("duration");
  const playerContainer = document.querySelector(".player-container");

  let currentSongIndex = 0;

  function playSong(index) {
    const songElement = playlist.children[index];
    const songSrc = songElement.getAttribute("data-src");


  
    // Remove the animation class from the previously playing image
    const prevPlayingImage = document.querySelector(".image-playing-animation");
    if (prevPlayingImage) {
      prevPlayingImage.classList.remove("image-playing-animation");
    }

    // Add the animation class to the currently playing image
    const currentPlayingImage = songElement.querySelector("img");
    if (currentPlayingImage) {
      currentPlayingImage.classList.add("image-playing-animation");
    }

    audioSource.src = songSrc;
    audio.load();
    audio.play();
    playPauseBtn.textContent = "Pause";
  }

  function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.children.length;
    playSong(currentSongIndex);
  }

  function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + playlist.children.length) % playlist.children.length;
    playSong(currentSongIndex);
  }

  function autoPlayNext() {
    playNext();
  }

  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "Pause";
      playerContainer.classList.add("playing-animation");
    } else {
      audio.pause();
      playPauseBtn.textContent = "Play";
      playerContainer.classList.remove("playing-animation");
    }
  });

  // volumeSlider.addEventListener("input", function () {
  //   const volumePercentage = Math.round(volumeSlider.value * 100);
  //   audio.volume = volumeSlider.value;
  //   volumeDisplay.textContent = volumePercentage + "%";
  // });

  nextBtn.addEventListener("click", function () {
    nextBtn.classList.add("clicked");

    playNext();

    setTimeout(() => {
      nextBtn.classList.remove("clicked");
    }, 200);
  });

  prevBtn.addEventListener("click", playPrevious);

  playlist.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      currentSongIndex = Array.from(playlist.children).indexOf(event.target);
      playSong(currentSongIndex);
    } else if (event.target.tagName === "IMG") {
      const parentLi = event.target.closest("li");
      currentSongIndex = Array.from(playlist.children).indexOf(parentLi);
      playSong(currentSongIndex);
    }
  });

  audio.addEventListener("ended", autoPlayNext);

  audio.addEventListener("timeupdate", function () {
    const currentTime = formatTime(audio.currentTime);
    currentTimeDisplay.textContent = currentTime;

    const duration = formatTime(audio.duration);
    durationDisplay.textContent = duration;

    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    songProgress.value = progressPercentage;
  });

  songProgress.addEventListener("input", function () {
    const seekTime = (audio.duration * songProgress.value) / 100;
    audio.currentTime = seekTime;
  });

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  // Play the first song by default
  playSong(currentSongIndex);
});







Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .11,
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .21,
});

