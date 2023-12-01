const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');
require('./dataBase');
dotenv.config();
const userRo = require('./routes/userRo');
const viewsRo = require('./routes/viewRo');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'))

app.use('/user', userRo);
app.use('/views', viewsRo);
app.get('/', (req,res) => {
    res.render('index');
    
})

app.listen(3000, (req, res) => {
   console.log('App corriendo en el puerto' + PORT);
});
