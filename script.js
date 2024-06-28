
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
    
    setTimeout(showSlides, 2000); 
  }




  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

     var formData = new FormData(this);
    
    var responseDiv = document.getElementById('response');
    responseDiv.classList.remove('d-none'); 
    
    this.reset();
  });
  
  
 
  document.getElementById('message').addEventListener('input', function() {
    var message = this.value;
    var words = message.trim().split(/\s+/);
    if (words.length > 20) {
      this.value = words.slice(0, 50).join(' ');
    }
  });










  