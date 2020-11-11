const express = require('express');
const app = express();
const usuario_registrado = require('./routes/usuario_registrado');


app.set('port', 4001);

app.use(express.json());

app.use('/api', usuario_registrado);



app.listen(app.get('port'), ()=>{
 console.log(`Server on port ${app.get('port')}`);
})