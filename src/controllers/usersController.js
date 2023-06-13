// const path = require('path');
// const fs = require('fs');
const bcrypt = require('bcryptjs');
// const { json } = require('express');
const { validationResult } = require('express-validator') 

const db = require('../database/models')


const controller = {
    register: (req, res) => {
        res.cookie('testing', '!Primera Cookie', { maxAge:100000*8} )
        res.render('./users/loginRegister');
    },

    registered: (req, res) => {
        let signUpValid = validationResult (req);

        if (!signUpValid.isEmpty()) {
            return res.render ( './users/loginRegister' , {
                errors: signUpValid.mapped(),
                oldData: req.body,
                form: "register"
            });
        }

        let email = db.User.findOne('email', req.body.email);
            if  (email) {
                return res.render ( './users/loginRegister')
            }

        let password = bcrypt.hashSync (req.body.password, 10 )

        db.User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email: email,
            password: password 
        });

    res.redirect("/")
    
    },

    login: (req, res) => {
        res.render('./users/loginRegister');
    },

    logged: async (req, res) => {
    
        let signInValid = validationResult (req);

        if (!signInValid.isEmpty()) {
            return res.render ( './users/loginRegister' , {
                errors: signInValid.mapped(),
                oldData: req.body,
                form: "login"
            });
        };

        let user = await db.User.findOne({ where: {email : req.body.email} });
        if (user) {
            let credentialsMatch = bcrypt.compareSync (req.body.password, user.password);

            if (credentialsMatch) {
                delete user.password;
                req.session.userLogged = user;
                if (res.body.remenberME) {
                    res.cookie('userEmail', req.body.email, { maxAge: (10000 * 80)})
                }

                return res.redirect('/products/indexProduct');
            }
        }

        return res.render('./products/indexProduct')
    },

    profile: (req, res) => {
       return res.render('./users/profile', {
        user: req.session.userLogged 
    });
        
    },

    logout:(req, res) => {
        res.clearCookie['userEmail']
        req.session.destroy();
        return res.redirect('/')
    },
}

module.exports = controller ;