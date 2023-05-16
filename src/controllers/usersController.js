const path = require('path');
const fs = require('fs');
// // const bcrypt = require('bcryptjs');
// const { json } = require('express');
const { validationResult } = require('express-validator') 

// const { User }  = require("../database/models")

const controller = {
    register: (req, res) => {
        res.render('./users/loginRegister');
    },

    registered: (req, res) => {
        const resultValidation = validationResult (req);

        if (!resultValidation.isEmpty()) {
            return res.render ( 'users/loginRegister' , {
                errors: resultValidation.mapped(),
                oldData: req.body,
                form: "register"
            });
        }

        let password = 

        User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email: req.body.email,
            password: req.body.password,


        })

        res.redirect('/')
    
    },

    login: (req, res) => {
        res.render('./users/loginRegister');
    },

    profile: (req, res) => {
        res.render('/');
    },
}

module.exports = controller ;