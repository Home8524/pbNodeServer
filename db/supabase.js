const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
// Vercel 환경 변수에서 Supabase URL과 API Key 가져오기
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;