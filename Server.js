port = 3090;

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'patata',
    database: 'ORMGuillemMartinez'
});
const app = require('express')();

let express = require('express');
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.listen(port, () => {
    console.log(`Servidor iniciat a ${port}`);
});

connection.connect(function(err) {

    if (err) {
        console.log('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected successfully.');
});
const {crearConfigBaseDades} = require('app/db.config.js');


const db = crearConfigBaseDades();
const {getModelCity} = require('./app/models/city.model');

const City = getModelCity(db);
const {getModelCountry} = require('./app/models/country.model');
const Country = getModelCountry(db);
const initmodels = require('models/init-models');
const {Sequelize} = require("sequelize");
const {dept, doctor, empleat, hospital, malalt, plantilla, sala} = initmodels(db);


db.sync().then(() => {
    console.log('Drop and re-sync db.');
});

