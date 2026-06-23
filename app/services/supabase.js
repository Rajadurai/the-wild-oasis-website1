import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cvvykqfxtbbtmelgyjrc.supabase.co";
const supabaseKey = "sb_publishable_h_x-AW7RnT8QuQNfDi6--w_ZxxA-yUC";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
