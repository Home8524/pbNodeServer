const express = require('express');
const router = express.Router();  // 라우터 객체 생성

// GET 요청 처리
router.get('/get', (req, res) => {
    console.log('Received GET request at /api/get');
    res.json({ message: 'GET request received' });
});

// POST 요청 처리
router.post('/post', (req, res) => {
    const requestData = req.body;
    console.log('Received data:', requestData);
    res.json({
        message: 'Data received successfully!',
        receivedData: requestData
    });
});

module.exports = router;  // 라우터 모듈 내보내기
