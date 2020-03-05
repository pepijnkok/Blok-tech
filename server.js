const express = require('express')
const app = express()
const ejs = require("ejs");
const port = 3000;

app.set("view enginge", "ejs")
app.use(express.static("views"))

app.get("/matching", (req, res) => {
    res.render("matching.ejs", {data });
});

app.use(function(req,res) {
    res.send("404: Page not found", 404);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

