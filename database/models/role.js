'use strict';

module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define('Roles', {
        id: Datatypes.INTEGER,
        name: Datatypes.STRING(45),

    }
    ,{

    });

 role.associate = function (models){

    role.hasMany(models.user, {
       as: "user",
       foreignKey: "role_id"
        });
};

 return role
} 


