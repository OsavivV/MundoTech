const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers');
const productsValidations = require('../middleware/productValidationsMiddleware')
const uploadFile = require('../middleware/multerMiddleware')

router.get('/indexProduct', productsControllers.list);

router.get('/create', productsControllers.create);   

router.post('/', uploadFile.single("img"),productsValidations, productsControllers.save); 

router.get('/detail/:id', productsControllers.detail);   
 
// router.get('/editProducts/:id', productsControllers.edit);   
// router.put('/detail/:id', uploadFile.single("img"), productsControllers.update);  
// router.delete('/detail/:id', productsControllers.destroy);  


module.exports = router 