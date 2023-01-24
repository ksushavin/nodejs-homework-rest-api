
const sgMail = require("@sendgrid/mail");

require("dotenv").config();
const { SEND_GRID_API_KEY } = process.env;

sgMail.setApiKey(SEND_GRID_API_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: "azov13@meta.ua" };
    await sgMail.send(email);
    console.log("send success");
    return true
}

module.exports = sendEmail;