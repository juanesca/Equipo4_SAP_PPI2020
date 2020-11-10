const express = require('express');
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 4000);

//Routes
app.use('/user', require('./routes/usuario_registrado'));
app.use(require('./routes/tiendas'));









app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})