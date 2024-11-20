import Recipe from '../model/recipeSchema.mjs';
import recipe from '../data/recipeData.mjs';

async function createRecipe(req, res) {
    try {

        let newRecipe = new Recipe(req.body);

        await newRecipe.save();

        res.status(200).json(newRecipe);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
};

async function getAllRecipe(req, res) {
    try {

        let allRecipe = await Recipe.find({});

        res.json(allRecipe);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
};

async function getOneRecipe(req, res) {
    try {

        let oneRecipe = await Recipe.findById(req.params.id);

        res.json(oneRecipe);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
};

async function updateOneRecipe(req, res) {
    try {

        let updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedRecipe);

    } catch (err) {
        rconsole.error(err);
        res.status(500).json({msg: 'Server error'});
    };
};


export default { createRecipe, getAllRecipe, getOneRecipe, updateOneRecipe }