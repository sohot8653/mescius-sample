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

let arrSpreadChangedInfoPool = [];
let arrSpreadEditingCell = [];
io.on('connection', (socket) => {
  // SpreadJS init
  // Server: history 내역을 emit
  // Client: 최신 동기화
  socket.on('synchronous spreadjs init', () => {
    socket.emit('synchronous spreadjs valueChanged', arrSpreadChangedInfoPool);
  });

  // cell 값 변경 완료 이벤트
  socket.on('synchronous spreadjs valueChanged', (arrSpreadChangedInfo) => {
    // 변경값과 동일 좌표 히스토리 삭제
    arrSpreadChangedInfo.forEach(x => {
      arrSpreadChangedInfoPool = arrSpreadChangedInfoPool.filter(y => !(y.row === x.row && y.col === x.col))
    });
    arrSpreadChangedInfoPool.push(...arrSpreadChangedInfo);
    socket.broadcast.emit("synchronous spreadjs valueChanged", arrSpreadChangedInfoPool);
    // 작업 커서 삭제
    arrSpreadEditingCell = arrSpreadEditingCell.filter(x => x.userName !== arrSpreadChangedInfo[0].userName);
    socket.broadcast.emit("synchronous spreadjs editStarting other", arrSpreadEditingCell);
  });
  // cell 값 편집 시작 이벤트
  socket.on('synchronous spreadjs editStarting', (item) => {
    // 작업 커서 생성
    item.socket_id = socket.id;
    arrSpreadEditingCell = arrSpreadEditingCell.filter(x => x.userName !== item.userName);
    arrSpreadEditingCell.push(item);
    socket.broadcast.emit("synchronous spreadjs editStarting other", arrSpreadEditingCell);
  });
  socket.on('disconnect', () => {
    // disconnect user의 작업 커서 삭제
    arrSpreadEditingCell = arrSpreadEditingCell.filter(x => x.socket_id !== socket.id);
    socket.broadcast.emit("synchronous spreadjs editStarting other", arrSpreadEditingCell);
  });
});


server.listen(3000, function () {
  console.log("start!! express server on port 3000");
});