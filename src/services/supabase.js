import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jmpspsfukngrqczrplvd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcHNwc2Z1a25ncnFjenJwbHZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzODM1NzQsImV4cCI6MjA0NTk1OTU3NH0.Ty8IAL7gZn2gFSKuTUNsncFB-lAA6MlsW8VBfo0vzjM";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
