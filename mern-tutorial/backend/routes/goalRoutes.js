const express = require("express");
const router = express.router()

router.get('/api/goals',(req,res)=>{
    res.status(200).json({message: 'Get Goals'})
})
router.post('/',(re,res)=>{
    res.status(200).json({message: 'Set Goal'})
})
router.put('/:id',(re,res)=>{
    res.status(200).json({message: 'Update Goal ${req.params.id}'})
})
router.delete('/:id',(req,res)=>{
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
})
module.exports = router