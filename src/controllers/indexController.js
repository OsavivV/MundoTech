var path = require('path');
var fs = require('fs');
const db = require('../database/models')

const controller = {
    index: async (req, res) => {
        const product = await db.Product.findAll({ include: [
            { model: db.Product_images, as: "product_images" },
            { model: db.Category, as: "categories" },
            { model: db.Brand, as: "brands" },
        ]
    })
    res.render('index', { products: [product] });
    },

    us: (req, res) => {
        res.render('aboutUs');
    },
    
    car: (req, res) => {
        res.render('shoppingCar');
    },

    
    
}






module.exports = controller;