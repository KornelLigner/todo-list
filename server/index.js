const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const logger = require('koa-logger')
const favicon = require('koa-favicon')
const parse = require('koa-bodyparser')

const app = new Koa()
app.use(logger())
const port = process.env.PORT || 3000

app.use(serve(path.resolve(__dirname, '..', 'client')))

app.use(parse())

const userRoutes = require('./routes/users')
app.use(userRoutes.routes())

const taskRoutes = require('./routes/tasks')
app.use(taskRoutes.routes())

app.listen(port)

console.log('App is listening at http://127.0.0.1:3000')

require('./store').init()