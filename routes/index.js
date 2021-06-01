const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Use for localhost:3000/
router.use('/', homeRoutes);
// Use for localhost:3000/api
router.use('/api', apiRoutes);

module.exports = router;