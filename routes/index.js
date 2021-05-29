const router = require('express').Router();
const apiRoutes = require('./api/index');
const publicRoutes = require('./public');

router.use('/', publicRoutes);
// router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>')
});

module.exports = router;