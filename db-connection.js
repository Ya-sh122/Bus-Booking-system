const mysql = require('mysql2');


const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Root123',
    database: 'busdb',
    multipleStatements: true
});



connection.connect((err)=>{
    if(err){
        console.log('DB connection failed:', err.message);
        return;
    }
    console.log('Connection has been created');

});


module.exports= connection;