import * as React from "react";
import { capitaliseWords } from "../../helpers/string";

import styles from "./statusPill.module.css";

export const StatusPill = ({ status }) => {
  return (
    <span className={styles.statusPill} data-status={status}>
      {capitaliseWords(status)}
    </span>
  );
};
