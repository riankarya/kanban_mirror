const { Task } = require('../models')

function authorization (req, res, next) {
    const id = +req.params.id
    Task.findOne({where: {id}})
    .then(data => {
        if(!data) throw {name: 'TaskNotFound', msg: 'Task not found'}
        else if(data.UserId == req.loggedUser.id) next()
        else throw {name: 'UnAuthorized', msg: 'You are not authorized'}
    })
    .catch(next)
}

module.exports = authorization