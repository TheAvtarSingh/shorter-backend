const express  = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./database/db');
const routes = require('./routes/shortnerroutes');




// middlewares

app.use(express.json());
connectDB();
const PORT = process.env.PORT;

// routes
app.use('/api',routes);
app.listen(PORT,()=>{console.log("Server Started !! - ",PORT);})
