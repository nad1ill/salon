const bookingForm = document.getElementById("booking-form");
const confirmationMessage = document.getElementById("confirmation-message");
 
bookingForm.addEventListener("submit", function (event) {
  // Stop the form from refreshing the page
  event.preventDefault();
 
  // Get the values entered by the user
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
 
  // Simple if statement to check that all fields are filled in
  if (name === "" || phone === "" || service === "" || date === "") {
    confirmationMessage.style.color = "red";
    confirmationMessage.textContent = "Please fill in all fields before booking.";
  } else {
    confirmationMessage.style.color = "#2F3E2E";
    confirmationMessage.textContent =
      "Thank you, " + name + "! Your appointment for " + service +
      " on " + date + " has been booked. We will call you at " + phone + " to confirm.";
 
    // Clear the form after a successful booking
    bookingForm.reset();
  }
});
 