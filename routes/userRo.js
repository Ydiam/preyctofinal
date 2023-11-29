const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const registrarUsuario = require("../controllers/usuarioControllers");

router.post('/registrarUsuario',[
    check('nombre').isLength({min:4}),
    check('usuario').isLength({min:4}),
    check('password').isLength({min:4}),
    check('email').isLength({min:4}),
], registrarUsuario);
router.get('/form', (req, res) => {
   res.render('formulario');
})




module.exports = router;