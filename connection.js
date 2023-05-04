const mysql = require("mysql");
const con = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'8904janku',
    database:'student_erp',
    port:3306
});

    con.connect((err)=>{
        if(err){

        console.log(err); 
        } 
        else{
            console.log("connection created..!!");
        }

    })

    module.exports.con =con;