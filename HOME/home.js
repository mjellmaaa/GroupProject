document.addEventListener("DOMContentLoaded", () => {


const cartLink = document.getElementById("cart-link");


if(cartLink){

cartLink.addEventListener("click",(e)=>{

e.preventDefault();

alert("Your cart is currently empty. Start shopping!");

});

}



const products = document.querySelectorAll(".service");


products.forEach(product=>{


product.addEventListener("click",()=>{


const name =
product.querySelector("h3").innerText;


const price =
product.querySelector(".price").innerText;


alert(`${name} (${price}) added to your cart!`);


});


});


});