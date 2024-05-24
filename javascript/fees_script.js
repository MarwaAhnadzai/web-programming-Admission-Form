function validateForm() {
    var fullname = document.getElementById("yourname").value;
    // Add validation for other fields here
  
    var errors = [];
  
    if (!fullname.trim()) {
      errors.push("Full Name is required");
    }
    // Add validation for other required fields here
  
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
  
  function showmenu() {
    document.getElementById("navLinks").style.right = "0";
  }
  
  function hidemenu() {
    document.getElementById("navLinks").style.right = "-200px";
  }
  