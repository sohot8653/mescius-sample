const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require("path")
var app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/ejs'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(expressLayouts);

app.get("/", function(req, res) {
    res.render("home.ejs", {"name": "관리자"});
})

app.listen(3000, function() {
    console.log("start!! express server on port 3000")
})