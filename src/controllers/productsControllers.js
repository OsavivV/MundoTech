const db = require('../database/models')

const controller = {

    list: (req, res) => {
        res.render('./products/indexProduct');
    },
    

    detail: (req, res) => {
        res.redirect('products/products');
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