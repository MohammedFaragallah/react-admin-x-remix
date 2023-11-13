import postgrestRestProvider, {
  defaultPrimaryKeys,
  defaultSchema,
} from "@raphiniert/ra-data-postgrest";
import type { SupabaseClient } from "@supabase/supabase-js";
import { supabaseHttpClient } from "ra-supabase";
import type { DataProvider } from "react-admin";
import { supabase as supabaseClient } from "./supabase";

export const supabaseDataProvider = (config: {
  instanceUrl: string;
  apiKey: string;
  supabaseClient: SupabaseClient;
}): DataProvider => {
  const { instanceUrl, apiKey, supabaseClient } = config;

  return postgrestRestProvider({
    apiUrl: `${instanceUrl}/rest/v1`,
    httpClient: supabaseHttpClient({ apiKey, supabaseClient }),
    defaultListOp: "eq",
    primaryKeys: defaultPrimaryKeys,
    schema: defaultSchema,
  });
};

export const dataProvider = supabaseDataProvider({
  instanceUrl: "https://kbwpzwcnmhspryvhsjwi.supabase.co",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtid3B6d2NubWhzcHJ5dmhzandpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxODA2MjksImV4cCI6MjAxNDc1NjYyOX0.bbsV0A79JNbq7kBo2Gy64onPhepTHYs1zv7jv58VIN4",
  supabaseClient,
});
