const messagesRouter = require('express').Router()
const Message = require('../models/message')

messagesRouter.get('/', (request, response) => {
    Message.find({}).then(messages => {
      response.json(messages.map(message => message.toJSON()))
    })
})

module.exports = messagesRouter