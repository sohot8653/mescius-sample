const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require("path")
var app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/ejs'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(expressLayouts);

app.get("/sample1", function(req, res) {
    res.render("sample1.ejs");
})
app.get("/sample2", function(req, res) {
    res.render("sample2.ejs");
})
app.get("/sample3", function(req, res) {
    res.render("sample3.ejs");
})

app.listen(3000, function() {
    console.log("start!! express server on port 3000")
})