const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require("path")
var app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/ejs'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(expressLayouts);

app.get("/sample1", function(req, res) {
    let {depth1, depth2} = req.query;
    res.render("sample1.ejs", {depth1, depth2});
});
app.get("/sample2", function(req, res) {
    let {depth1, depth2} = req.query;
    res.render("sample2.ejs", {depth1, depth2});
});
app.get("/sample3", function(req, res) {
    let {depth1, depth2} = req.query;
    res.render("sample3.ejs", {depth1, depth2});
});
app.get("/sample4", function(req, res) {
    let {depth1, depth2} = req.query;
    res.render("sample4.ejs", {depth1, depth2});
});
app.get("/sample5", function(req, res) {
    let {depth1, depth2} = req.query;
    res.render("sample5.ejs", {depth1, depth2});
});
app.get("/", function(req, res) {
    res.redirect('/sample1?depth1=BMS&depth2=표준원가');
});

app.listen(3000, function() {
    console.log("start!! express server on port 3000");
});