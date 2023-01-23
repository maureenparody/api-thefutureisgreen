'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define('Productos', {
        id: Datatypes.INTEGER,
        name: Datatypes.STRING(100),
        brand:  Datatypes.STRING(45),
        detail:  Datatypes.STRING(10000),
        price:  Datatypes.DECIMAL(10,2),
        discount: Datatypes.INTEGER(100),
        image:  Datatypes.STRING(1000),
        expiration_date: Datatypes.DATE,
        creation_date: Datatypes.DATE,
        delete_date:  Datatypes.DATE,
        product_category_id: Datatypes.INTEGER,
        supplier_id:  Datatypes.INTEGER,
    },{

    });
    productos.associate = function (modelos){

        productos.belongsTo(modelos.product_category, {   
           as: "categoria_producto",
           foreignKey: "product_category_id"
            });
        productos.belongsTo(modelos.supplier, {   
            as: "provedor",
            foreignKey: "supplier_id"
            });
    
        productos.hasMany(modelos.sale, {
            as: "venta",
            foreignKey: "product_id"
            });
        }
    return products
}


        
 