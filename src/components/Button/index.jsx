import React from "react";
import styles from "./Button.module.css";
export const Button = (props) => {
  const { title } = props;

  return (
    <button onClick={props.onClick} className={`${styles.btn}`}>
      {title}
    </button>
  );
};
