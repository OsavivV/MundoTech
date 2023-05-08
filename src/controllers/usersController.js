const path = require('path');
const fs = require('fs');
// // const bcrypt = require('bcryptjs');
// const { json } = require('express');
// const { validationResult } = require('express-validator')


const controller = {
    register: (req, res) => {
        res.render('./users/loginRegister');
    },
    // registered: (req, res) => {
    // res.render('/');
    // },

    login: (req, res) => {
        res.render('./users/loginRegister');
    },

    // logged: (req, res) => {
    //         res.render('/');
    // },
    // profile: (req, res) => {
    //     res.render('/');
    // },
}

module.exports = controller ;