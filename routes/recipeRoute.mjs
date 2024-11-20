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
router.patch('/:id', async (req, res) => {
    try {

        let updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedRecipe);

    } catch (err) {
        rconsole.error(err);
        res.status(500).json({msg: 'Server error'});
    };
});


// Delete
router.delete('/:id', async (req, res) => {
    try {
       
        await Recipe.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Item Deleted' }); 
        
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: 'Server error'})
    }
})


export default router;