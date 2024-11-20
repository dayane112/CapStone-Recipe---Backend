// Imports connectionString
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.mongoURI;

export default async function connectDB (){

    try {

        await mongoose.connect(connectionString);

        console.log(`Mongo DB connected`);

    } catch (err) {
        console.error(err);
        process.ext(1);
        // this means, if you can't connect properly, to fully shut down all connections to the database and to send the appropriate error message,
    }
};
