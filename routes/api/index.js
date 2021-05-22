const router = require('express').Router();
const exerciseRoutes = require('./exercise-route');
const statsRoutes = require('./stats-route');
const workoutRoutes = require('./workout-route');

router.use('/exercise-route', exerciseRoutes);
router.use('/stats-route', statsRoutes);
router.use('/workout-route', workoutRoutes);

module.exports = router;
