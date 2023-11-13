import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kbwpzwcnmhspryvhsjwi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtid3B6d2NubWhzcHJ5dmhzandpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxODA2MjksImV4cCI6MjAxNDc1NjYyOX0.bbsV0A79JNbq7kBo2Gy64onPhepTHYs1zv7jv58VIN4"
);
