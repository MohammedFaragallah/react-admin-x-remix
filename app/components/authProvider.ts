import { supabaseAuthProvider } from "ra-supabase";
import { supabase } from "./supabase";

export const authProvider = supabaseAuthProvider(supabase, {
  getIdentity: async (user) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, full_name")
      .match({ id: user.id })
      .single();

    if (!data || error) {
      throw new Error();
    }

    return {
      id: data.id,
      fullName: data.full_name,
    };
  },
});
