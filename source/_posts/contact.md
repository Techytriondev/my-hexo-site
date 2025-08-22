<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" id="contact-form">
  <input type="hidden" name="form-name" value="contact">
  <p style="display:none">
    <label>Don’t fill this out: <input name="bot-field"></label>
  </p>
  
  <label>First Name: <input type="text" name="firstName" required></label><br>
  <label>Last Name: <input type="text" name="lastName" required></label><br>
  <label>Email: <input type="email" name="email" required></label><br>
  <label>Phone: <input type="tel" name="phone"></label><br>
  <label>Message: <textarea name="message" required></textarea></label><br>
  
  <button type="submit">Send</button>
</form>

<div id="response-message"></div>

<script>
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());

    // Send to Netlify Function
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
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
