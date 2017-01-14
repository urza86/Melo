var database = require('./DBConnection.js');
function func(r){
    
    console.log(r);
    
}

var valores = database.getConnection(func);
