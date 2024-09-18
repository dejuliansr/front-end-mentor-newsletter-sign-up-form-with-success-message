document.addEventListener("DOMContentLoaded", function() {
  // Ensure modal is hidden on page load
  const successModal = document.getElementById("successModal");
  successModal.style.display = "none";
});

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input field and error message
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const successModal = document.getElementById("successModal");
  const userEmail = document.getElementById("userEmail");
  
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.(com|co\.id)$/;

  
  // Check if email matches the pattern
  if (emailPattern.test(emailInput.value)) {
    // Email is valid, hide the error message and input red border
    errorMessage.style.display = "none";
    emailInput.classList.remove("invalid");
    
    // Show the success modal
    userEmail.textContent = emailInput.value; // Show entered email in modal
    successModal.style.display = "flex"; // Display the modal
    
  } else {
    // Email is invalid, show error message and highlight input in red
    errorMessage.style.display = "block";
    errorMessage.textContent = "Valid email required"; // Pesan error
    emailInput.classList.add("invalid");
  }
});

// Event listener to close modal when dismiss button is clicked
document.getElementById("dismissBtn").addEventListener("click", function() {
  const successModal = document.getElementById("successModal");
  successModal.style.display = "none"; // Hide the modal

  document.getElementById("email").value = "";
});
