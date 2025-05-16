// Handles contact form submission (optional behavior)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.textContent = "Message sent! I'll get back to you soon.";
      form.reset();
    });
  }
});
