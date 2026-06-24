import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hwudbbnidkgiiedqlgan.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vJ5cO4R-RGr1czXR-qRr0w_C6ZLuEBG';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);