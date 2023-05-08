var path = require('path');
var fs = require('fs');

const controller = {
    index: (req, res) => {
        res.render('index');
    },
    car: (req, res) => {
        res.render('shoppingCar');
    },
    
}






module.exports = controller;