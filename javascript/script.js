document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop actual form submission

    // Get values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Simple validation
    if (!name || !email || !message) {
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = 'red';
      return;
    }

    // Simulate sending message
    msg.textContent = 'Message sent! Thank you 😊';
    msg.style.color = 'green';

    // Clear form
    form.reset();
  });
});
