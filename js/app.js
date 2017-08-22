let cartCount = document.getElementById('cart-count');
cartCount = 0;
let shoppingCart = [];
const herbBasil = document.getElementById('basil');
const basilModal = document.getElementById('basilModal');
const closeButton = document.getElementsByClassName('close');
const orderButton = document.getElementById('orderButton');

herbBasil.addEventListener('click', function () {
  basilModal.style.display = 'block';
});

closeButton[0].addEventListener('click', function (){
  basilModal.style.display = 'none';
});
