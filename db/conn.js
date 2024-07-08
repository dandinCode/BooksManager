const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("books_db", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

try{
    sequelize.authenticate();
    console.log("Conectado ao MySQL");
}catch(error){
    console.log(error);
}

module.exports = sequelize;