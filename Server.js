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

const fs= require('fs')

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
const {now} = require("sequelize/lib/utils");
const {usuari, productos, datos_de_compra} = initmodels(db);



// conexio imatges
app.use('/img', express.static(path.join(__dirname, 'assets/img')));


db.sync().then(() => {
    console.log('Drop and re-sync db.');
});


//Fitxers
app.post('/registreUsuariFitxer', (req,res)=>{
    console.log("Usuari registrat")
    console.log(req.body.email,req.body.password)
    const nomFitxer=req.body.email+"_resgistre_"+Date.now().toString()+'.log';
    fs.writeFileSync("C:\\Users\\alum-01\\Desktop\\ProjecteA4GuillemAhiramEneritz2024-2025\\"+ nomFitxer,"Correu electronic del Usuari: "+req.body.email +"\nContrasenya: "+ req.body.password)
});

app.post('/CompraUsuariFitxer', (req,res)=>{
    console.log("Compra registrada")
    console.log(req.body.nombre,req.body.apellidos, req.body.email, req.body.direccion, req.body.direccion2, req.body.pais, req.body.codigo_postal, req.body.metodo_de_pago, req.body.numero_tarjeta, req.body.fecha_de_caducidad, req.body.titular, req.body.cvv, req.body.idcompra, req.body.producto, req.body.discount_code, req.body.importe_total )
    datos_de_compra.create({})
    const nomFitxer=req.body.email+"_Activitat_Compres";
    fs.writeFileSync("C:\\Users\\alum-01\\Desktop\\ProjecteA4GuillemAhiramEneritz2024-2025\\"+ nomFitxer,datos_de_compra,{flag: "a+"})
});
