const express = require('express')
const app = express()
const ejs = requere("ejs");
const port = 3000;

app.set("view enginge", "ejs")
app.use(express.static("views"))

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/about',(req, res)=> res.send('hello'))

app.use(function(req,res) {
    res.send("404: Page not found", 404);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

