"use client";
import * as React from "react";
import { Journey } from "../journey/journey";
import { Select } from "../select/select";

import styles from "./journeys.module.css";

export const Journeys = ({ journeys }) => {
  const options = ["All", ...new Set(journeys?.map((j) => j.status ?? ""))];

  const [filteredJourneys, setFilteredJourneys] = React.useState(journeys);

  const onChange = React.useCallback(
    (event) => {
      const selectedStatus = event.target.value;
      const filteredJourneys =
        selectedStatus === "All"
          ? journeys
          : journeys?.filter((j) => j.status === selectedStatus);

      setFilteredJourneys(filteredJourneys);
    },
    [journeys]
  );

  return (
    <div>
      <Select options={options} onChange={onChange} />
      <div className={styles.journeys}>
        {filteredJourneys?.map(({ description, id, status, title }) => (
          <Journey
            key={id}
            id={id}
            description={description ?? ""}
            status={status ?? ""}
            title={title ?? ""}
          />
        ))}
      </div>
    </div>
  );
};
