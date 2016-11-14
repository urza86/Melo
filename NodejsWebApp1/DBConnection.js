var sql = require('mssql');
var syncFlow = require('finally');
var conn;
var records;
var request;
function connectToDB() {
    var DBConnection = {
        user: "javier",
        password: "cecilia2003",
        server: "localhost\\SQLEXPRESS",
        database: "MeloPropiedades",
        port: "31642"
    };
    
    conn = new sql.connect(DBConnection);
    return conn;
        
};

module.exports = connectToDB();
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



