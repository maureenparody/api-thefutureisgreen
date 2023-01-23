const { response } = require('express');
const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Usuarios
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
        db.Usuarios
        .findByPk(req.params.id)
        .then (usuarios =>{
            return res.status(200).json({
                data:usuarios,
                status: 200
            })
        })
    },
    store : (req,res)=>{
        db.Usuarios
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
        db.Usuarios
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
        db.Usuarios
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