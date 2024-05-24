function validateForm() {
    var fullname = document.getElementById("yourname").value;
    var email = document.getElementById("emailaddress").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var phone = document.getElementById("phone").value;
  
    var errors = [];
  
    if (!fullname.trim()) {
      errors.push("Full Name is required");
    }
  
    if (!email.trim()) {
      errors.push("Email Address is required");
    }
  
    if (!password.trim()) {
      errors.push("Password is required");
    } else if (!isStrongPassword(password)) {
      errors.push("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)");
    }
  
    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }
  
    if (errors.length > 0) {
      var errorMessage = "<ul>";
      errors.forEach(function(error) {
        errorMessage += "<li>" + error + "</li>";
      });
      errorMessage += "</ul>";
      document.getElementById("errorMessages").innerHTML = errorMessage;
      document.getElementById("submissionMessage").innerHTML = "";
      return false;
    } else {
      document.getElementById("errorMessages").innerHTML = "";
      document.getElementById("submissionMessage").innerHTML = "Submitting...";
      // Simulate form submission (replace this with your actual form submission code)
      setTimeout(function() {
        document.getElementById("submissionMessage").innerHTML = "Your application was successfully submitted. Sheridan will contact you soon.";
      }, 2000); // Simulate 2 seconds delay for submission
      return true;
    }
  }
  
  function isStrongPassword(password) {
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordPattern.test(password);
  }
  
  var navLinks = document.getElementById("navLinks");
  
  function showmenu() {
    navLinks.style.right = "0";
  }
  
  function hidemenu() {
    navLinks.style.right = "-200px";
  }
  