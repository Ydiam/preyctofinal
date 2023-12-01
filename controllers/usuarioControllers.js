const bcrypt = require('bcrypt');
const users = require('../models/usuario');
const { validationResult } = require('express-validator');


const registrarUsuario = async (req, res) => {
    const errores = validationResult(req);
    const mensajeError = 'Campos Incompletos';
    if(!errores.isEmpty()){
        console.log('Campos incompletos');
        return res.render('error', {
            mensajeError
        });
    }
    const {nombre, usuario, password, email} = req.body;
    try {
        let nuevoUsuario = await users.findOne({ email });
        if(nuevoUsuario) {
            mensajeError = 'El usuario ya existe en la base de datos';
         console.log('El usuario ya existe en la base de datos');
           return res.render('error', {mensajeError});
        }
        nuevoUsuario = new users(req.body);
        //generamos la incriptacion
        const salt = bcrypt.genSaltSync(8);
        nuevoUsuario.password = bcrypt.hashSync(password, salt);
        await nuevoUsuario.save();
        return res.render('index');    
    } catch (error) {
        return res.send('Error en la base de datos');  
    }
};
 
const verificarUsurio = async (req, res) =>{
    const errores= validationResult(req);
    mensajeError = 'Campos incompletos';
    if(!errores.isEmpty()){
        console.log('Campos incompletos');
       return res.render('error', {
        mensajeError
    });
    }
    const {usuario, password} = req.body;
    try {
        const verUsuario = await users.findOne({usuario});
        if(verUsuario){
            console.log('usuario encontrado');
            const validacionPass = bcrypt.compareSync(password, verUsuario.password);
            if(validacionPass){
                res.render('index');
                console.log('ingreso exitoso');
            };
            mensajeError = 'Password Invalido';
            return res.render('error', {
                mensajeError
            });
        };
        mensajeError = 'El USUARIO no ha sido encontrado';
        return res.render('error', {
            mensajeError
        });
    } catch (error) {
        mensajeError = 'Error en conexion a la DATA BASE';
        return res.render('error', {
            mensajeError
        });
        
    };
};


module.exports = {registrarUsuario, verificarUsurio};