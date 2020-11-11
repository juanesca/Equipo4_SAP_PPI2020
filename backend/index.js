const express = require('express');
<<<<<<< HEAD
const app = express();
const usuario_registrado = require('./routes/usuario_registrado');


app.set('port', 4001);

app.use(express.json());

app.use('/api', usuario_registrado);



app.listen(app.get('port'), ()=>{
 console.log(`Server on port ${app.get('port')}`);
=======
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 4000);

//Routes
app.use('/user', require('./routes/usuario_registrado'));
app.use(require('./routes/tiendas'));









app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
>>>>>>> c0814b27ca5e70ebb72e2509070db3c7a6d0cfea
})