<h2>Contact Us</h2>

<form
  action="https://formspree.io/f/mldlqbdz"
  method="POST"
  id="contact-form"
>
  <label>
    First Name:
    <input type="text" name="firstName" required>
  </label><br>

  <label>
    Last Name:
    <input type="text" name="lastName" required>
  </label><br>

  <label>
    Email:
    <input type="email" name="email" required>
  </label><br>

  <label>
    Phone:
    <input type="tel" name="phone">
  </label><br>

  <label>
    Message:
    <textarea name="message" required></textarea>
  </label><br>

  <button type="submit">Send</button>
</form>

<div id="response-message"></div>

<script>
const form = document.getElementById('contact-form');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());

  // Send to Formspree
  const response = await fetch(form.action, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: JSON.stringify(plainFormData)
  });

  if (response.ok) {
    document.getElementById('response-message').innerText = "Thank you! Your message was sent.";
    form.reset();
  } else {
    document.getElementById('response-message').innerText = "Oops! Something went wrong.";
  }
});
</script>
