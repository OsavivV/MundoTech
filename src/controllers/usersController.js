// const path = require('path');
// const fs = require('fs');
const bcrypt = require('bcryptjs');
// const { json } = require('express');
const { validationResult } = require('express-validator') 

const db = require('../database/models')


const controller = {
    register: (req, res) => {
        res.render('./users/loginRegister');
    },

    registered: (req, res) => {
        let signUpValid = validationResult (req);

        if (!signUpValid.isEmpty()) {
            return res.render ( 'users/loginRegister' , {
                errors: signUpValid.mapped(),
                oldData: req.body,
                form: "register"
            });
        }

        let password = bcrypt.hashSync (req.body.password, 10 )

        db.User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email: req.body.email,
            password: password 
        });

    res.redirect("/notfound")
    
    },

    login: (req, res) => {
        res.render('./users/loginRegister');
    },

    logged: (req, res) => {
        let signInValid = validationResult (req);

        if (!signInValid.isEmpty()) {
            return res.render ( 'users/loginRegister' , {
                errors: signInValid.mapped(),
                oldData: req.body,
                form: "login"
            });
        }
    },

    profile: (req, res) => {
        res.render('users/profile');
    },
}

module.exports = controller ;