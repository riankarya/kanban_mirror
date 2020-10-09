const router = require('express').Router()
const Task = require('./routeTask')
const User = require('./routeUser')

router.use('/tasks', Task)
router.use('/users', User)

module.exports = router