import express from 'express';
import recipeCTRL from '../controllers/recipeControllers.mjs';

const router = express.Router();


// Test
// router.post('/', (req, res) => {
//     res.send(`This is a test post`)
// });

// seed route
// router.route('/seed').get(recipeCTRL.seedDB);

// Create/ReadALl
router
    .route('/')
    .post(recipeCTRL.createRecipe)
    .get(recipeCTRL.getAllRecipe);


// GetOne/Update/Delete
router
    .route('/:id')
    .get(recipeCTRL.getOneRecipe)
    .put(recipeCTRL.updateOneRecipe)
    .delete(recipeCTRL.deleteOneRecipe);

    


export default router;