$(document).ready(function () {
  let cartItems = [];

  // Check if there are items in localStorage and load them
  if (localStorage.getItem('cartItems')) {
    cartItems = JSON.parse(localStorage.getItem('cartItems'));
    updateCartCount();
    displayCartItems();
  }

  $(".add-to-cart-btn").click(function () {
    let product = $(this).data("product");
    let price = parseFloat($(this).data("price")); // Ensure price is parsed as float

    cartItems.push({ product, price });

    // Update localStorage with the new cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update cart count and display cart items
    updateCartCount();
    displayCartItems();
  });

  function displayCartItems() {
    let cartHtml = "";
    cartItems.forEach((item) => {
      cartHtml += `<div class="cart-item">${item.product} - $${item.price}</div>`;
    });

    $("#cart-items").html(cartHtml);
  }

  function updateCartCount() {
    $("#cart-count").text(cartItems.length);
  }


$("#total-amount-btn").click(function() {
    let cartHtml = "";
    let totalAmount = 0;

    cartItems.forEach((item) => {
      cartHtml += `<div class="cart-item">${item.product} - $${item.price}</div>`;
      totalAmount += item.price;
    });

    cartHtml += `<div class="cart-total">Total Amount: $${totalAmount}</div>`;

    $("#cart-items").html(cartHtml);
});






  $("#checkout-btn").click(function () {
    alert("Thank you for your purchase!");
    // Clear cartItems and localStorage
    clearCart();
    updateCartCount();
    displayCartItems();
  });

  // Clear cartItems and localStorage when Clear Cart button is clicked
  $("#clear-cart-btn").click(function () {
    clearCart();
    updateCartCount();
    displayCartItems();
  });

  function clearCart() {
    cartItems = []; // Clear the cartItems array
    localStorage.removeItem('cartItems'); // Remove cartItems from localStorage
  }

  // Toggle cart container visibility when Cart link is clicked
  $("#cart-link").click(function (e) {
    e.preventDefault();
    $("#cart-container").toggle();
  });
});

$("button").click(function(){
  $("div").clearQueue();
});
