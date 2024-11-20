import express from 'express';

const router = express.Router();


Test
router.post('/', (req, res) => {
    res.send(`This is a test post`)
});

export default router;