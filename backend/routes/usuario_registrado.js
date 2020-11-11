const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../db/db");

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM usuario_registrado WHERE Id = ?",
    [id],
    (err, rows, field) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

<<<<<<< HEAD
router.post('/usuario_registrado', (req, res) => {
        const {direccion, telefono, foto_perfil, nombre} = req.body;

        let DATOS = [direccion, telefono, foto_perfil, nombre];

        let queryDATOS = 'INSERT INTO Datos(direccion, telefono, foto_perfil) VALUES(?,?,?,?)';
        mysqlconection.query(queryDATOS, DATOS, (err, results, fields) => {
            if (err) {
                console.error(err);
            } else {
                res.json({ message: 'Se han actualizado los datos.' });
            }
        });
    });

    router.post('/usuario_registrado', (req, res) => {
        const {cupones, recibos_compra, más_comprados, favoritos } = req.body;

        let DATOS = [cupones, recibos_compra, más_comprados, favoritos];

        let queryDATOS = 'INSERT INTO Datos(cupones, recibos_compra, más_comprados, favoritos) VALUES(?,?,?)';
        mysqlconection.query(queryDATOS, DATOS, (err, results, fields) => {
            if (err) {
                console.error(err);
            } else {
                res.json({ message: 'Se han actualizado los datos.' });
            }
        });
    });
    
    
=======
router.post("/usuario_registrado", (req, res) => {
  const {
    direccion,
    telefono,
    foto_perfil,
    cupones,
    recibos_compra,
    más_comprados,
    favoritos,
    nombre,
  } = req.body;

  let DATOS = [
    direccion,
    telefono,
    foto_perfil,
    cupones,
    recibos_compra,
    más_comprados,
    favoritos,
    nombre,
  ];

  let queryDATOS =
    "INSERT INTO Datos(direccion, telefono, foto_perfil, cupones, recibos_compra, más_comprados, favoritos) VALUES(?,?,?,?,?,?,?)";
  mysqlConnection.query(queryDATOS, DATOS, (err, results, fields) => {
    if (err) {
      console.error(err);
    } else {
      res.json({ message: "Se han actualizado los datos." });
    }
  });
});

>>>>>>> c0814b27ca5e70ebb72e2509070db3c7a6d0cfea
module.exports = router;
