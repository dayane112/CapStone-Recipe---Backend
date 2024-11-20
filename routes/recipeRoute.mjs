import express from 'express';
import recipeCTRL from '../controllers/recipeControllers.mjs';
import Recipe from '../model/recipeSchema.mjs';

const router = express.Router();


// Test
// router.post('/', (req, res) => {
//     res.send(`This is a test post`)
// });


// Create/ReadALl
router
    .route('/')
    .post(recipeCTRL.createRecipe)
    .get(recipeCTRL.getAllRecipe);


// GetOne/Update/Delete
router
    .route('/:id')
    .get(recipeCTRL.getOneRecipe)
    .patch(recipeCTRL.updateOneRecipe)
    .delete(recipeCTRL.deleteOneRecipe);

// router.route('/seed').get(recipeCTRL.seedDB);

export default router;