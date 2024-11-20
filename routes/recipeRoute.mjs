import express from 'express';
import recipeCTRL from '../controllers/recipeControllers.mjs';
import Recipe from '../model/recipeSchema.mjs';

const router = express.Router();


// Test
// router.post('/', (req, res) => {
//     res.send(`This is a test post`)
// });


// Create
router.post('/', recipeCTRL.createRecipe);


// Read
router.get('/', recipeCTRL.getAllRecipe);


// Read by ID
router.get('/:id', recipeCTRL.getOneRecipe);


// Update
router.patch('/:id', recipeCTRL.updateOneRecipe);


// Delete
router.delete('/:id', recipeCTRL.deleteOneRecipe);


export default router;