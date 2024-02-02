const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require("path")
var app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/ejs'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(expressLayouts);

app.get("/sample15", function(req, res) {
    let {depth1, depth2, sampleId, sample23Index} = req.query;
    res.render("sample"+sampleId+".ejs", {depth1, depth2, sample23Index});
});

app.get("/sample", function(req, res) {
    let {depth1, depth2, sampleId} = req.query;
    let param = {depth1, depth2};
    
    if(sampleId == 15) {
        param.sample23Index = req.query.sample23Index ?? -1;
    }
    
    res.render("sample"+sampleId+".ejs", param);
});

app.get("/", function(req, res) {
    res.redirect('/sample?depth1=INTRO&depth2=INTRO&sampleId=0');
});

app.listen(3000, function() {
    console.log("start!! express server on port 3000");
});