const { response } = require('express');
const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Productos
        .findAll()
        .then(productos =>{
            return res.status(200).json({
                total: productos.length,
                data: productos,
                status:200            
        });
        } )
    },
    show: (req,res)=>{
        db.Productos
        .findByPk(req.params.id)
        .then (productos =>{
            return res.status(200).json({
                data:productos,
                status: 200
            })
        })
    },
    store : (req,res)=>{
        db.Productos
        .create(req.body)
        .then (productos =>{
            return res.status(200).json({
                data:productos,
                status: 200,
                created: 'ok'
            })
        })

    },
    delete: (req,res)=>{
        db.Productos
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
        db.Productos
        .findAll({
            where: {
                name: { [Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then(productos =>{
            return res.status(200).json(productos)
        })
    }
}