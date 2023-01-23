'use strict';

module.exports = (sequelize, DataTypes) => {
    const payment_method = sequelize.define('Suppliers', {
        id:Datatypes.INTEGER,
        name:  Datatypes.STRING(45)
    }
    ,{

    });

 payment_method.associate = function (models){
    payment_method.hasMany(models.sale, {
       as: "sale",
       foreignKey: "payment_method_id"
       })
   };

 return payment_method;
} 


