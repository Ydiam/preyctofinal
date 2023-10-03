const express = require("express");
const userSchema = require("../models/usuario");
const { error } = require("console");

const router = express.Router();

//create user
router.post('/users', (req, res) =>{
const user =  userSchema(req.body);
user
.save()
.then((data) => res.json(data))
.catch((error) => res-json({massage: error}));
});


// get obtener usuarios
router.get("/users", (req, res) => {
userSchema
.find()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}));
});


//get obtener un usuario
router.get("/users/:id", (req, res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
    });


//put actualizar un usuario
router.put("/users/:id", (req, res) => {
    const {id} = req.params;
    const { nombre, contraseña, email } = req.body;
    userSchema
    .updateOne({ _id: id }, {$set: {nombre, contraseña, email}} )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
    });





module.exports = router;