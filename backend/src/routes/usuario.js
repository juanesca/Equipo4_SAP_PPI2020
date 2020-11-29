const { Router } = require("express");
const router = Router();

const passport = require("passport");
const MySQLConnection = require("../db/db");
const helpers = require("../lib/helpers");

const { isLoggedIn, isNotLoggedIn } = require("../lib/auth");

router.get("/:id", /*isLoggedIn,*/ (req, res) => {
  const { id } = req.params;
  MySQLConnection.query(
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

router.post(
  "/signup",
  isNotLoggedIn,
  passport.authenticate("local.signup")
);

router.post("/signin", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local.signin");
  req, res, next;
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logOut();
});

router.post("/:id/extraInfo", isLoggedIn, (req, res) => {
  const { id } = req.params;
  const { Foto_perfil, Cod_cupones, Favoritos, Mas_comprados } = req.body;

  let DATOS = [Foto_perfil, Cod_cupones, Favoritos, Mas_comprados];

  MySQLConnection.query(
    "UPDATE usuario_registrado set ? WHERE id = ? ",
    [DATOS, id],
    (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.json({ message: "Se han actualizado los datos." });
      }
    }
  );
});

module.exports = router;
