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
}


export default { createRecipe }