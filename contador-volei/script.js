const fullscreenBtn = document.getElementById("fullscreen-btn");
fullscreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().then(() => {
      screen.orientation.lock("landscape").catch(() => {});
    });
  }
});

const LONG_PRESS_MS = 300;

document.querySelectorAll(".score").forEach((scoreEl) => {
  let pressTimer = null;
  let isLongPress = false;

  scoreEl.addEventListener("pointerdown", () => {
    isLongPress = false;
    pressTimer = setTimeout(() => {
      isLongPress = true;
      scoreEl.textContent = Math.max(0, Number(scoreEl.textContent) - 1);
    }, LONG_PRESS_MS);
  });

  scoreEl.addEventListener("pointerup", () => {
    clearTimeout(pressTimer);
    if (!isLongPress) {
      scoreEl.textContent = Number(scoreEl.textContent) + 1;
    }
  });

  scoreEl.addEventListener("pointercancel", () => {
    clearTimeout(pressTimer);
  });

  scoreEl.addEventListener("pointerleave", () => {
    clearTimeout(pressTimer);
  });
});

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".score").forEach((scoreEl) => {
    scoreEl.textContent = 0;
  });
});
