const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');
const dbRouter = require('./routes/dbRouter');
const app = express();

// CORS 설정
app.use(cors());
app.use(bodyParser.json());  // JSON 파싱

// 라우터 연결
app.use('/api', apiRouter);  
app.use('/db', dbRouter);

// 정적 파일 제공 (public 폴더)
app.use(express.static('public'));

// 모든 다른 요청에 대해 index.html을 제공 (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//배포시 주석 (로컬테스트용)
/*
app.listen(3000, function() {
    console.log('listening on 3000')
})
*/

// 포트는 Vercel이 관리하므로, 따로 listen()을 호출하지 않습니다.
module.exports = app;  // Vercel에서 이 파일을 실행함
