const messagesRouter = require('express').Router()
const Message = require('../models/message')
const User = require('../models/user')
const bodyParser = require('body-parser')
messagesRouter.use(bodyParser.json())
const jwt = require('jsonwebtoken')

messagesRouter.get('/', async (request, response) => {
  const messages = await Message
  .find({}).populate('user', { username: 1, name: 1 })

  response.json(messages.map(message => message.toJSON()))
})

messagesRouter.post('/', async (request, response, next) => {
  const body = request.body

  let message = null
  let user = null

  if (!request.token) {
    message = new Message({
      content: body.content,
      user: user,
      date: Date.now()
    })

  } else {

    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    const user = await User.findById(decodedToken.id)

    message = new Message({
      content: body.content,
      user: user._id,
      date: Date.now()
    })
  }
  
  try {
    const savedMessage = await message.save()
      
    if(user !== null){
      user.messages = user.messages.concat(savedMessage._id)
      await user.save()  
    }

      response.json(savedMessage.toJSON())
    } catch(exception) {
      next(exception)
    }
})


module.exports = messagesRouter