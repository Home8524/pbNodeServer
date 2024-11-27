import { createClient } from '@supabase/supabase-js';

// Vercel 환경 변수에서 Supabase URL과 API Key 가져오기
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log('Supabase URL:', supabaseUrl);  // 확인을 위해 로그 출력
console.log('Supabase Key:', supabaseKey);  // 확인을 위해 로그 출력

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
