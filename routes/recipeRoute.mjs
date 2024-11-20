import express from 'express';
import Recipe from '../model/recipeSchema.mjs';

const router = express.Router();


// Test
// router.post('/', (req, res) => {
//     res.send(`This is a test post`)
// });


// Create
router.post('/', async (req, res) => {
    try {

        let newRecipe = new Recipe(req.body);

        await newRecipe.save();

        res.status(200).json(newRecipe);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
});


// Read
router.get('/', async (req, res) => {
    try {

        let allRecipe = await Recipe.find({});

        res.json(allRecipe);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
});


// Read by ID
router.get('/:id', async (req, res) => {
    try {

        let oneRecipe = await Recipe.findById(req.params.id);

        res.json(oneRecipe);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});





export default router;