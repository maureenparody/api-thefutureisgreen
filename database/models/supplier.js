'use strict';

module.exports = (sequelize, DataTypes) => {
    const supplier = sequelize.define('Suppliers', {
        id: Datatypes.INTEGER,
        name: Datatypes.STRING(45),
        telephone:  Datatypes.INTEGER,
        email: Datatypes.STRING(80)
    }
    ,{

    });

 supplier.associate = function (models){

    supplier.hasMany(models.products, {
       as: "products",
       foreignKey: "supplier_id"
        });
};

 return supplier
} 

