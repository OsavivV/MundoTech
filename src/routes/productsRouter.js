const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers');
const createValidations = require('../middleware/createProductValidations')
const editValidations = require('../middleware/editProductValidations')
const uploadFile = require('../middleware/multerMiddleware')

router.get('/indexProduct', productsControllers.list);

router.get('/create', productsControllers.create);   

router.post('/create', uploadFile.single("img"),createValidations, productsControllers.save); 

router.get('/detail/:id', productsControllers.detail);   
 
router.get('/edit/:id', productsControllers.edit);   
router.put('/edit/:id',editValidations, productsControllers.update);  

router.delete('/delete/:id', productsControllers.destroy);  


module.exports = router 