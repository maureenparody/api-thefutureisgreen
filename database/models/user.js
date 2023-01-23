
'use strict';

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('Usuarios', {
        id: Datatypes.INTEGER,
        name:  Datatypes.STRING(80),
        surname: Datatypes.STRING(80),
        email:  Datatypes.STRING(90),
        password: Datatypes.STRING(255),
        address_street: Datatypes.STRING(100),
        address_extra:  Datatypes.STRING(100),
        address_city: Datatypes.STRING(100),
        address_zipcode:  Datatypes.INTEGER,
        address_state: Datatypes.STRING(100),
        profile_image: Datatypes.STRING(255),
        telephone: Datatypes.INTEGER,
        role_id: Datatypes.INTEGER
        }
        ,{

        });

        users.associate = function (models){

            users.belongsTo(models.role, {   
       as: "rol",
       foreignKey: "role_id"
        });

        users.hasMany(models.sale, {
         as: "venta",
         foreignKey: "user_id"
        });
    };
  
 return users
} 
