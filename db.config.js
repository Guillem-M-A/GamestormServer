const Sequelize = require('sequelize');
const crearConfigBaseDades =() =>{
    return new Sequelize("projecteahiramguilleene", "root", "patata", {
        host: "localhost",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });
}
module.exports = {crearConfigBaseDades}

