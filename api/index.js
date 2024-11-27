const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 설정
app.use(cors());
app.use(bodyParser.json());  // JSON 파싱

app.get('/api/get', (req, res) => {
    console.log('Received GET request at /api/get');
});

// 예시 GET 요청
app.get('/get', (req, res) => {
    console.log('Received GET request at /api/get');
});

// POST 요청 처리
app.post('/post', (req, res) => {
    // 클라이언트에서 보낸 데이터 받기
    const requestData = req.body;

    console.log('Received data:', requestData);

    // 응답을 보내기
    res.json({
        message: 'Data received successfully!',
        receivedData: requestData
    });
});


module.exports = app;  // Vercel에서 이 파일을 실행함