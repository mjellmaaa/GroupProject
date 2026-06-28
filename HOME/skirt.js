// Select all buttons with the class "cart-btn"
const cartButtons = document.querySelectorAll(".cart-btn");

// Loop through each button and add a click event
cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("This product was added to cart!");
  });
});
