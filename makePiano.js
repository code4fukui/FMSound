import { FastButton } from "https://code4fukui.github.io/fast-button/fast-button.js";
import { FMSound } from "./FMSound.js";

const makePiano = (n, fixed = 0) => {
  const container = document.createElement("div");

  const fmsound = new FMSound();

  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr ".repeat(n + 1);
  for (let i = 0; i <= n; i++) {
    const btn = new FastButton();
    container.appendChild(btn);
    const freq = 440 * Math.pow(2, i / n);
    btn.innerHTML = (i + 1) + "<br>" + freq.toFixed(fixed) + "Hz";
    btn.ondown = () => {
      const cgain = .001;
      btn.tone = fmsound.play({ freq, cgain });
    };
    btn.onup = () => {
      btn.tone.stop();
    };
  }
  onkeydown = (e) => {
    if (e.repeat) {
      return;
    }
    const nk = parseInt(e.key);
    if (e.key == nk) {
      container.childNodes[nk - 1]?.ondown();
    }
  };
  onkeyup = (e) => {
    const nk = parseInt(e.key);
    if (e.key == nk) {
      container.childNodes[nk - 1]?.onup();
    }
  };
  return container;
};

export { makePiano };
