'use strict';

module.exports = (sequelize, DataTypes) => {
    const product_category = sequelize.define('Categories', {
        id: Datatypes.INTEGER,
        name: Datatypes.STRING(45),
        }
        ,{
    
        });

        product_category.associate = function (models){

            product_category.hasMany(models.products, {
       as: "products",
       foreignKey: "product_category_id"
        });
};

 return product_category
} 


