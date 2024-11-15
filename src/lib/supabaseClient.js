import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gotfpvrpusieiwuktrjg.supabase.co";
// 환경 변수
// 숨길 필요가 있는 데이터
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
