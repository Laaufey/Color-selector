"use strict";

document.querySelector("#colorvalue").addEventListener("input", showHexColor);

function showHexColor() {
  document.querySelector("#HEX").textContent = `HEX: ${this.value}`;
  document.querySelector("#color-box").style.backgroundColor = this.value;
  let hex = this.value;
  const r = Number.parseInt(hex.substring(1, 3), 16);
  const g = Number.parseInt(hex.substring(3, 5), 16);
  const b = Number.parseInt(hex.substring(5, 7), 16);
  document.querySelector("#RGB").textContent = `${r}, ${g}, ${b}`;
  showHsl(r, g, b);
}

function showHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l);
  h = h.toFixed();
  s = s.toFixed(0);
  l = l.toFixed(0);

  document.querySelector("#HSL").textContent = `HSL: ${h}, ${s}%, ${l}%`;
}
