import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sdtjcwilmgjaezveoray.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkdGpjd2lsbWdqYWV6dmVvcmF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3Mzg4NjksImV4cCI6MjAwMzMxNDg2OX0.Ty3q8o87qzpAD7H3MdPjpyvB-ib9ZTk_fpbqp_wGnMs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
