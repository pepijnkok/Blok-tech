const bodyParser = require ('body-parser')
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const port = 3000
const mongo = require('mongodb')
const mongoose = require('mongoose')

require('dotenv').config()


const db = mongoose.connection

// Connect mongoose with the database
mongoose.connect(process.env.DB_URI, {
   useNewUrlParser: true, 
   useUnifiedTopology: true
})

db.on('connected', () => { 
   console.log('Mongoose connected')
})

// Ejs setup
app.set('view engine', 'ejs')
// Set the views folder
app.set('views', path.join(__dirname, 'views'))
// Use static files from the public folder
app.use(express.static(__dirname + '/public'))


// Loading pages
app.get('/', (req, res) => {
   res.render('pages/index', {
       title: 'Travel Date',  
   })
})

app.get('/login', (req, res) => {
   res.render('pages/login', {
       title: 'Login',
   })
})

app.get('/registreren', (req, res) => {
   res.render('pages/register', {
       title: 'Register',
   })
})

// If there is no page found give the user an error page instead
app.get('*', (req, res) => {
   res.status(404).render('pages/404', {
       url: req.url,
       title: 'Error 404',
   })
})


// Express listens to port 3000
app.listen(port, () => console.log('Example app listening on port ${port}!'))
