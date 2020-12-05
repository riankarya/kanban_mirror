function errorHandler(err, req, res, next) {
    console.log(err, 'asuppppppppppppppppppppppppp');
    switch (err.name) {
        case "SequelizeValidationError":
            let errors = err.errors.map(elem => elem.message)
            res.status(422).json({ errors })
            break
        case "UniqueEmailValidation":
            res.status(422).json({ errors: [err.msg] })
            break
        case 'AuthenticationError':
            res.status(401).json({ errors: [err.msg] })
            break
        case 'UnAuthorized':
            res.status(403).json({ errors: [err.msg] })
            break
        case 'TaskNotFound':
            res.status(404).json({ errors: [err.msg] })
            break
        default:
            console.log(err);
            res.status(500).json({ errors: ['Internal Server Errorrrrrrrrrrr']})
            break
    }
}

module.exports = errorHandler