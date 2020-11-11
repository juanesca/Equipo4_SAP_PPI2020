const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../db/db");

router.get("/tienda", (req, res) => {
  const { Categoria } = req.body;
  mysqlConnection.query(
    "SELECT * FROM tienda WHERE Categorias = ?",
    [Categoria],
    (err, rows, field) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;