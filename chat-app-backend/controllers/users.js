const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User
  .find({}).populate('messages')
  response.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {
    const users = await User.find({})
    const usernames = users.map(user=> user.username)
    const body = request.body
  
    if(body.password.length < 3){
      return response.status(400).json({ error: 'password must be at least 3 characters long' })
    }
  
    if(body.username.length < 3){
      return response.status(400).json({ error: 'username must be at least 3 characters long' })
    }

    if(usernames.includes(body.username)){
      return response.status(400).json({ error: 'username is already taken' })
    }
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
  
    const user = new User({
      username: body.username,
      passwordHash,
    })
  
    try{
      const savedUser = await user.save()
      response.json(savedUser)
    } catch(error) {
      next(error)
    }
})

module.exports = usersRouter