const port = 7000;
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const axios = require("axios");
require("dotenv").config();
app.use(cors());

app.get("/send", (req, res) => {
  res.json("hi from backend point");
});

function sendEmail(data) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "testrunningjrun@gmail.com",
        pass: process.env.REACT_APP_PASS
      }
    });

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
    <li>Subject: ${data.subject}</li>
    <li>Email: ${data.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>`;

    // const mail_configs = {
    //   to: data.email,
    //   subject: data.subject,
    //   text: data.message
    // };

    const mail_configs = { html: output };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.post("/send", (req, res) => {
  console.log("req.body");
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at https://localhost:${port}`);
});
