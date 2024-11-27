const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// JSON 본문 파싱을 위한 미들웨어 설정
app.use(express.json());  // 반드시 이 미들웨어가 필요합니다.

// 예시 GET 요청
app.get('/api/get', (req, res) => {
    res.json({ message: 'Hello from Node.js server!' });
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

// 서버 시작
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
