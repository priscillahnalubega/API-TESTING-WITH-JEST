const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /answers'
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: 'Handling POST requests to /answers'
    });
});





module.exports = router;
