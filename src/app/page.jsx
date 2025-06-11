import * as React from "react";

import { Journeys } from "../components/journeys/journeys";
import { getJourneys } from "../api/getJourneys";

export default async function Home() {
  const { journeys } = await getJourneys();

  return (
    <div>
      <Journeys journeys={journeys ?? []} />
    </div>
  );
}
