"use strict"

const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
const app = express(); 


//static 파일 경로 지정
app.use(express.static(`${__dirname}/public`)); 


//템플릿 엔진 설정
app.set("views","./views");
app.set("view engine","pug");
 

//body-parser
app.use(bodyParser.json());

//url을 통해서 전달되는 데이터에 한글,공백등이 포함될 경우 제대로 인식안되는 문제 해결
app.use(bodyParser.urlencoded({extended : true}))

//라우터 추가
require("./lib/router/mainRouter")(app);
 
module.exports = app;
