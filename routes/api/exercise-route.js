const router = require('express').Router();
const path = require('path');
const db = require('../../models');
const { Workout } = require('../../models/index');

//Use for localhost:3000/api/workouts
router.get('', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.json(err);
    });
});

// GET Workout Range
// Use for localhost:3000/api/workouts/range
router.get('/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
    .sort({_id: -1})
    .limit(7)
        .then((dbExercise) => {
            res.json(dbExercise)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
});


module.exports = router;