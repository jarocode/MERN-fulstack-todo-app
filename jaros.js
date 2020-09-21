const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const todoRoutes = './routes/apis/todoRoutes';
const userRoutes ='./routes/apis/userRoutes';
const authRoutes = './routes/apis/auth';

dotenv.config({path: './config/config.env'});
connectDB();

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/', require(todoRoutes));
app.use('/', require(userRoutes));
app.use('/', require(authRoutes));


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`app running on port ${PORT} in ${process.env.NODE_ENV}`);
})
