const db = require('../database/models')

const controller = {

    list: async (req, res) => {

        const products = await db.Product.findAll({include: [{model: db.Product_images, as: "product_images"}]})
       
        res.render('./products/indexProduct' , {products});

    },
    

    detail: async (req, res) => {
        const product = await db.Product.findByPk(req.params.id,{include: [
            {model: db.Product_images, as: "product_images"},
            {model: db.Category, as: "categories"},
            {model: db.Brand, as: "brands"},
        ]})
        res.render('./products/indexProduct' , {products:[product]});
    },

    create: (req, res) => {
        res.redirect('products/products');
    },

    save: async (req, res) => {
        // recibo los datos del producto en req.body
        // creo el producto con const productCreated = await db.Product.create ({ name})
        // armo el array para crear los colores del producto const colorsToCreate = req.body.colors.map(color => {
        //    return {
        //    colors_id: color ,
        //    products_id: productCreated.id
        //      }
        //  })
        //  despues de tener el array de colores del prducto creado, inserto esos datos en la tabla pivote osea en la tabla
        //  product_has_colors eso lo hago con await db.ProductHasColor.bulkCreate(colorsToCreate)
        res.redirect('products/products');
    },

    edit: (req, res) => {
        res.redirect('products/products');
    },

    update: (req, res) => {
        res.redirect('products/products');
    },

    destroy: (req, res) => {
        res.redirect('products/products');
    },
}

module.exports = controller ;