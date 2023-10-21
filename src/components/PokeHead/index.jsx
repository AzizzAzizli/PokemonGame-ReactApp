import React from "react";
import styles from "./PokeHead.module.css";
import { Button } from "../Button";

export const PokeHead = (props) => {
  return (
    <div className={`${styles.titleContainer}`}>
      <p className={`${styles.title}`}> Pokedex </p>
      <Button onClick={props.onClick} title="Start Game" />
    </div>
  );
};
