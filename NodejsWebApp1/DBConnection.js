//var sql = require('mssql');
var mysql = require('mysql');
var syncFlow = require('finally');
var conn;

var request;
/*function connectToDB() {
    var DBConnection = {
        user: "javier",
        password: "cecilia2003",
        server: "localhost\\SQLEXPRESS",
        database: "MeloPropiedades",
        port: "31642"
    };
    
    conn = new sql.connect(DBConnection);
    return conn;
        
};*/
 
    /*var getConnection = function () {
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'cecilia2001',
            database : 'melopropiedades',
            port: '3306'
        });
    connection.csonnect();
    connection.query('SELECT * From inmuebles', function (err, rows, fields) {
        //if (err) throw err;
        records = row;
        console.log(records);
        return records;
    });
    
    };*/
    //pasar array de callbacks
     var getConnection = function (mycallback) {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'cecilia2001',
        database : 'melopropiedades',
        port: '3306'
    });
    connection.connect();
    var query = connection.query('SELECT * From inmuebles', function (err, rows, fields) {
        //if (err) throw err;
        
        myrecords = rows;
        mycallback(rows);
        //console.log(myrecords);    
       // mycallback(myrecords);
       // module.exports.AllRecords = rows;
       // console.log(module.exports.AllRecords);
    });
    
    connection.end();
    
    
    }

module.exports.getConnection = getConnection;
/*module.exports.myval = 5;
getConnection(records);
console.log(records);*/

//getConnection(records);  


        //connection.query('SELECT * From inmuebles', function (err, rows, fields) {
            //if (err) throw err;
             //   records = row;
          //  console.log('The solution is: ', rows[0]);

        //});

        //connection.end();


//module.exports = records;
//module.exports = connectToDB();
/*
function retrieveAll(db){
            db.then(function (data) { 
                     request = new sql.Request();
        
                    request.query('SELECT * FROM Inmuebles').then(function (recordsets) {
                    records = recordsets;
                    
                        return records;
            
        
                    })

            });

};*/



