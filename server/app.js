const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
 
 

function sendEmail({ email, subject, message, emailAddress, phone, name }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.sanly.tm",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "k.guvanch@sanly.tm",
        pass: "99363388731gK!",
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
    });

    const mail_configs = {
      from: "k.guvanch@sanly.tm",
      to: "info@sahetli.com",
      name: name,
      phone: phone,
      subject: subject,
      emailAddress: emailAddress,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333; border: 1px solid #e0e0e0; border-radius: 10px;">
      <h2 style="text-align: center; color: #274092ff; margin-bottom: 20px;">Новое сообщение</h2>
      <div style="padding: 10px; background-color: #fff; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <p><strong>Имя отправителя:</strong> ${name}</p>
        <hr>
        <p><strong>Телефон отправителя:</strong> ${phone}</p>
        <hr>
        <p><strong>E-mail адрес отправителя:</strong> ${emailAddress}</p>
        <hr>
        <p><strong>Письмо отправителя:</strong></p>
        <div style="padding: 15px; border-left: 4px solid #274092ff; background-color: #f0f0f0; border-radius: 5px;">
          ${message}
        </div>
      </div>
      <p style="margin-top: 20px; font-size: 0.9em; color: #777;">Это сообщение было отправлено с веб-сайта <a href="https://sahetli.com/" style="color: #274092ff; text-decoration: none;">sahetli.com</a></p>
    </div>
      `,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
        return reject({ message: `An error has occurred: ${error.message}`, error });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.get("/api", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => {
      console.error("Error in sendEmail:", error);
      res.status(500).send(error.message);
    });
});



app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
