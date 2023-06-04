var registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;
  var gender = document.getElementById("gender").value;
  var language = document.getElementById("language").value;
  var zipcode = document.getElementById("zipcode").value;
  var about = document.getElementById("about").value;

  // Validate form fields
  if (
    !name ||
    !email ||
    !password ||
    !phone ||
    !gender ||
    !language ||
    !zipcode ||
    !about
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Perform additional validation if needed (e.g., email format, password strength)

  // Submit registration form
  alert("Registration successful!");

  // Reset form
  registrationForm.reset();
});
