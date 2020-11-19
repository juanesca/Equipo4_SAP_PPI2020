const { Router } = require("express");
const router = Router();
const mySQLconnection = require("../db/db");

router.get('/', (req,res)=>{
    mySQLconnection.query("SELECT * FROM producto", (err, rows, field) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});




module.exports = router;