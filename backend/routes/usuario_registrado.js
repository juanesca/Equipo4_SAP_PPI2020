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

module.exports = router;
