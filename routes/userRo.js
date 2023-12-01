const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const {registrarUsuario, verificarUsurio }= require("../controllers/usuarioControllers");

router.post('/registrarUsuario',[
    check('nombre').isLength({min:4}),
    check('usuario').isLength({min:4}),
    check('password').isLength({min:4}),
    check('email').isLength({min:4}),
], registrarUsuario);
router.post('/login', verificarUsurio );

router.get('/form', (req, res) =>{
    res.render('formu');
});

router.get('/login', (req, res) =>{
    res.render('login');
});




module.exports = router;