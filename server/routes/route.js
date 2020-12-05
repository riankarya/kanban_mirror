const router = require('express').Router()
const Task = require('./routeTask')
const User = require('./routeUser')
// const Controller = require('../controllers/controllerTask')

// router.use('/', Controller.tasks)
router.use('/tasks', Task)
router.use('/users', User)

module.exports = router