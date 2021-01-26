const express = require('express')
const postsRouter = require('./routes/posts')
const authRouter = require('./routes/auth')

const server = express()

server.use(express.json()) //Middleware

server.use('/posts',postsRouter)
server.use('/auth',authRouter)

server.get('/', (request,response) => {
  response.json({
    sucess: true,
    message: 'devtoAPI'
  })
})

module.exports = server