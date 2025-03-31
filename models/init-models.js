var DataTypes = require("sequelize").DataTypes;
var _datos_de_compra = require("./datos_de_compra");
var _productos = require("./productos");
var _usuari = require("./usuari");

function initModels(sequelize) {
  var datos_de_compra = _datos_de_compra(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var usuari = _usuari(sequelize, DataTypes);

  datos_de_compra.belongsTo(productos, { as: "producto_producto", foreignKey: "producto"});
  productos.hasMany(datos_de_compra, { as: "datos_de_compras", foreignKey: "producto"});

  return {
    datos_de_compra,
    productos,
    usuari,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
