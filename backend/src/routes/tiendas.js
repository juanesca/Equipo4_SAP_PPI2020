const { Router } = require("express");
const router = Router();
const mySQLconnection = require("../db/db");

const { isLoggedIn } = require('../lib/auth');

router.get("/", (req, res) => {
  mySQLconnection.query("SELECT * FROM tienda", (err, rows, field) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/:Categorias", (req, res) => {
  //const { Categoria } = req.body;
  const { Categorias } = req.params;
  mySQLconnection.query(
    "SELECT * FROM tienda WHERE Categorias = ?",
    [Categorias],
    (err, rows, field) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/add",isLoggedIn, (req, res) => {
  const { Direccion, Telefono, Categorias, nombre } = req.body;
  const newTienda = {
    Direccion,
    Telefono,
    Categorias,
    nombre,
    Cod_usuario: req.user.id,
  };
  if (req.user.tipo_usuario == 3){
  mySQLconnection.query(
    "INSERT INTO tienda(Direccion,Telefono,Categorias,nombre,Cod_usuario) VALUES(?,?,?,?,?) ",
    [newTienda]
  );
} else {
  res.redirect('')
  }
});

router.post('/edit/:id', isLoggedIn, (req,res) => {
  const { id } = req.params;
  const { Direccion, Telefono, Categorias, nombre} = req.body;
  const tienda = {
    Direccion,
    Telefono,
    Categorias,
    nombre,
    Cod_usuario: req.user.id 
  };
  if (req.user.tipo_usuario == 3){
    mySQLconnection.query(
      "UPDATE tienda(Direccion,Telefono,Categorias,nombre,Cod_usuario) VALUES(?,?,?,?,?) ",
      [newTienda]
    );
  } else {
    res.redirect('')
    }
});

module.exports = router;
