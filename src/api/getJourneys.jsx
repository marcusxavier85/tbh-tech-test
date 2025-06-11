import { supabase } from "../supabase/client";

export async function getJourneys() {
  const { data: journeys, error } = await supabase.from("journeys").select();

  if (error) {
    throw new Error(`Error fetching journeys: ${error.message}`);
  }

  return { journeys, error };
}
