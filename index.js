const express = require('express');
const path = require('path');

const connectDB = require('./lib/connectDB.js')

const noteRoutes = require('./routes/notes.route.js');
const userRoutes = require('./routes/user.route.js');
const staticRoutes = require('./routes/static.route.js');
const app = express();

const dotenv = require("dotenv")

dotenv.config();
const PORT = process.env.PORT || 8000;

connectDB().
    then(()=>{
        console.log('database connected successfully');
    })
    .catch((err) =>{
        console.log('error in connecting DB', err);
    });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/notes',noteRoutes);
app.use('/user',userRoutes);
app.use('/', staticRoutes);

app.listen(PORT, ()=>{
    console.log('server is running at port: '+PORT);
})