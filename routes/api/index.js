const router = require('express').Router();
const workoutRoutes = require('./exercise-route');

// Use for localhost:3000/api/workouts
router.use('/workouts', workoutRoutes);

module.exports = router;
