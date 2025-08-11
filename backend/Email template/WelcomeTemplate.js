function getWelcomeEmailTemplate(userName) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Our Service</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 0;
        color: #333333;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      h1 {
        color: #28a745;
        font-size: 28px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 25px;
      }
      .btn {
        display: inline-block;
        background-color: #28a745;
        color: #ffffff !important;
        text-decoration: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: bold;
      }
      .footer {
        font-size: 12px;
        color: #888888;
        text-align: center;
        margin-top: 40px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome, ${userName}!</h1>
      <p>Thank you for joining our community. We're thrilled to have you on board.</p>
      <p>Explore our platform and start enjoying all the features we offer.</p>
      <p><a href="https://yourwebsite.com/login" class="btn">Get Started</a></p>
      <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
      <p>Best regards,<br/>The Team</p>
      <div class="footer">© 2025 Your Company. All rights reserved.</div>
    </div>
  </body>
  </html>
  `;
}

module.exports = { getWelcomeEmailTemplate };
