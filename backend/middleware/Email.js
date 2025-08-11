const {transporter}=require('./Email.config')
const {getVerificationEmailTemplate}=require('../Email template/emailTemplate')
const {getWelcomeEmailTemplate}=require('../Email template/WelcomeTemplate')

 const SendEmail=async(email,otp)=>{
         try {
                  const info = await transporter.sendMail({
                        from: '"Nitish Maurya" <nitishmaurya2255@gmail.com>',
                        to: email,
                        subject: "one time password",
                        text: "otp", // plain‑text body
                        html: getVerificationEmailTemplate(otp) // HTML body
          });
          console.log(info)
            } catch (error) {
                console.log(error)
            }
}

 const WelcomeEmail=async(email)=>{
         try {
                  const info = await transporter.sendMail({
                        from: '"Nitish Maurya" <nitishmaurya2255@gmail.com>',
                        to: email,
                        subject: "Email Verified Succeesfuly",
                        text: "Email Verified Succeesfuly", // plain‑text body
                        html: getWelcomeEmailTemplate(email) // HTML body
          });
          console.log(info)
            } catch (error) {
                console.log(error)
            }
}



module.exports={SendEmail,WelcomeEmail}