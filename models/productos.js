const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    idProducto: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    nombreProducto: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcionProducto: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    categoriaProducto: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    precioProducto: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    stockProducto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cantidadCarrito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    porcentajeDescuentoProducto: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProducto" },
        ]
      },
    ]
  });
};
