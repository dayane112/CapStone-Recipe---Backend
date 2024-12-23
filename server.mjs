// Import
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import recipeRoute from './routes/recipeRoute.mjs';
import cors from 'cors';
import morgan from 'morgan';


// setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001



// DB connection
connectDB();


// Middleware
app.use(cors())
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


// routes
app.use('/recipe', recipeRoute);


// listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});