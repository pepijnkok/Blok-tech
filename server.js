const bodyParser = require ('body-parser')
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const port = 6000
const mongo = require('mongodb')
const mongoose = require('mongoose')

require('dotenv').config()


const db = mongoose.connection

// mongoose connecten met de database
mongoose.connect(process.env.DB_URI, {
   useNewUrlParser: true, 
   useUnifiedTopology: true
})

db.on('connected', () => { 
   console.log('Mongoose connected')
})

// ejs setup
app.set('view engine', 'ejs')
// set de views folder
app.set('views', path.join(__dirname, 'views'))
// gebruik statische files vanuit de public folder
app.use(express.static(__dirname + '/public'))


// paginas inladen
app.get('/', function (req, res) {
   res.render('pages/index', {
       title: 'Travel Date',  
   })
})

app.get('/login', function (req, res) {
   res.render('pages/login', {
       title: 'login',
   })
})

app.get('/registreren', function (req, res) {
   res.render('pages/registreren', {
       title: 'registreren',
   })
})

// als er niks wordt gevonden voor pagina geef error pagina
app.get('*', function (req, res) {
   res.status(404).render('pages/404', {
       url: req.url,
       title: 'Error 404',
   })
})

// express luistert naar port 3000
app.listen(port, () => console.log('Example app listening on port ${port}!'))
