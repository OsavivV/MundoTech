// // CRUD Usuario / conectando modelos de usuarios a la bases de datos . 
// const fs = require('fs');

// const User = {
//     fileName: './database/' ,   /* se supone que aca estara la base de datos mencionandos*/
    
//     getData: function () {
//         return JSON.parse (fs.readFileSync(this.FileName, 'utf-8'));
//     },

//     generateId : function () {
//     let allUsers = this.findAll() ;
//     let lasUser = allUsers.pop() ;
//     if  (lasUser){
//         return lasUser.id +1 ;
//     }
//     return 1
//     },

//     findAll: function () {
//         return this.getData();

//     },

//     findByPk: function (id) {
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser.id === id);
//         return userFound;
//     },

//     findByField: function (field, text) {
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser[field] === text);
//         return userFound;
//     },

//     create: function (userData) {
//         let allUsers = this.findAll();
//         let newUser = {
//             id: this.generateId(),
//             ... userData
//         }
//         allUsers.push(userData);
//         fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
//         return true
//     },

//     delete: function (id) {
//         let allUsers = this.findAll();
//         let finalUsers = allUsers.filter(oneUser => oneUser.id !== id) ;
//         fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null,  ' '));
//         return newUser;
//     }

// }

// module.exports = User ;