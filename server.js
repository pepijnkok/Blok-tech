const bodyParser = require ('body-parser')
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const PORT = 3000
const mongo = require('mongodb')
const mongoose = require('mongoose')

require('dotenv').config()


const db = mongoose.connection

//mongoose connecten met de database
mongoose.connect(process.env.DB_URI, {
   useNewUrlParser: true, 
   useUnifiedTopology: true
})

db.on('connected', () => { 
   console.log('Moongoose connected')
})



// EJS setup
app.set('view engine', 'ejs');
// Set de views folder
app.set('views', path.join(__dirname, 'views'));
// Gebruik statische files vanuit de public folder
app.use(express.static(__dirname + '/public'));


//paginas inladen
app.get('/', function (req, res) {
   res.render('pages/index', {
       title: 'Travel Date',  
   })
});

app.get('/login', function (req, res) {
   res.render('pages/login', {
       title: 'login',
   })
});

app.get('/registreren', function (req, res) {
   res.render('pages/registreren', {
       title: 'registreren',
   })
});


app.get('*', function (req, res) {
   res.status(404).render('pages/404', {
       url: req.url,
       title: 'Error 404',
   })
});


// Express luisterd naar port 3000
app.listen(PORT, () => {
console.log(`http://localhost:${PORT}`)
});
