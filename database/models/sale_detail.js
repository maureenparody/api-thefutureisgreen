'use strict';

module.exports = (sequelize, DataTypes) => {
    const sale_detail = sequelize.define('Detalleventa', {
        id: Datatypes.INTEGER,
        date: Datatypes.DATE,
        total_amount: Datatypes.DECIMAL(65,00)
    }
    ,{

    });

    sale_detail.associate = function (models){

        sale_detail.hasMany(models.sale, {
       as: "sale",
       foreignKey: "sale_detail_id"
        });
};

 return sale_detail
} 

