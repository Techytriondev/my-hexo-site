const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // set in Netlify
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email, // user email
    subject: "Thanks for contacting us!",
    text: `Hi ${data.firstName}, we received your message: ${data.message}`
  });

  return { statusCode: 200, body: JSON.stringify({ message: "Email sent" }) };
};
