const mysql = require("mysql")
const Database = new mysql.createConnection({
    host: "178.33.249.31",
    user: "u480_l0SiH0OvbN",
    password: "QTIuCh^06WeM9=!Uqw61tc4m",
    database: "s480_crackgames",
})

Database.connect(function(err){
    if(err) throw err;
    console.log("Connexion réussi à la base de donnée")
})

module.exports = Database;