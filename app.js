const express = require('express');
const path = require('path'); 
const methodOverride = require('method-override');
const session = require('express-session');
const productosRoutes = require('./routers/productosRouters');  // Enrutador
const usuariosRoutes = require('./routers/usuariosRouters');
const mainRouter = require('./routers/mainRouter');
const app = express();

app.set('view engine', 'ejs')   // Seteo el motor de plantillas ejs

app.set('views', 'rutaCarpetaVistas')  // Opcional. Solamente si quiero cambiar mi carpeta views

//app.use(ErrorMiddleware);   // Opcional. Aplicar middleware a nivel aplicación

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './views')));

//app.use('/', productosRoutes);   // Definición de ruta global para un enrutador particular
app.use('/', mainRouter);
app.use('/productos', productosRoutes);
app.use('/usuarios', usuariosRoutes);

app.use(session( {secret: "Este es mi secreto"} ));    // para definir que vas a utilizar información en sesión

app.use(express.urlencoded({ extended: false }));   // Para especificar que vamos a transferir información por el body en peticiones 
app.use(express.json());                                               // Para especificar que vamos a transferir información por el body en peticiones 

app.use(methodOverride('_method')); // Para poder utilizar PUT o DELETE sobreescribiendo el método POST


app.listen(process.env.PORT || 3000, function() { console.log("Servidor corriendo"); })  // para levantar el servidor en un puerto especifico 
