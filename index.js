const btn = document.querySelector("button");
const cable = document.querySelector(".icons");
const screen = document.querySelector(".screen");
const giphy = document.querySelector(".giphy");

const plugIn = () => {
  cable.classList.remove("anime3");
  cable.classList.add("anime1");
  btn.innerHTML = "TURN OFF";
  setTimeout(() => {
    screen.classList.remove("anime4");
    screen.classList.add("anime2");
  }, 1000);
  setTimeout(() => {
    giphy.style.display = "block";
  }, 2500);
  btn.removeEventListener("click", plugIn);
  btn.addEventListener("click", plugOut);
};

const plugOut = () => {
  btn.innerHTML = "TURN ON";
  cable.classList.remove("anime1");
  cable.classList.add("anime3");
  screen.classList.remove("anime2");
  screen.classList.add("anime4");
  giphy.style.display = "none";
  btn.removeEventListener("click", plugOut);
  btn.addEventListener("click", plugIn);
};

btn.addEventListener("click", plugIn);
