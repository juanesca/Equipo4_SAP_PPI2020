const { Router } = require("express");
const router = Router();
const passport = require('passport');
const mysqlConnection = require("../db/db");

const { isLoggedIn, isNotLoggedIn} = require('../lib/auth');

router.get("/:id",isLoggedIn , (req, res) => {
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
/*
router.post("/signup", (req, res) => {
  const { telefono, direccion, tipo_usuario, nombre_completo } = req.body;

  let DATOS = [telefono, direccion, tipo_usuario, nombre_completo];

  let queryDATOS =
    "INSERT INTO usuario_registrado(Telefono, Direccion, tipo_usuario, nombre_completo) VALUES(?,?,?,?)";
  mysqlconection.query(queryDATOS, DATOS, (err, results, fields) => {
    if (err) {
      console.error(err);
    } else {
      res.json({ message: "Se han actualizado los datos." });
    }
  });
});
*/
router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.post('/signin', isNotLoggedIn, (req, res, next) => {

  passport.authenticate('local.signin', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true
  });(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logOut();
  res.redirect('/');
})

router.post("/extraInfo/:id",isLoggedIn, (req, res) => {
  const {id} = req.params;
  const { Foto_perfil, Cod_cupones, Favoritos, Mas_comprados } = req.body;

  let DATOS = [Foto_perfil, Cod_cupones, Favoritos, Mas_comprados ];

  mysqlconection.query("UPDATE usuario_registrado set WHERE id=? ", [DATOS, id], (err, results, fields) => {
    if (err) {
      console.error(err);
    } else {
      res.json({ message: "Se han actualizado los datos." });
    }
  });
});




module.exports = router;
