const button = document.querySelector("button");
const body = document.querySelector("body");

function randomColor() {
  // pick a red from 0-255
  let r = Math.floor(Math.random() * 256);
  // pick a green from 0-255
  let g = Math.floor(Math.random() * 256);
  // pick a blue from 0-255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

button.addEventListener("click", function () {
  body.style.backgroundColor = randomColor();
});
