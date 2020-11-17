const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const MySQLsession = require('express-mysql-session');
const passport = require('passport');
const flash = require('connect-flash');

const {database} = require('./keys');

// Initializations
const app = express();
require('./lib/passport');

//Settings
app.set('port', process.env.PORT || 4001);

// Middlewares
app.use(morgan('dev'));
app.use(session({
    secret: 'juanmysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLsession(database)
}));
app.use(flash());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Global Variables
app.use((req,res,next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

//Routes
app.use('/user', require('./routes/usuario'));
app.use('/tiendas', require('./routes/tiendas'));








//Starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})