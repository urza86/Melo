//var database = require('./DBConnection.js').getCon();
var database = require('./DBConnection.js');
var express = require('express');
var app = express();
var emailServer = require('./emailServer.js');
//emailServer.enviar("desde server","cecilia.toscani@gmail.com","Te amo tanto");
var bodyParser = require("body-parser");
//var sql = require('mssql');
var sql = require('mysql');
var path = require("path");
var flow = require("finally");
app.use(bodyParser.json());
var myrows;
GLOBAL.myresultspar;
function processQuery(myresultspar)
{
    GLOBAL.myresultspar = myresultspar;
    var http = require('http').Server(app);
    
    var io = require('socket.io').listen(http);
    var port = process.env.port || 1337;
    
    app.use(express.static('src'));
    app.use(express.static('src/views'));
   
   
    app.listen(3000);
};

app.get('/sendEmail', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status('200');
    res.json({});
    console.log(req.query);
    emailServer.enviar(req.query.msg,req.query.Mail,"Melo Propiedades - Pregunta",req.query.Name, req.query.Phone);
});

app.get('/test', function (req, res) {
    
    res.setHeader('Content-Type', 'application/json');
    //res.send({ "dataset" : myresultspar });
    res.json({ "dataset" : GLOBAL.myresultspar });
       // request = new sql.Request();
        
        //request.query('SELECT * FROM Inmuebles').then(function (recordsets) {
            
          //  res.json({ "dataset" : recordsets });
 
            
        
        //});
        
       
});
app.get("/", function (req, res) { res.sendFile(path.join(__dirname + '/src/views/index.html')); });    

app.get("/inmuebles", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //res.send({ "dataset" : myresultspar });
    res.json({ "dataset" : GLOBAL.myresultspar });
     
});    


app.get("/inmueble/:id", function (req, res) {
    
    var filterValue = req.params.id;
    var filteredArray = [];
    
    for( var i=0; i < GLOBAL.myresultspar.length; i++)
    {
        
        
        if (GLOBAL.myresultspar[i].ID == filterValue) {
            filteredArray.push(GLOBAL.myresultspar[i]);
        }
    }
    //console.log(GLOBAL.myresultspar[0].Direccion);
    res.setHeader('Content-Type', 'application/json');
    
    res.json({ "dataset" : filteredArray });
    
        });
        
    
database.getConnection(processQuery);



/*
database.then(function () {
    
    var http = require('http').Server(app);
    
    var io = require('socket.io').listen(http);
    var port = process.env.port || 1337;
    
    app.use(express.static('src'));
    app.use(express.static('src/views'));
    app.get('/test', function (req, res) {
        
        
            request = new sql.Request();
            
            request.query('SELECT * FROM Inmuebles').then(function (recordsets) {
                
                res.json({ "dataset" : recordsets });
 
            
        
            });
        
       
    });
    app.listen(3000);
});

app.get("/", function (req, res) { res.sendFile(path.join(__dirname + '/src/views/index.html')); });

app.get("/inmueble/:id", function (req, res) {
    
    var filterValue = req.params.id;
    
    database.then(function (data) {
        request = new sql.Request();
        var query = 'SELECT * FROM Inmuebles WHERE ID =' + filterValue;
        request.query(query).then(function (recordsets) {
            
            
            res.json({ "recordsets": recordsets });
            
        
        });
        
    });
    
    

   
});   
app.get("/inmuebles", function (req, res) { 
    
    database.then(function (data) {
        request = new sql.Request();
        
        request.query('SELECT * FROM Inmuebles').then(function (recordsets) {
            
 
            res.json({"recordsets": recordsets});
            
        
        });
        
    });

 
});*/