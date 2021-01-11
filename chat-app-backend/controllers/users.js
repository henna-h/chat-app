const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', (request, response) => {
    User.find({}).then(users => {
      response.json(users.map(user => user.toJSON()))
    })
})

module.exports = usersRouter