const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 설정
app.use(cors());
app.use(bodyParser.json());  // JSON 파싱

app.get('/', (req, res) => {
    res.send('Hello, Unity Server!');
  });

  
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


module.exports = app;  // Vercel에서 이 파일을 실행함