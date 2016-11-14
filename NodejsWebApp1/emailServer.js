var email = require('emailjs/email');
var serverEmail = email.server.connect({
    user: "jorgebandinoeste@yahoo.com.ar", 
    password: "fco130255cab", 
    host: "smtp.your-email.com", 
    port: 25,
    ssl: true
});

// send the message and get a callback with an error or details of the message that was sent 
serverEmail.send({
    text: "i hope this works", 
    from: "you <jorgebandinoeste@yahoo.com.ar>", 
    to: "someone <javi_greenday@hotmail.com>",
    subject: "testing emailjs"
}, function (err, message) { console.log(err || message); });