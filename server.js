const express = require('express');
const app = express()
const ejs = require("ejs")
const mongo = require('mongodb')
// const slug = require("slug")
// const bodyParser = require("bodyParser")
const port = 3000

require ('dotenv').config()


// EJS
app.set("view engine", "ejs")
app.use(express.static("views"))



const persons = [
  {
    name: 'henk'
  },
  {
    name: 'jan'
  },
  {
    name: 'piet'
  }
]

app.get('/profile/:id', function(req, res){
    res.render('views/match', persons[req.params.id]);
});






app.use(function(req, res) {
  res.send("404: Page not found", 404);
});

app.listen(port, () => console.log(`app running on port: ${port}`));
