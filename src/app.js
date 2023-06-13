
const path = require('path');
const express = require('express');
const app = express();


const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');


// *** Middlewares ******

// const userLogged = require('./middleware/loggedMiddleware')


//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//configuracion en los formularios para el uso de los metodos put y delete 
app.use(methodOverride('_method'));

// Para los archivos estaticos //
app.use(express.static(path.join(__dirname,'public')));             
app.use(session({secret: "undefine", resave:false, saveUninitialized: false}));

app.use(cookies());
// app.use(userLogged)

// ****** sistemas de rutas *******
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

//Aquí llamo a las rutas de las APIs
// const apiArtistasRouter = require('./routes/api/artistas');      declaro la constante de las apis y las requiero .


app.use('/', indexRouter);
app.use('/users', usersRouter) 
app.use('/products', productsRouter);  //  Sprint 4 saltar json usar db


//Aquí creo la colección de mis recursos de APIs
// app.use('/api/artistas',apiArtistasRouter);              definir rutas de las apis 



// ****** template Engine / views engine setup *****
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// page not found 
app.use((req, res, next) => {
    res.status(404).render("notFound")
})


// ****** Creacion de Servidor *****
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})