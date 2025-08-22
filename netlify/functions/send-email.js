const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  // Configure transporter (example: Gmail)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // set in Netlify dashboard
      pass: process.env.EMAIL_PASS
    }
  });

  // Send email to the user
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "Thank you for contacting us!",
    text: `Hi ${data.firstName},\n\nWe received your message:\n${data.message}\n\nWe'll get back to you soon!`
  });

  return { statusCode: 200, body: JSON.stringify({ message: "Email sent" }) };
};
