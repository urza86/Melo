var database = require('./DBConnection.js');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var sql = require('mssql');
var path = require("path");

app.use(bodyParser.json());
database.then(function () {
    console.log(database);
    var http = require('http').Server(app);
    
    var io = require('socket.io').listen(http);
    var port = process.env.port || 1337;
    
    app.use(express.static('src'));
    app.use(express.static('src/views'));
    app.get('/test', function (req, res) {
        
        
            request = new sql.Request();
            
            request.query('SELECT * FROM Inmuebles').then(function (recordsets) {
                
                res.json({ "dataset" : recordsets });
                //res.json({ "count": "hola" });
            
        
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
app.get("/inmuebles", function (req, res) { // no funca por ahora
    
    database.then(function (data) {
        request = new sql.Request();
        
        request.query('SELECT * FROM Inmuebles').then(function (recordsets) {
            
            //res.json({ "count" : recordsets.ID });
            res.json({"recordsets": recordsets});
            
        
        });
        
    });

    //res.json(database);
    /*database.get('SELECT ID FROM Inmuebles', function (err, row) {
        res.json({ "count" : row.ID });
    });*/
});