let cartCount = document.getElementById('cart-count');
let shoppingCart = [];
let count = 0;
const herbBasil = document.getElementById('basil');
const basilModal = document.getElementById('basilModal');
const closeButton = document.getElementsByClassName('close');
const orderButton = document.getElementById('orderButton');

//Reveal modal when user clicks any items within the 'figure' tag
herbBasil.addEventListener('click', function () {
  basilModal.style.display = 'block';
});

//Hide modal when user clicks close button
closeButton[0].addEventListener('click', function () {
  basilModal.style.display = 'none';
});

//When "Add to Cart" button is clicked, add item to Shopping Cart and show number of items in cart
orderButton.addEventListener('click', function () {
  shoppingCart.push('basil');
  count = shoppingCart.length;
  cartCount.style.display = 'inline';
  cartCount.textContent = count;
  console.log(shoppingCart);
});
