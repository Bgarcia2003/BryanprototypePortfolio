// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Optional: Validate input fields here before showing success message

      // Show confirmation message
      formMsg.textContent = "Message sent! I'll get back to you soon.";
      formMsg.style.color = "green";

      // Reset form
      contactForm.reset();

      // Clear message after 5 seconds
      setTimeout(() => {
        formMsg.textContent = "";
      }, 5000);
    });
  }
});
