import React, { useState } from "react";
import * as styles from "./text-field.css";
import { Delete } from "@/assets/svg";

interface Props extends React.ComponentProps<"input"> {
  label: string;
  placeholder: string;
}

const TextField = ({ label, placeholder, type, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.container({ isFocused })}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {isFocused && (
          <button
            type="button"
            className={styles.deleteButton}
            onMouseDown={(e) => e.preventDefault()}>
            <Delete className={styles.deleteButton} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
