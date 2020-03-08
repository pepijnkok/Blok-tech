const express = require('express');
const app = express();
const ejs = require("ejs");
// const slug = require("slug");
// const bodyParser = require("bodyParser");
const port = 3000;


app.set("view engine", "ejs")
app.use(express.static("views"))


var data = [
  {
  id: "batman",
  title: "dark knight",
  description: "Gotham city"
},

{
  id: "spiderman",
  title: "Far from home",
  summary: "in europe"
}  
]

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
    res.render('pages/index', persons[req.params.id]);
});

app.get('/index', function(req, res){
    res.render('pages/index',{

     

    });
});

app.get('/matching', function(req, res){
    res.render('pages/matching',{

   

    });
});




app.use(function(req, res) {
  res.send("404: Page not found", 404);
});

app.listen(port, () => console.log(`app running on port: ${port}`));
