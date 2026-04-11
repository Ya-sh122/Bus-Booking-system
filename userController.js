const db = require('../db/db-connection');

//POST users
exports.addUser = (req,res)=>{
    const {name, email}= req.body;

    const sql= 'INSERT INTO USERS (name, email) VALUES(?,?)';
    db.query(sql, [name, email], (err, result)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json({message: 'User added successfully'});
    });
};



//GET users
exports.getUsers = (req,res)=>{
    const sql = 'SELECT * FROM users';
    db.query(sql,(err, result)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json(result);
    });
};
