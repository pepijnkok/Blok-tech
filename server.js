const bodyParser = require ('body-parser')
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const port = 3000

const mongo = require('mongodb')
const mongoose = require('mongoose')
const validator = require('validator');

// Import schema for the user
const User = require('./models/userModel');  

require('dotenv').config()


const db = mongoose.connection

// Fix for deprecation warning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

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
// Telling app to take the forms and acces them inside of the request variable inside of the post method
app.use(express.urlencoded({ extended: false }))

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

app.get('/register',(req,res) =>{
   res.render('pages/register',{
      title:'login'
   })
})

app.get('/login',(req,res) =>{
   res.render('pages/login',{
      title:'login'
   })
})

app.get('/home', (req, res, ) => {
   res.render('pages/home', { 
      title: 'Home' 
      })  
   })  

   app.get('/update', (req, res, ) => {
      res.render('pages/update', { 
         title: 'Update name' 
         })  
      })  

// Functions
app.post('/registerUser', (req, res) => {
   
   try {
      const newUser  = new User({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
      })
      newUser.save().then(() =>{
         console.log('Added User');
         res.redirect('/login')
         return;
         
   })
      
   } catch (error) {
      console.log(error);
   }
})

app.post('/loginUser', (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
   try{
   User.findOne({email:email},function(err, user){
      if(user){
      if(user.password == password){
         console.log('Logged IN')
         res.redirect('/home')
         return;
      } else{
         console.log('Wrong password')
      }
      }
      console.log('User not found')
      res.redirect('/login')
      return;
   })
   } catch(e){
      console.log('Log in failed: ' + e)

   }
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
