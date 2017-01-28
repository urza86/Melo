var email = require('./node_modules/emailjs');
var serverEmail = email.server.connect({
    user: 'bandinjavier@gmail.com', 
    password: 'cecilia2009', 
    host: "smtp.gmail.com", 
    port: 465,
    ssl: true
   
});

// send the message and get a callback with an error or details of the message that was sent 
serverEmail.send({
    text: "i hope this works", 
    from: "you <bandinjavier@gmail.com>", 
    to: "someone <javi_greenday@hotmail.com>",
    subject: "testing emailjs"
}, function (err, message) { console.log(err || message); });