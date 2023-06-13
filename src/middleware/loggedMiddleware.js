const db = require('../database/models')

function loggedMiddleware(req, res, next) {
    res.locals.isLogged =false ;

    let emailCookie = req.cookies.userEmail;
    let userFromCookie = db.User.findOne('email', emailCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true ;
        res.locals.userLogged = req.session.userLogged;
    }

    

    next ();
}

module.exports = loggedMiddleware;