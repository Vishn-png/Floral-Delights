(document).ready(function() {
$("#Form").submit(function(event) {
      event.preventDefault();
      
      // Perform SignIn logic here
      var username = $("#username").val();
      var password = $("#password").val();
      
      // Validate the username and password
  if (username === "example's" && password === "password123") {
          alert("Sign In successful!");
     } else {
          alert("Invalid username or password. Please try again.");
      }
  });
});


