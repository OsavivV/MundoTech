
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const db = require('../database/models')


const controller = {
    register: async (req, res) => {
        // const roles = await db.Rol.findAll();
        res.cookie('testing', '!Primera Cookie', { maxAge: 100000 * 8 });
        res.render('./users/loginRegister');
    },

    listUser: async (req, res) => {
        try {
            const users = await db.User.findAll({ include: [{ model: db.Rol, as: "roles" }] })
            res.render('./users/userList', { users });
        } catch (error) {
            console.log(error);
            res.json({ error: 'Error al obtener los usuarios' });
        }
    },

    createUser: async (req, res) => {
        try {
            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()) {
                return res.render('./users/loginRegister', {
                    errors: errors.mapped(),
                    oldData: req.body,
                    form: 'register'
                });
            }
            const { firstName, lastName, email, password } = req.body;
            const existingUser = await db.User.findOne({ where: { email } });
            if (existingUser) {
                return res.send({
                    errors: {
                        email: {
                            msg: 'El correo ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const rol = await db.Rol.findOne({ where: { name: 'Usuario' } })
            const newUser = await db.User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                roles_id: rol.id
            });
            res.redirect('/users/login');
        } catch (error) {
            console.log(error);
            res.render('./users/loginRegister', {
                errors: { error: { msg: 'Error al crear el usuario' } },
                oldData: req.body,
                form: 'register'
            });
        }
    },

    readUser: async (req, res) => {
        const user = await db.User.findByPk(req.params.id, {
            include: [
                { model: db.Rol, as: "roles" },

            ]
        });
        if (!user) {
            res.json({ error: 'Usuario no encontrado' });
        } else {
            res.json(user);
        }

    },

    updateUser: async (req, res) => {
        const user = await db.User.findByPk(req.params.id)

            const errors = validationResult(req);
            console.log(errors);
            if (!errors.isEmpty()) {
                return res.render('./users/profile', {
                    errors: errors.mapped(),
                    oldData: req.body,
                }).then(function (user) {
                    res.render('./users/profile', {user});
        
                })
            }
            
            const userTodb = await db.User.update({ 
                firstName: req.body.firstName,
                lastName: req.body.lastName, 
                email: req.body.email, 
            }, { 
                    where: {
                     id: req.params.id 
                    }
                })
            res.render('./users/profile' + req.params.id , {user, userTodb})
    },

    destroyUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const deletedUser = await db.User.destroy({ where: { id: userId } });
            if (!deletedUser) {
                res.json({ error: 'Usuario no encontrado' });
            } else {
                res.json({ msg: 'Usuario eliminado correctamente' });
            }
        } catch (error) {
            console.log(error);
            res.json({ error: 'Error al eliminar el usuario' });
        }

    },


    login: (req, res) => {
        res.render('./users/loginRegister');
    },

    logged: async (req, res) => {

        let signInValid = validationResult(req);

        if (!signInValid.isEmpty()) {
            return res.render('./users/loginRegister', {
                errors: signInValid.mapped(),
                oldData: req.body,
                form: "login"
            });
        };

        let user = await db.User.findOne({ where: { email: req.body.emaiL } });
        if (user) {
            let credentialsMatch = bcrypt.compareSync(req.body.passW, user.password);

            if (credentialsMatch) {
                delete user.password;
                req.session.userLogged = user;
                if (req.body.remenberME) {
                    res.cookie('userEmail', req.body.email, { maxAge: (10000 * 80) })
                }

                return res.redirect('/');
            }
        }

        return res.render('./users/loginRegister', {
            errors: {
                emaiL: { msg: "credenciales incorrectas" }
            },
            oldData: req.body,
            form: "login"
        });
    },

    profile: async (req, res) => {

        const user = await db.User.findByPk(req.session.userLogged.id, {
            include: [
                { model: db.Rol, as: "roles" },

            ]
        });
        
        const users = await db.User.findAll({ include: [{ model: db.Rol, as: "roles" }] })

        return res.render('./users/profile', { users, user,}
        );
        

    },

    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/')
    },
}

module.exports = controller;