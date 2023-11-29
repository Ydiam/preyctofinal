const users = require('../models/usuario');
const { validationResult } = require('express-validator');


const registrarUsuario = async (req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        console.log('Campos incompletos');
        return res.send('Campos incompletos');
    }
    const {usuario, password, email, nombre} = req.body;
    try {
        let nuevoUsuario = await users.findOne({ email });
        if(nuevoUsuario) {
         console.log('El usuario ya existe en la base de datos');
           return res.send('El usuario ya existe en la base de datos')
        }
        nuevoUsuario = new users(req.body);
        await nuevoUsuario.save();
        return res.send('usuario guardado con exito');    
    } catch (error) {
        return res.send('Error en la base de datos');  
    }
};

module.exports = registrarUsuario;