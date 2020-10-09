const { Task } = require('../models')
const Helper = require('../helpers/tanggalBetul')

class Controller {
    static addTasks(req, res, next) {
        console.log('asup ti controller add task');
        const UserId = req.loggedUser.id
        const { title, description, category } = req.body
        const obj = { title, description, category, UserId }
        Task.create(obj)
            .then(data => {
                res.status(201).json({ msg: 'sukses nambah list', data })
            })
            .catch(err => {
                next(err)
            })
    }
    static tasks(req, res, next) {
        Task.findAll({where: {UserId: req.loggedUser.id}})
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }
    static tasksById(req, res, next) {
        const id = +req.params.id
        Task.findOne({ where: { id } })
            .then(data => {
                console.log(data);
                if(!data) throw {name: 'TaskNotFound', error: "not found" }
                res.status(200).json({ data })
            })
            .catch(next)
    }
    static editAllTasks(req, res, next) {
        const id = +req.params.id
        const { title, description, category } = req.body
        const obj = { title, description, category }
        Task.update(obj, { where: { id } })
            .then(_=> {
                return Task.findOne({where: {id}})
            })
            .then(data => {
                if (!data) throw {name:'TaskNotFound', error: "not found"}
                res.status(200).json({ data })
            })
            .catch(next)
    }
    static editCategoryTasks(req, res, next) {
        console.log('asup ti controller edit status Task');
        const id = +req.params.id
        const { category } = req.body
        const obj = { category }
        Task.update(obj, { where: { id } })
            .then(_=> {
                return Task.findOne({where: {id}})
            })
            .then(data => {
                if (!data) throw {name: 'TaskNotFound', error: "not found"}
                console.log(data, 'DARI EDIT STATUS CONTROLLER');
                res.status(200).json({ data })
            })
            .catch(next)
    }
    static deleteTasks(req, res, next) {
        const id = +req.params.id
        Task.findOne({where: {id}})
        .then(data => {
            if(!data) throw {name: 'TaskNotFound', error: "not found"}
            Task.destroy({where: {id}})
            res.status(200).json({data})
        })
        .catch(next)
    }
}

module.exports = Controller