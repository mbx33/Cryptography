const express = require('express')
const cors = require('cors')

const app = express()

const messageCtrl = require('./controllers/auth.js');

app.use(express.json())
app.use(cors())



const {
    login,
    register
} = require('./controllers/auth')

app.post(`/api/login`, login)
app.post(`/api/register`, register)

app.listen(4004, () => console.log(`Ya Robotayu`))