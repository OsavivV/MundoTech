const path = require("path");
const db = require('../database/models')
const { validationResult } = require('express-validator')

const controller = {

    list: async (req, res) => {

        const products = await db.Product.findAll({ include: [{ model: db.Product_images, as: "product_images" }] })

        res.render('./products/indexProduct', { products });

    },


    detail: async (req, res) => {
        const product = await db.Product.findByPk(req.params.id, {
            include: [
                { model: db.Product_images, as: "product_images" },
                { model: db.Category, as: "categories" },
                { model: db.Brand, as: "brands" },
            ]
        })
        res.render('./products/detailProduct', { products: [product] });
    },

    create: async (req, res) => {

        const categories = await db.Category.findAll();
        const brands = await db.Brand.findAll();

        res.render('./products/createProduct',
            { categories, brands });


    },

    save: async (req, res) => {

        // let productValidations = validationResult (req)

        // if (!productValidations)

        const product = await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            processor: req.body.processor,
            ram: req.body.ram,
            memory: req.body.memory,
            status: req.body.status,
            discount: req.body.discount,
            purchasePrice: req.body.purchasePrice,
            salePrice: req.body.salePrice,
            categories_id: req.body.categories,
            brands_id: req.body.brand
        });

        if (req.file) {
            await db.Product_images.create({
                url: req.file.filename,
                isPrimary: true,
                products_id: product.id
            })
        }
        console.log(req.file)
        res.redirect('/products/indexProduct')


    },

    edit: async (req, res) => {
        let categories = await db.Category.findAll();
        let brands = await db.Brand.findAll();


        db.Product.findByPk(req.params.id, {
            include: [
                { model: db.Product_images, as: "product_images" },
                { model: db.Category, as: "categories" },
                { model: db.Brand, as: "brands" },
            ]
        }).then(function (product) {
            res.render('./products/editProduct', { categories, brands, product });

        })
    },

    update: async (req, res) => {

        const product = await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            processor: req.body.processor,
            ram: req.body.ram,
            memory: req.body.memory,
            status: req.body.status,
            discount: req.body.discount,
            purchasePrice: req.body.purchasePrice,
            salePrice: req.body.salePrice,
            categories_id: req.body.categories,
            brands_id: req.body.brand
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products/detail/' + req.params.id)
    },

    destroy: async (req, res) => {

        await db.Product_images.destroy({
            where: {
                products_id: req.params.id
            }
        })

        await db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products/indexProduct');
    },
}

module.exports = controller;