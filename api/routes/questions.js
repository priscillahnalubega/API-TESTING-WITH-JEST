const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /questions'
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: 'Handling POST requests to /questions'
    });
});

module.exports = router;

router.get('/:questionid', (req, res, nesxt)=>{
     const id = req.params.questionid;
     if (id === 'special'){
         res.status(200).json({
             message: 'you discovered the special message',
             id: id
         });
     }else{
         res.status(200).json({
             message:'you passed an id'
         })
     }
});

router.patch('/:questionid', (req, res, nesxt)=>{
    res.status(200).json({
        message:'question has been changed'
    });
});

router.delete('/:questionid', (req, res, nesxt)=>{
    res.status(200).json({
        message:'question has been deleted'
    });
});


