// api/supabase.js
import { createClient } from '@supabase/supabase-js';

// Vercel 환경 변수에서 Supabase URL과 API Key 가져오기
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
