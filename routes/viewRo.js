const express = require("express");
const router = express.Router();


router.get('/recetas', (req, res) =>{
    res.render('productos');
});
router.get('/nosotros', (req, res) =>{
    res.render('info');
});
router.get('/nosotros', (req, res) =>{
    res.render('consejos');
});





module.exports = router;