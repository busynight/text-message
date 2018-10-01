const gmailProvider = require('gmail-send');
const credentials = require('./credentials.json');

const { gmail, phone } = credentials;

const toEmail = require('./lib/providers')(phone.number, phone.provider)

const send = gmailProvider({
    //var send = require('../index.js')({
    user: gmail.email,
    // user: credentials.user,                  // Your GMail account used to send emails
    pass: gmail.password,
    // pass: credentials.pass,                  // Application-specific password
    to: toEmail,
    // to:   credentials.user,                  // Send to yourself
    // you also may set array of recipients:
    // [ 'user1@gmail.com', 'user2@gmail.com' ]
    // from:    credentials.user,            // from: by default equals to user
    // replyTo: credentials.user,            // replyTo: by default undefined
    // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
    subject: 'Notification',
    text: 'test', // Plain text
    //html:    '<b>html text</b>'            // HTML
});

send(console.log)
