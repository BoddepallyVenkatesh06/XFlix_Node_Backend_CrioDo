const router = require('express').Router()
const videosRouter = require('./videos.route')

router.use('/videos',videosRouter);

module.exports = router