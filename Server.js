port = 3090;

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'patata',
    database: 'projecteahiramguilleene'
});

let express = require('express');
const app = express();
const path = require('path')

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
const {crearConfigBaseDades} = require('./db.config.js');


const db = crearConfigBaseDades();

const initmodels = require('./models/init-models');
const {Sequelize} = require("sequelize");
const {usuari, productos, datos_de_compra} = initmodels(db);



// conexio imatges
app.use('/img', express.static(path.join(__dirname, 'assets/img')));


db.sync().then(() => {
    console.log('Drop and re-sync db.');
});

