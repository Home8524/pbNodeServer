const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');  

router.get('/getData', async (req, res) => {

    try {
        // Supabase에서 상위 30개의 데이터 가져오기
        const { data, error } = await supabase
            .from('scoreboard')  // 데이터를 가져올 테이블명
            .select('*')  // 모든 컬럼 가져오기
            .order('score', { ascending: false })  // score를 기준으로 내림차순 정렬
            .limit(30);  // 상위 30개 데이터만 가져오기

        if (error) {
            return res.json({
                message: 'Error fetching data from Supabase',
                error: error.message
            });
        }

        // 데이터를 클라이언트에 응답
        return res.json({
            message: 'Data fetched successfully!',
            receivedData: data
        });
    } catch (err) {
        console.error(err);
        return res.json({
            message: 'Something went wrong while fetching data',
            error: err.message
        });
    }
});


module.exports = router;
