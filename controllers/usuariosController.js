const { response } = require('express');
const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.user
        .findAll()
        .then(usuarios =>{
            return res.status(200).json({
                total: usuarios.length,
                data: usuarios,
                status:200            
        });
        } )
    },
    show: (req,res)=>{
        db.user
        .findByPk(req.params.id)
        .then (usuarios =>{
            return res.status(200).json({
                data:usuarios,
                status: 200
            })
        })
    },
    store : (req,res)=>{
        db.user
        .create(req.body)
        .then (usuarios =>{
            return res.status(200).json({
                data:usuarios,
                status: 200,
                created: 'ok'
            })
        })

    },
    delete: (req,res)=>{
        db.user
        .destroy({
        where: {
            id: req.params.id
        }
    })
        .then((response) => {
            return res.json(response)
        })
    },
    search : (req, res)=>{
        db.user
        .findAll({
            where: {
                name: { [Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then(usuarios =>{
            return res.status(200).json(productos)
        })
    }
}