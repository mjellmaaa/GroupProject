const messages = [
  "Welcome to M&R Boutique!",
  "Shop with love 💕",
  "Discover your style today!",
  "Fashion made for you ✨"
];

document.querySelector(".h1").textContent =
  messages[Math.floor(Math.random() * messages.length)];

document.querySelectorAll("h3").forEach(h3 => {
  h3.addEventListener("click", () => {
    alert("🎉 Surprise! You get 10% off today!");
  });
});


const categoryLinks = {
  dressImg: "dresses.html",
  topsImg: "tops.html",
  skirtsImg: "skirts.html",
  hoodiesImg: "hoodies.html",
  formalImg: "formal.html",
  shoesImg: "shoes.html"
};

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(categoryLinks).forEach(id => {
    const img = document.getElementById(id);
    if (img) {
      img.addEventListener("click", () => {
        window.open(categoryLinks[id], "_blank");
      });
    }
  });
});
