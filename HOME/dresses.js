// Select all buttons with the class "cart-btn"
const cartButtons = document.querySelectorAll(".cart-btn");

// Loop through each button and add a click event
cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("This product was added to cart!");
  });
});

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let dress = this.parentElement;

        let image = dress.querySelector("img").src;
        let price = dress.querySelector("p").innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            image: image,
            price: price
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("This product was added to cart!");

    });

});