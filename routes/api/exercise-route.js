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

// POST New workout
// Use for localhost:3000/api/workouts
router.post('', (req, res) => {
    Workout.create(req.body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

// PUT Existing workout
// Use for localhost:3000/api/workouts/:id
router.put('/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id, {
            $push: {
                exercises: req.body
            }
        }
    )
    .then(workout => {
        res.json(workout)
    }) .catch(error => {
        res.json(error)
    })
});

module.exports = router;