import { createClient } from '@supabase/supabase-js';

/** Supabase 클라이언트 (URL/공개키는 환경변수로 주입, 코드에 직접 입력하지 않음) */
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);
