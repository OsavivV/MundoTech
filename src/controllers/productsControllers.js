const path = require("path");
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

    create: async (req, res) => {

        const categories = await db.Category.findAll();
        const brands = await db.Brand.findAll();

        res.render('./products/createProduct' ,
        {categories, brands});


    },

    save: async (req, res) => {

    const product = await db.Product.create({
        name: req.body.name,
        description: req.body.description,
        processor: req.body.processor,
        ram: req.body.ram,
        memory: req.body.memory,
        status : req.body.status,
        discount : req.body.discount,
        purchasePrice: req.body.purchasePrice,
        salePrice: req.body.salePrice,
        categories_id: req.body.categories,
        brands_id: req.body.brand
    });

    if (req.file) {
        db.Product_images.create({
            url: req.file.filename,
            isPrimary: true,
            products_id: product.id
        })
    }
    console.log(req.file)
    res.redirect('/products/indexProduct')
    

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
        
    },

    editProducts: (req, res) => {
        res.redirect('products/products');
    },

    updateProducts: (req, res) => {
        res.redirect('products/products');
    },

    destroyProducts: (req, res) => {
        res.redirect('products/products');
    },
}

module.exports = controller ;