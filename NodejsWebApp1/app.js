var syncFlow = require('finally');


syncFlow(function () {
    
    var database = require('./DBConnection.js');
    console.log(database.rows);

}).then(function (err, recordset) { console.log(recordset) });



var server = require('./server.js');