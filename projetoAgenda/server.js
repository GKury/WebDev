require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
//mongoose.connect(process.env.CONNECTIONSTRING, {useNewParser: true, useUnifiedTopology: true}); V. Antiga
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Base de dados conectada');
        app.emit('conectado');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes')
const path = require('path');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware')

const helmet = require('helmet');
const csrf = require('csurf');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(helmet()); //Se apresentar erro, ver v. 146

const sessionOptions = session({
    secret: 'meiaNoiteTeConto',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24* 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

//Meus middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('conectado', () => {
    app.listen(3000, () => {
        console.log('Servido executando na porta 3000');
        console.log('Acessar http://localhost:3000')
    });
});
