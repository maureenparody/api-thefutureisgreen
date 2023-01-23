const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Products
        .findAll()
        .then(products =>{
            return res.json(movies);
        } )
    }
}