const path = require('path');
const fs = require('fs');
// // const bcrypt = require('bcryptjs');
// const { json } = require('express');
const { validationResult } = require('express-validator') 

const User = require ('../database/models/User')

const controller = {
    register: (req, res) => {
        res.render('./users/loginRegister');
    },

    registered: (req, res) => {
        const resultValidation = validationResult (req);

        if (resultValidation.errors.length > 0 ) {
            return res.render ( './users/loginRegister' , {
                error: resultValidation.mapped(),
                oldData: req.body
            });
        }
    
    },

    login: (req, res) => {
        res.render('./users/loginRegister');
    },

    profile: (req, res) => {
        res.render('/');
    },
}

module.exports = controller ;