const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fafd6f646169e2",
      pass: "fcdf23d49de4e5"
    }
  })