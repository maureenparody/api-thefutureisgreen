'use strict';

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
    products.associate = function (models){

        products.belongsTo(models.product_category, {   
           as: "Categories",
           foreignKey: "product_category_id"
            });
            products.belongsTo(models.supplier, {   
            as: "Suppliers",
            foreignKey: "supplier_id"
            });
    
            products.hasMany(models.sale, {
            as: "Sale",
            foreignKey: "product_id"
            });
        }
    return products
}


        
 