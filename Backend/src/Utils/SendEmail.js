import nodemailer from 'nodemailer';


class SendEmail {

    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abdullacp9048@gmail.com',
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });




    sendOtpEmail = async (email, otp) => {
        const mailOptions = {
            from: '"MediTurn" <abdullacp9048@gmail.com>',
            to: email,
            subject: 'Your OTP',
            html: `
                <div style="font-family: Arial, sans-serif; text-align: center;">
                    <h2>Welcome to MediTurn</h2>
                    <p>Use the following OTP to complete your verification. This code is valid for 5 minutes.</p>
                    <h1 style="color: #2563eb; letter-spacing: 5px;">${otp}</h1>
                    <p>If you did not request this, please ignore this email.</p>
                </div>
            `
        };

        try {
            await this.transporter.sendMail(mailOptions);
            return { message: "OTP sent successfully to", email };
        } catch (error) {
            console.error("Error sending email:", error);
            throw error;
        }
    };
}

export default SendEmail;