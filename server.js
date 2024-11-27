const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// CORS 설정
app.use(cors());
app.use(bodyParser.json());  // JSON 파싱

app.use(express.static("public"));

app.get('/api/get', (req, res) => {
    console.log('Received GET request at /api/get');
    res.json({ message: 'GET request received' });  // 응답을 추가합니다.
});

// POST 요청 처리
app.post('/api/post', (req, res) => {
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