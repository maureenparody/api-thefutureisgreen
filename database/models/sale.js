 
'use strict';

module.exports = (sequelize, DataTypes) => {
    const sale = sequelize.define('Ventas', {
        id: Datatypes.INTEGER,
        user_id:Datatypes.INTEGER,
        product_id: Datatypes.INTEGER,
        payment_method_id: Datatypes.INTEGER,
        unit_amount: Datatypes.DECIMAL(10,2),
        quantity:  Datatypes.INTEGER,
        sale_detail_id:  Datatypes.INTEGER
    }
    ,{

    });

 sale.associate = function (models){

    sale.belongsTo(models.user, {   
       as: "users",
       foreignKey: "user_id"
        });
    sale.belongsTo(models.products, {   
        as: "products",
        foreignKey: "product_id"
        });
    sale.belongsTo(models.payment_method, {   
        as: "payment_method",
        foreignKey: "payment_method_id"
        });
    sale.belongsTo(models.sale_detail, {   
        as: "sale_detail",
        foreignKey: "sale_detail_id"
        });
    };


 return sale
} 


