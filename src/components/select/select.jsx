import { capitaliseWords } from "../../helpers/string";
import * as React from "react";
import { FaChevronDown } from "react-icons/fa";

import styles from "./select.module.css";

export const Select = ({ options, onChange }) => {
  return (
    <div className={styles.container}>
      <select onChange={onChange} className={styles.select}>
        {options.map((option) => (
          <option value={option} key={option}>
            {capitaliseWords(option)}
          </option>
        ))}
      </select>
      <FaChevronDown className={styles.chevron} />
    </div>
  );
};
