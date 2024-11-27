// Supabase 클라이언트 초기화
const { createClient } = require('@supabase/supabase-js');

// 환경 변수에서 Supabase URL과 키를 가져옵니다.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
