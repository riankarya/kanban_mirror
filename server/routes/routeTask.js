const router = require('express').Router()
const Controller = require('../controllers/controllerTask')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/', Controller.addTasks)
router.get('/', Controller.tasks)
router.get('/:id', authorization, Controller.tasksById)
router.put('/:id', authorization, Controller.editAllTasks)
router.patch('/:id', authorization, Controller.editCategoryTasks)
router.delete('/:id', authorization, Controller.deleteTasks)

module.exports = router