---
title: Home
layout: page
---

<!-- Paste the full elegant HTML landing page here -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><%= config.title %></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
      line-height: 1.6;
    }
    a { text-decoration: none; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
    #hero {
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      color: white;
      text-align: center;
      padding: 100px 2rem;
    }
    #hero h1 { font-size: 3rem; margin-bottom: 1rem; }
    #hero p { font-size: 1.2rem; margin-bottom: 2rem; }
    .btn {
      display: inline-block;
      padding: 0.8rem 2rem;
      background: #fff;
      color: #2575fc;
      font-weight: bold;
      border-radius: 5px;
      transition: 0.3s;
    }
    .btn:hover { background: #f0f0f0; }
    /* Features */
    #features {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      padding: 80px 0;
      background: #f7f7f7;
    }
    .feature-card {
      background: #fff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      flex: 1;
      min-width: 250px;
      max-width: 300px;
      text-align: center;
      transition: transform 0.3s;
    }
    .feature-card:hover { transform: translateY(-10px); }
    .feature-card h3 { margin-bottom: 1rem; }
    .feature-card p { color: #555; }
    /* About Section */
    #about {
      padding: 80px 2rem;
      text-align: center;
    }
    #about h2 { margin-bottom: 1rem; }
    #about p { max-width: 800px; margin: 0 auto; color: #555; }
    /* Contact Section */
    #contact { background: #f7f7f7; padding: 80px 2rem; }
    #contact h2 { text-align: center; margin-bottom: 2rem; }
    #contact-form {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    #contact-form input, #contact-form textarea {
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;
      font-size: 1rem;
    }
    #contact-form button {
      padding: 0.8rem;
      border: none;
      background: #2575fc;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
    }
    #contact-form button:hover { background: #6a11cb; }
    #response-message { text-align: center; margin-top: 1rem; font-weight: bold; color: green; }
    /* Footer */
    footer {
      background: #333;
      color: #fff;
      text-align: center;
      padding: 2rem;
    }
    @media (max-width: 768px) {
      #features { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>

  <!-- Hero Section -->
  <section id="hero">
    <div class="container">
      <h1>Welcome to My Hexo Site</h1>
      <p>Elegant landing page template for your website built with Hexo and Netlify</p>
      <a href="#contact" class="btn">Get Started</a>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="container">
    <div class="feature-card">
      <h3>Fast</h3>
      <p>Optimized for speed and performance to give users a smooth experience.</p>
    </div>
    <div class="feature-card">
      <h3>Responsive</h3>
      <p>Looks great on all devices, from mobile phones to large desktops.</p>
    </div>
    <div class="feature-card">
      <h3>Customizable</h3>
      <p>Easily modify content, layout, and styling to match your brand.</p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <div class="container">
      <h2>About This Site</h2>
      <p>This is a modern landing page built with Hexo, styled with CSS, and hosted on Netlify. You can add more sections, images, and interactive features as needed.</p>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Us</h2>
    <form action="https://formspree.io/f/mldlqbdz" method="POST" id="contact-form">
      <input type="text" name="firstName" placeholder="First Name" required>
      <input type="text" name="lastName" placeholder="Last Name" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="tel" name="phone" placeholder="Phone">
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <div id="response-message"></div>
  </section>

  <!-- Footer -->
  <footer>
    &copy; 2025 My Hexo Site. All rights reserved.
  </footer>

  <!-- Formspree JS -->
  <script>
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const plainFormData = Object.fromEntries(formData.entries());

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

</body>
</html>
