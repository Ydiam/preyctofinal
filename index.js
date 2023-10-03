const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./src/routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);



//routes
app.get("/", (req, res) => {
    res.send("Welcome to my ecommerce");
});

//mongodb connection
mongoose
.connect(process.env.MONGOBD_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));


app.listen(port, () => console.log("serer listening on port", port));
