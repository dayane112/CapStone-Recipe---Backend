// import
import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        enum: ["breakfast", "lunch", "dinner" , "dessert", "baking", "drink"],
        required: true,
    },
    level: {
        type: String,
        required: true
    },
    serving: {
        type: Number,
        required: true,
    },
    total: {
        type: String,
        required: true
    },
    ingredient: [
        {
            type: String,
            // required: true
        },
    ],
    direction: [
        {
            type: String,
            // required: true,
        },
    ],
    image: { 
        type: String,
        required: false, 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
});

recipeSchema.index({ name: 1 })

export default mongoose.model('Recipe', recipeSchema);