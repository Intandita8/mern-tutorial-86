//@desc   Get goals
//@route  GET /api/goals
//@access Privat
const getGoals = (req,res) => {
    res.Status(200).json({message: 'Get Goals'})
}

//@desc   Set goals
//@route  POST /api/goals
//@access Privat
const setGoals = (req,res) => {
    if(req.body.text){}
    res.Status(400)
    throw new Error(please add a text field)
}
res.status(200).json({message: 'Set Goal'})
}
 
//@desc   Update goals
//@route  PUT /api/goals/:id
//@access Privat
const updateGoals = (req,res) => {
    res.Status(200).json({message: 'Update Goal ${req.params.id}'})

}

//@desc   Delete goals
//@route  DELETE /api/goals/:id
//@access Privat
const deleteGoals = (req,res) => {
    res.Status(200).json({message: 'Delete Goal ${req.params.id}'})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
}