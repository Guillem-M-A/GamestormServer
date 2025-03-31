const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datos_de_compra', {
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    direccion2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    'codigo postal': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'metodo de pago': {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    'numero tarjeta': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'fecha de caducidad': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titular: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idcompra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producto: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: 'productos',
        key: 'idProducto'
      }
    },
    'discount code': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'importe total': {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'datos_de_compra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcompra" },
        ]
      },
      {
        name: "producto_idx",
        using: "BTREE",
        fields: [
          { name: "producto" },
        ]
      },
    ]
  });
};
