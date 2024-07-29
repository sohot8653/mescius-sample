const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const axios = require("axios");
var app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/ejs"));
app.use(express.static(path.join(__dirname, "static")));
app.use(expressLayouts);

process.env.NODE_ENV =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() == "production"
    ? "production"
    : "development";

var pathJs = process.env.NODE_ENV == "production" ? "obfuscation" : "origin";

if (process.env.NODE_ENV == "production") {
  console.log("운영 환경으로 실행됩니다.");
} else if (process.env.NODE_ENV == "development") {
  console.log("개발 환경으로 실행됩니다.");
} else {
  console.error("환경 세팅에 오류가 발생하였습니다.");
  return;
}

app.get("/sample15", function (req, res) {
  let { depth1, depth2, sampleId, sample23Index } = req.query;
  res.render("sample" + sampleId + ".ejs", {
    depth1,
    depth2,
    sample23Index,
    pathJs,
  });
});

app.get("/sample", function (req, res) {
  let { depth1, depth2, sampleId } = req.query;
  let param = { depth1, depth2, pathJs };

  if (sampleId == 15) {
    param.sample23Index = req.query.sample23Index ?? -1;
  }
  if (sampleId == 31) {
    param.sample30Index = req.query.sample30Index ?? -1;
  }
  if (sampleId == 46) {
    param.sample48Index = req.query.sample30Index ?? -1;
  }

  res.render("sample" + sampleId + ".ejs", param);
});

const getApiData = async (request) => {
  let respnose;
  try {
    respnose = await axios.get("http://localhost:8650");
  } catch (e) {
    console.log(e);
  }

  return respnose;
};
app.get("/api/sample37", (req, res) => {
  getApiData(req).then((response) => {
    return res.json(response?.data);
  });
});

app.get("/", function (req, res) {
  res.redirect("/sample?depth1=INTRO&depth2=INTRO&sampleId=0");
});

let arrSpreadChangedInfo = [];
io.on('connection', (socket) => {
  socket.on('synchronous spreadjs', (objSpreadChangedInfo) => {
    arrSpreadChangedInfo.push(objSpreadChangedInfo);
    socket.broadcast.emit("synchronous spreadjs", arrSpreadChangedInfo);
  });
  socket.on('init synchronous spreadjs', (objSpreadChangedInfo) => {
    socket.emit('synchronous spreadjs', arrSpreadChangedInfo);
  });
  socket.on('disconnect', () => {
  });
});


server.listen(3000, function () {
  console.log("start!! express server on port 3000");
});