function getVerificationEmailTemplate(code) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f6f8;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        color: #333333;
      }
      h1 {
        color: #007bff;
        font-size: 24px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 30px;
      }
      .code {
        font-size: 28px;
        font-weight: bold;
        letter-spacing: 6px;
        background-color: #f0f0f0;
        padding: 12px 20px;
        border-radius: 6px;
        display: inline-block;
        margin-bottom: 30px;
        color: #007bff;
        user-select: all;
      }
      .footer {
        font-size: 12px;
        color: #888888;
        margin-top: 40px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Email Verification</h1>
      <p>Hello,</p>
      <p>Thank you for registering with us! Please use the following verification code to complete your registration:</p>
      <div class="code">${code}</div>
      <p>If you did not request this verification, please ignore this email.</p>
      <p>Thanks,<br/>The Team</p>
      <div class="footer">© 2025 Your Company. All rights reserved.</div>
    </div>
  </body>
  </html>
  `;
}

module.exports = {getVerificationEmailTemplate};
