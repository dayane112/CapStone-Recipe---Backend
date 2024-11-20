// Import
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


// setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }))


// listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});