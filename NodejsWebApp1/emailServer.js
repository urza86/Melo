var email = require('./node_modules/emailjs');
var serverEmail = email.server.connect({//aca va melo
    user: 'bandinjavier@gmail.com', 
    password: 'cecilia2009', 
    host: "smtp.gmail.com", 
    port: 465,
    ssl: true
   
});

// send the message and get a callback with an error or details of the message that was sent 

     var enviar= module.exports.enviar=function(body,fromCliente,mySubject,name,phone){
        
    var completeBody = "Contacto: "+name + "\n"  +"Email: "+ fromCliente + "\n" + "\n"+"Telefono: "+phone+"\n"+"Consulta: \n"+body ;
        serverEmail.send({
            text: completeBody, 
            from: "Melo Propiedades Online<" + fromCliente + ">", //aca va melo
            to: "Interesado <bandin.javier@gmail.com>", //aca va melo
            subject: mySubject
        }, function (err, message) { console.log(err || message); });
    }



