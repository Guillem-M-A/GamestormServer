const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuari', {
    idusuari: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuarinom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    contrasenya: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    correuelectronic: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuari',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idusuari" },
        ]
      },
    ]
  });
};
