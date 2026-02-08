const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const celebration = document.getElementById("celebration");

/* NO button runs away */
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* YES clicked */
yesBtn.addEventListener("click", () => {
  questionBox.style.display = "none";
  celebration.classList.remove("hidden");
  startFireworks();
  heartRain();
});

/* Heart rain */
function heartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "2rem";
    heart.style.animation = "fall 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 150);
}

/* Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }, 80);
}

/* CSS for heart rain */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
