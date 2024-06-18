var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("Where Every Stem Tells a Story",10,50);


let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
  
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
   


  $(document).ready(function() {
    let cartItems = ["Product", "Price"] ;
  
    $(".add-to-cart-btn").click(function() {
      let product = $(this).data("product");
      let price = $(this).data("price");
      cartItems.push({ product, price });
  
      displayCartItems();
    });
  
    function displayCartItems() {
      let cartHtml = "";
      cartItems.forEach(item => {
        cartHtml += `<div class="cart-item">${data.product} - $${data.price}</div>`;
      });
  
      $("#cart-items").html(cartHtml);
    }
  
    $("#checkout-btn").click(function() {
      alert("Thank you for your purchase!");
      cartItems = [];
      displayCartItems();
    });
  });

 

function initMap() {
  var location = {lat: 40.7128, lng: -74.0060}; // Auckland City coordinates
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

