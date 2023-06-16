const path = require('path');
const { body } = require('express-validator')


module.exports = [
    body('name').notEmpty().withMessage('*Tienes que escribir un nombre*'),

    body('description').notEmpty().withMessage('*Tienes que a;adir una descripcion del producto*'),

    body('processor').notEmpty().withMessage('*El campo procesador no puede estar vacio*'),

    body('ram').notEmpty().withMessage('*El campo Ram no puede estar vacio*'),

    body('memory').notEmpty().withMessage('*El campo Memoria no puede estar vacio*'),

    body('discount').notEmpty().withMessage('*El campo Descuento no puede estar vacio*'),

    body('purchasePrice').notEmpty().withMessage('*El campo Precio de distribuidor no puede estar vacio*'),

    body('salePrice').notEmpty().withMessage('*El campo Precio de venta no puede estar vacio*'),

    body('img').custom((value, { req}) => {
        let file = req.file;
        let accepted = ['.jpg', '.png', '.jpeg'];
        if (!file){
            throw new Error('*Tienes que subir una imagen*')
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!accepted.includes(fileExtension)) {
                throw new Error(`Las extensiones del archivo permitidas son ${accepted.join(', ')}`);
            }
        }
        return true;
    })
]