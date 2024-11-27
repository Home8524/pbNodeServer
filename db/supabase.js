import { createClient } from '@supabase/supabase-js';

// Vercel 환경 변수에서 Supabase URL과 API Key 가져오기
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase);  // supabase 객체 확인

export default supabase;
