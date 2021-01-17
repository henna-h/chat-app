const messagesRouter = require('express').Router()
const Message = require('../models/message')
const User = require('../models/user')
const bodyParser = require('body-parser')
messagesRouter.use(bodyParser.json())
const jwt = require('jsonwebtoken')

//token
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

messagesRouter.get('/', async (request, response) => {
  const messages = await Message
  .find({}).populate('user', { username: 1, name: 1 })

  response.json(messages.map(message => message.toJSON()))
})


//DOES NOT WORK!!!

messagesRouter.post('/', async (request, response, next) => {
  const body = request.body

  const token = getTokenFrom(request)
  console.log(token)

  if(token !== null){
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const message = new Message({
      content: body.content,
      user: user._id,
      date: Date.now()
    })
    
    try {
      const savedMessage = await message.save()

      user.messages = user.messages.concat(savedMessage._id)
      await user.save()

      response.json(savedMessage.toJSON())
    } catch(exception) {
      next(exception)
    }
  } else {
    const message = new Message({
      content: body.content,
      user: null,
      date: Date.now()
    })

    try {
      const savedMessage = await message.save()
      response.json(savedMessage.toJSON())
    } catch(exception) {
      next(exception)
    }
  }

})


module.exports = messagesRouter