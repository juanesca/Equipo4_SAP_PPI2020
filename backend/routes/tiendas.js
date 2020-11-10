const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');

router.get('/tiendaT',(req,res)=>{
 mysqlConnection.query('SELECT * FROM tiendas', (err, rows, fields)=>{
if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});


router.get('/tiendaC',(req,res)=>{
mysqlConnection.query('SELECT * FROM tiendas', (err, rows, fields)=>{
if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});


const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');

router.get('/tienda',(req,res)=>{
const { id } = req.params;
mysqlConnection.query('SELECT * FROM tiendaT,TiendaC WHERE id = ?', [id], (err, rows, field) =>{
        if(!err){
             res.json(rows[0]);
        }else{
          console.log(err)
       }
    });
});

