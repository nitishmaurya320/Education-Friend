const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "nitishmaurya2255@gmail.com",
    pass: "ozip obxk njhh kpkr",
  },
});

// Wrap in an async IIFE so we can use await.
const SendEmail=async ()=>{
    try {
          const info = await transporter.sendMail({
                from: '"Nitish Maurya" <nitishmaurya2255@gmail.com>',
                to: "mauryasaksham393@gmail.com",
                subject: "Hello ✔",
                text: "Hello world?", // plain‑text body
                html: "<b>Hello world?</b>", // HTML body
  });
  console.log(info)
    } catch (error) {
        console.log(error)
    }
}

module.exports={transporter}