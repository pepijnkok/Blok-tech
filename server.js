const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const router = require('./route/router')

// MongoDB
const mongo = require('mongodb')

// Dotenv
require ('dotenv').config()

// EJS setup
app.set('view engine', 'ejs')
// Set de views folder
app.set('views', path.join(__dirname, 'views'))
// Gebruik statische files vanuit de public folder
app.use(express.static(__dirname + '/public'))

// Gebruik de router wanneer je op de index pagina komt
app.use('/', router)


// Express luisterd naar port 3000
app.listen(PORT, () => {
   console.log(`http://localhost:${PORT}`)
})
