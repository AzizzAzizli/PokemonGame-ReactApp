import React from "react";
import styles from "./Card.module.css";

export const Card = (props) => {
  console.log(props);
  function newId(id) {
    return id.toString().padStart(3, "0");
  }
  // console.log(newId(1));

  return (
    <div className={`${styles.card}`}>
      <p className={`${styles.card_title}`}>{props.name}</p>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId(
          props.id
        )}.png`}
        alt=""
      />
      <div className={`${styles.card_info}`}>
        <p>Type: {props.type}</p>
        <p>EXP {props.base_experience}</p>
      </div>
    </div>
  );
};
