const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

router.get('/getData', async (req, res) => {
    try {
        // 전체 상위 30개 데이터 가져오기
        const { data: overallData, error: overallError } = await supabase
            .from('scoreboard')
            .select('name, score, school')
            .order('score', { ascending: false })
            .limit(30);

        if (overallError) {
            console.error("Error fetching overall data:", overallError);
        }

        // school별 상위 30개 데이터 가져오기
        const schoolResults = {};
        for (let school = 0; school <= 2; school++) {
            const { data, error } = await supabase
                .from('scoreboard')
                .select('name, score, school')
                .eq('school', school)  // 특정 school 값 필터링
                .order('score', { ascending: false })
                .limit(30);

            if (error) {
                console.error(`Error fetching data for school ${school}:`, error);
            } else {
                schoolResults[school] = data; // school 값을 키로 사용하여 데이터 저장
            }
        }

        // 데이터를 클라이언트에 응답
        return res.json({
            message: 'Data fetched successfully!',
            allTop30Data: overallData,
            schoolTopData: schoolResults
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
