const cartItems = document.querySelector(".cart-items");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let subtotal = 0;

// SHFAQ PRODUKTET
function renderCart() {

    cartItems.innerHTML = "";
    subtotal = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='empty-message'>Your cart is empty.</p>";
    } else {

        cart.forEach((item, index) => {

            // nxjerr vetëm numrin nga "Price: $45"
            let priceNumber = parseFloat(item.price.replace(/[^0-9.]/g, ""));

            subtotal += priceNumber;

            cartItems.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" width="120">
                    <div class="item-info">
                        <h3>Product</h3>
                        <p>${item.price}</p>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById("subtotal").innerText = "$" + subtotal;
    document.getElementById("total").innerText = "$" + subtotal;
}

renderCart();


// CHECKOUT BUTTON
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");

        localStorage.removeItem("cart");
        cart = [];

        renderCart();
    }
}


// CLEAR CART BUTTON
function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
}