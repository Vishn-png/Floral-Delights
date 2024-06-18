

$(document).ready(function() {
    let cartItems = [];
  
    $(".add-to-cart-btn").click(function() {
      let product = $(this).data("product");
      let price = $(this).data("price");
      cartItems.push({ product, price });
  
      displayCartItems();
    });
  
    function displayCartItems() {
      let cartHtml = "";
      cartItems.forEach(item => {
        cartHtml += `<div class="cart-item">${item.product} - $${item.price}</div>`;
      });
  
      $("#cart-items").html(cartHtml);
    }
  
    $("#checkout-btn").click(function() {
      alert("Thank you for your purchase!");
      cartItems = [];
      displayCartItems();
    });
  });
  