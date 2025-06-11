import { supabase } from "../supabase/client";

export async function getJourneys() {
  const { data: journeys, error } = await supabase.from("journeys").select();

  return { journeys, error };
}
