// Ruaj produktet në localStorage
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " u shtua në cart!");
}

// Hap cart.html
function viewCart() {
  window.location.href = "cart.html";
}
