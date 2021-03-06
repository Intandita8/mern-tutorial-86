const express = require("express");
const router = express.router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}   =require("../controllers/goalController");

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router