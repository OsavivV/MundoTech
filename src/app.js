// *******Require's ***
const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');

// ********* Express/use *****
const app = express();

// *** Middlewares ******

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//configuracion en los formularios para el uso de los metodos put y delete 
app.use(methodOverride('_method'));

// Para los archivos estaticos //
app.use(express.static(path.join(__dirname,'public')));             
app.use(session({secret: "Funko-DH"}));

// ****** sistemas de rutas *******
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

//Aquí llamo a las rutas de las APIs
// const apiArtistasRouter = require('./routes/api/artistas');      declaro la constante de las apis y las requiero .


app.use('/', indexRouter);
// app.use('/', usersRouter) 
// app.use('/', productsRouter);  // Entregable Sprint 4


//Aquí creo la colección de mis recursos de APIs
// app.use('/api/artistas',apiArtistasRouter);              definir rutas de las apis 



// ****** template Engine / views engine setup *****
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// ****** Creacion de Servidor *****
const port = 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})