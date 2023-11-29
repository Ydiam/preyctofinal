const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_ATLAS = process.env.MONGOBD_URI;

console.log(MONGO_ATLAS);

const conectar = mongoose.connect(MONGO_ATLAS).then(()=>{
    console.log('Cnexion a mongodb exitosa');
}).catch(err=> console.log(err));

module.exports = conectar;