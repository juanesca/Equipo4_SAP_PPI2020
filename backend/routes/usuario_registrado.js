const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


router.post('/usuario_registrado', (req, res) => {
        const {direccion, telefono, foto_perfil, cupones, recibos_compra, más_comprados, favoritos } = req.body;

        let DATOS = [direccion, telefono, foto_perfil, cupones, recibos_compra, más_comprados, favoritos];

        let queryDATOS = 'INSERT INTO Datos(direccion, telefono, foto_perfil, cupones, recibos_compra, más_comprados, favoritos) VALUES(?,?,?,?,?,?,?)';
        mysqlconection.query(queryDATOS, DATOS, (err, results, fields) => {
            if (err) {
                console.error(err);
            } else {
                res.json({ message: 'Se han actualizado los datos.' });
            }
        });
    });
    
    module.exports = router;
    

module.exports = router;
