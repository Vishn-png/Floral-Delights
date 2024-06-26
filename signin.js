function toggleSignIn() {
  $('#signInModalUnique').modal('toggle');
}

// Handle form submission
$('#signInForm').submit(function(event) {
  event.preventDefault();
  
  // Perform validation and sign in logic here
  var username = $('#username').val();
  var password = $('#password').val();

  // For demonstration purposes, simply log the inputs
  console.log("Username: " + username);
  console.log("Password: " + password);

  // You can perform actual sign-in logic (e.g., AJAX request to server) here
  // Replace this with your own authentication logic
   // Clear the form fields
   $('#username').val('');
   $('#password').val('');

   // Close the modal
 });

 function signIn() {
  // Add your sign-in logic here
  alert("Signed in successfully!");
}

