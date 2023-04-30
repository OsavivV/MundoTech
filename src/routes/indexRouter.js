const Router = require('express').Router;
const router = Router();

/* GET home page. */

const indexControllers = require('../controllers/indexControllers');

router.get('/', indexControllers.index);

  module.exports = router;

