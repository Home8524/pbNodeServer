const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiRouter = require('./routes/apiRouter');  // 라우터 파일 import

// CORS 설정
app.use(cors());
app.use(bodyParser.json());  // JSON 파싱

app.use(express.static("public"));

app.use('/api', apiRouter); 

module.exports = app;  // Vercel에서 이 파일을 실행함