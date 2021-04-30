const router = require('express').Router();
const userRoutes = require('./userRoute.js');
const blogRoutes = require('./blogRoute.js');
const commentRoutes = require('./commentRoute.js');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;