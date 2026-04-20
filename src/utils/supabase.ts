import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SITE_CONFIG as site } from '../config/site';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Supabase 테이블명 (site.dbPrefix 기반) */
export const TABLES = {
  bookmarks: `${site.dbPrefix}bookmarks`,
  progress: `${site.dbPrefix}progress`,
  comments: `${site.dbPrefix}comments`,
} as const;

// Supabase client - initialized only when env vars are set
let supabase: SupabaseClient | null = null;

const getSupabase = (): SupabaseClient | null => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

export default getSupabase;
