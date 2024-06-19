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



  