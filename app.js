const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require("path")
var app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/ejs'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(expressLayouts);
app.get("/sample", function(req, res) {
    let {depth1, depth2, sampleId} = req.query;
    res.render("sample"+sampleId+".ejs", {depth1, depth2});
});
app.get("/", function(req, res) {
    res.redirect('/sample?depth1=BMS&depth2=표준원가&sampleId=1');
});

app.listen(3000, function() {
    console.log("start!! express server on port 3000");
});