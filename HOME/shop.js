const messages = [
  "Welcome to M&R Boutique!",
  "Shop with love 💕",
  "Discover your style today!",
  "Fashion made for you ✨"
];

document.querySelector(".h1").textContent =
  messages[Math.floor(Math.random() * messages.length)];


// Select all h3 elements
document.querySelectorAll("h3").forEach(h3 => {
  h3.addEventListener("click", () => {
    alert("🎉 Surprise! You get 10% off today!");
  });
});


