const Router = require('express').Router;
const router = Router();

/* GET home page. */

const indexControllers = require('../controllers/indexController');

router.get('/', indexControllers.index);

router.get('/aboutUs', indexControllers.us);

// router.get('/shoppingCar', indexControllers.car)





  module.exports = router;

