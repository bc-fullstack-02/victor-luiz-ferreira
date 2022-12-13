const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const createError = require('http-errors')
const helmet = require('helmet')
const cors = require('cors')
// const esg = require('express-swagger-generator')

const jwt = require('jsonwebtoken')
const ACCESS_TOKEN_SECRET = 'token12345'

// const defaultOptions = require('./swagger.json')

const { Post, Comment, User } = require('./routers')
const { User: UserModel } = require('./models')

// const options = Object.assign(defaultOptions, { basedir: __dirname }) // app absolte path

// instanciate express
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const options = Object.assign(swaggerDocument, { basedir: __dirname }) // app absolte path
app.use('/api', swaggerUi.serve, swaggerUi.setup(options))
// const expressSwagger = esg(app)
// expressSwagger(options)

app.use(cors())
app.use(helmet())

// middlewares configuratiton
// encode url
app.use(express.urlencoded({
  extended: true
}))
// req.body in json
app.use(bodyParser.json())

// set logger
app.use(logger(process.env.NODE_ENV || 'dev'))

function authenticateToken (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split('  ')[1]
  if (token == null) return next(createError(401))
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403))
    UserModel.findOne({ user }) // identity
      .then(u => {
        req.user = u
        next()
      })
      .catch(error => next(error))
  })
}

// add all routes on a prefix version
Post.use('/', authenticateToken, Comment)
app.use('/v1/posts', authenticateToken, Post)
app.use('/v1/users', authenticateToken, User)
// app.use('/v1/comments', authenticateToken, Comment)

// catch all 404 since no middleware responded
app.use(function (req, res, next) {
  const err = createError(404)
  next(err)
})

// treat error or validation and store the erros
app.use(function (error, req, res, next) {
  // mongoose validator?
  // console.log(JSON.stringify(error))
  if (error.name && error.name === 'ValidationError') {
    // retrive last view
    // save form
    res.status(406).json(error)
  } else if ((error.status && error.status === 404) || (error.name && error.name === 'CastError')) {
    res.status(400).json({
      url: res.originalUrl,
      error: {
        message: 'Not Found'
      }
    })
  } else if (error.code === 11000) {
    res.status(500).json({
      url: res.originalUrl,
      error: {
        message: 'Duplicate key not allowed'
      }
    })
  } else {
    // error page
    res.status(error.status || 500).json({
      url: res.originalUrl,
      error
    })
  }
})

module.exports = app
