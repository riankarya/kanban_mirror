require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const Task = require('./routes/route')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', Task)
app.use(errorHandler)

app.listen(port, _=> console.log(`I love you ${port}`))