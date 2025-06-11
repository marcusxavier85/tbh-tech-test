import * as React from "react";

import styles from "./journey.module.css";
import { StatusPill } from "../statusPill/statusPill";

export const Journey = ({
  description,
  id,
  status,
  title,
}) => {
  return (
    <div key={id} className={styles.journey}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <StatusPill status={status} />
    </div>
  );
};
